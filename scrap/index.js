const axios = require("axios")
const cheerio = require("cheerio")
const cheerioTableparser = require('cheerio-tableparser');
const fs=require('fs');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'nextjstsa';

const agents=require('./userAgents.json');
var _ = require('underscore');
var wget = require('node-wget');

async function getProducts(db){
  const Products=await db.collection('products_base').find({}).toArray();
  return Products;
}

async function fetchHTML(url) {
  try {
    const randomAgent = Math.floor(Math.random() * agents.length);
    const { data } = await axios.get(url,{ headers: { 'User-Agent': randomAgent }  })
    return cheerio.load(data)  
  } catch (error) {
    
  }
  
}
async function updateProduct(db,producto){
  
  db.collection('products').replaceOne({url:producto.url},{"seo":producto.seo,
    "title":producto.title,
    "price":producto.price,
    "images":producto.images,
    "details":producto.details,
    "bullets":producto.bullets,
    "url":producto.url,
    "id":producto.id,
    "name":producto.name,
    "nameseo":producto.nameseo,
    "stars":producto.stars,
    "cat":producto.cat,
    "updated":producto.updated
  },{ upsert: true }  );

  db.collection('prices_history').insertOne({
    "id":producto.id,
    "price":producto.price,
    "date":producto.updated
  });
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
  
  let imagesP=[];
  $('#altImages img').each(function(i,value) {
    const image={
           url:$(value).attr('src').replace('40_.jpg','400_.jpg')
    }
    imagesP.push(image);
  });
  
  let bullets=[];
  $('#featurebullets_feature_div ul span[class="a-list-item"]').each(function(i,value) {
    if(i>0) bullets.push($(value).text().replace(/\n/g,'').trim());
  });
  
  const technicalDetails=$('.prodDetTable');
  let productDetails=[];
  var data = technicalDetails.parsetable(false, false, true);
 
  _.each(data[0],async function(item,index){
    if(item){
      let propsP={
        "title":item,
        "value":data[1][index].replace(/\n/g,'')
      }
      //console.log(propsP);
      productDetails.push(propsP);
      
    }
  });
  console.log('------------');

  const product={
    "seo":seoProduct,
    "title":title,
    "price":price,
    "images":imagesP,
    "bullets":bullets,
    "details":productDetails,
    "url":element.url,
    "id":element.id,
    "name":element.name,
    "stars":stars,
    "cat":element.cat,
    "nameseo":element.nameseo,
    "updated":new Date().toISOString()
  }
  return product;
}

(async () => {

  const options={useUnifiedTopology:true}
  MongoClient.connect(url,options, async function(err, client) {

    assert.equal(null, err);
    
    const db = client.db(dbName);
    try {
      getProducts(db).then((Productos)=>{
        
        Productos.forEach(async (element,index) => {
          //if(index<2){
 
            try {
              
              let producto=await getProduct(element);
              console.log(producto.url);
              producto.update=new Date();
              await updateProduct(db,producto);

            } catch (error) {
              
            }
         
         // }
          
          });
          
        });
      
    } catch (error) {
      
    }
  })

})();