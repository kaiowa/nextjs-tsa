const axios = require("axios")
const cheerio = require("cheerio")
const cheerioTableparser = require('cheerio-tableparser');
const fs=require('fs');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'nextjstsa';

var _ = require('underscore');
var wget = require('node-wget');

async function getProducts(db){
  const Products=await db.collection('products_base').find({}).toArray();
  return Products;
}

async function fetchHTML(url) {
  const { data } = await axios.get(url)
  return cheerio.load(data)
}
async function updateProduct(db,product){
  db.collection('products').replaceOne({url:product.url},{$set:product},{ upsert: true }  );
}
async function getProduct(element){
  const $=await fetchHTML(element.url);
  cheerioTableparser($);
  
  //metas
  let seoProduct=[{
    title:$("meta[name='title']").attr('content').trim(),
    description:$("meta[name='description']").attr('content').trim(),
    keywords:$("meta[name='keywords']").attr('content')
  }]

  const title=$('#productTitle').text().trim();
  let price=$('#priceblock_ourprice').text().trim();
  if(!price){
   price= $('#priceblock_saleprice').text().trim();
  }
  if(!price){
    price= $('#priceblock_dealprice').text().trim();
  }
  const stars=$('.reviewCountTextLinkedHistogram.noUnderline').text().replace(/\n/g,'').trim();
  let images=JSON.parse($('#landingImage').attr('data-a-dynamic-image'));
  let imagesP=[];
  _.each(images,function(index,item){
    const image={
      url:item
    }
    imagesP.push(image);
  })

  const technicalDetails=$('.pdTab table');
  let productDetails=[];
  var data = technicalDetails.parsetable(false, false, true);
  _.each(data[0],function(item,index){
    if(item){
      let propsP={
        "title":item,
        "value":data[1][index].replace(/\n/g,'')
      }
      productDetails.push(propsP);
    }
  });

  const product={
    "seo":seoProduct,
    "title":title,
    "price":price,
    "images":imagesP,
    "details":productDetails,
    "url":element.url,
    "id":element.id,
    "name":element.name,
    "stars":stars,
    "cat":element.cat
  }
  return product;
}

(async () => {

  const options={useUnifiedTopology:true}
  MongoClient.connect(url,options, function(err, client) {

    assert.equal(null, err);
    console.log("Connected correctly to server");
    const db = client.db(dbName);
    try {
      getProducts(db).then((Productos)=>{
        Productos.forEach(async (element,index) => {
          
          let producto=await getProduct(element);
          console.log(producto);
          await updateProduct(db,producto);
          
          
          });
        });
      
    } catch (error) {
      
    }
  })

})();