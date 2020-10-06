const axios = require("axios")
const puppeteer = require('puppeteer')

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

async function getCategories(db){
  const Products=await db.collection('categories').find({}).toArray();
  return Products;
}


function generate_xml_sitemap(urls) {
   var root_path = 'http://www.accesorios-running.com/';

  var xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+'\r\n';
  for (var i in urls) {
    xml += '<url>'+'\r\n';
    xml += '<loc>'+ root_path + urls[i].url + '</loc>'+'\r\n';
    xml += '<changefreq>'+ urls[i].changefreq +'</changefreq>'+'\r\n';
    xml += '<priority>'+ urls[i].priority  +'</priority>'+'\r\n';
    xml += '</url>'+'\r\n';
    i++;
  }
  xml += '</urlset>';
  return xml;
}

(async () => {

  let pages=[];
  const options={useUnifiedTopology:true}
  MongoClient.connect(url,options, async function(err, client) {

    assert.equal(null, err);
    
    const db = client.db(dbName);
    try {
      Productos=await getProducts(db);
      Categorias=await getCategories(db);

      Productos.forEach((element,index) => {
        let page={
          
            url :'http://www.accesorios-running-com/producto/'+element.id+'/'+element.nameseo+'.html',
            changefreq:'daily',
            priority:'0.4'
          }
        pages.push(page);
    });
      Categorias.forEach((element,index) => {
          let page={
            
              url :'http://www.accesorios-running-com/categoria/'+element.id+'/'+element.slug+'.html',
              changefreq:'daily',
              priority:'0.4'
            }
          pages.push(page);
      });
      console.log('--------- pages--------');
      console.log(pages);
      sitemap=generate_xml_sitemap(pages);
      console.log('sitemap: ', sitemap);

      try {
        fs.writeFile('../front/sitemap.xml', sitemap, function (err){
          if (err) process.exit(1);
          console.log('It\'s saved!');
          process.exit(1);
        }); 
      } catch (error) {
        process.exit(1);
      }
      

    } catch (error) {
      
    }
  })

})();