(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2cs4":function(e,t,a){"use strict";a.r(t);var i=a("eVuF"),n=a.n(i),r=a("ln6h"),s=a.n(r),c=a("MX0m"),o=a.n(c),l=a("q1tI"),x=a.n(l),p=a("nOHt"),m=(a("YFqc"),a("ffb8")),u=a("baJn"),d=a("VtrM"),f=a("Pnxg"),g=a("LPxX"),w=a("vcXL"),b=a.n(w),j=x.a.createElement;function k(e){var t=Object(p.useRouter)().query.id;if(!t)return j(x.a.Fragment,null);var a=Object(d.a)("/api/categorie/".concat(t),(function(e){var t,a;return s.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,s.a.awrap(b()(e));case 2:return t=i.sent,i.next=5,s.a.awrap(t.json());case 5:return a=i.sent,i.abrupt("return",a);case 7:case"end":return i.stop()}}),null,null,null,n.a)})),i=a.data;a.revalidate;if(!i)return j(u.a,null);var r={title:"",description:i.categoria[0].claim1},c=i.categoria[0].seo,l=i.productos;i.categoria[0].claim_porque;return j("div",{className:"jsx-4115243307 container container-home"},j(m.NextSeo,{title:c.title,authorName:"Sergio Campos",publisherName:"Kaiowa",description:c.description,keywords:c.keywords}),j("section",{style:{background:"url(/images/categories/".concat(i.categoria[0].banner,")")},className:"jsx-4115243307 headerImage"},j("h1",{className:"jsx-4115243307"},i.categoria[0].name)),j(f.a,{config:r}),j("div",{className:"jsx-4115243307 listados"},j("div",{className:"jsx-4115243307 header"}),j("div",{className:"jsx-4115243307 listaproductos"},l.map((function(e){return j(g.a,{producto:e,key:e._id})})))),j("div",{className:"jsx-4115243307 categoriaAmpliado"},j("div",{className:"jsx-4115243307 h3"},"\xbfPor qu\xe9 comprar ",i.categoria[0].name," ?"),j("p",{className:"jsx-4115243307"}," ",i.categoria[0].claim_porque)),j(o.a,{id:"4115243307"},[".container.jsx-4115243307{min-height:100vh;display:block;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top :72px;}",".categoriaAmpliado.jsx-4115243307{display:block;width:90%;text-align:left;display:block;text-align:left;margin:auto;}",".categoriaAmpliado.jsx-4115243307 .h3.jsx-4115243307{font-size:22px;}",".headerImage.jsx-4115243307{height:150px;color:#fff;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:30px;background-position:center center !important;background-repeat:no-repeat !important;background-size:100% !important;}",".headerImage.jsx-4115243307 h1.jsx-4115243307{-webkit-flex:1;-ms-flex:1;flex:1;margin:0 auto;margin-block-start:inherit;margin-block-end:inherit;margin-top:13px;text-shadow:3px 3px #000,3px 3px #000;}",".listaproductos.jsx-4115243307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:90%;margin:0 auto;}"]))}k.getInitialProps=function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("get InitialPropppppsssss"),e.abrupt("return",{});case 2:case"end":return e.stop()}}),null,null,null,n.a)},t.default=k},BR8T:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return a("YbiN")}])},YbiN:function(e,t,a){"use strict";a.r(t);var i=a("eVuF"),n=a.n(i),r=a("ln6h"),s=a.n(r),c=a("MX0m"),o=a.n(c),l=a("q1tI"),x=a.n(l),p=(a("ffb8"),a("vcXL")),m=a.n(p),u=a("VtrM"),d=(a("f6Bf"),a("baJn")),f=x.a.createElement;function g(e){return e.length>100?e.substring(0,100)+"...":e}var w=function(e){console.log("initialProps",e);var t=Object(u.a)("/api/blog",(function(e){var t,a;return s.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,s.a.awrap(m()(e));case 2:return t=i.sent,i.next=5,s.a.awrap(t.json());case 5:return a=i.sent,i.abrupt("return",a);case 7:case"end":return i.stop()}}),null,null,null,n.a)})),a=t.data,i=(t.revalidate,a?a.entries:null),r=a?a.products:null;return a?f("div",{className:"jsx-45496856 container"},f("div",{className:"jsx-45496856 container-entries"},f("h1",{className:"jsx-45496856 h1blog"},"Blog"),f("div",{className:"jsx-45496856 row"},i.map((function(e){return f("div",{className:"jsx-45496856 entrie"},f("div",{className:"jsx-45496856 entrie-image"},f("img",{src:e.imageTitle,className:"jsx-45496856 image-entry"})),f("div",{className:"jsx-45496856 entrie-title"},e.title),f("div",{className:"jsx-45496856 entrie-description"},function(e){var t=e.replace(new RegExp("<p>","g"),"\r");return t=t.replace(new RegExp("</p>","g"),"\n")}(e.description)))})))),f("div",{className:"jsx-45496856 container-products"},f("h2",{className:"jsx-45496856 h2blog"},"Productos descatacos"),r.map((function(e){return f("div",{className:"jsx-45496856 product"},f("a",{href:e.url,target:"_blank",rel:"nofollow",title:g(e.title),className:"jsx-45496856 link"},f("div",{className:"jsx-45496856 product-image"},f("img",{src:e.images[0].url,className:"jsx-45496856 image-entry"})),f("div",{className:"jsx-45496856 productContent"},f("div",{className:"jsx-45496856 product-title"},g(e.title)),f("div",{className:"jsx-45496856 product-price"},e.price))))}))),f(o.a,{id:"45496856"},[".container.jsx-45496856{min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;width:80%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 auto;margin-top:130px;}",".product.jsx-45496856{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:20px;}",".product.jsx-45496856 a.jsx-45496856{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".product.jsx-45496856 .product-image.jsx-45496856{width:30%;}",".product.jsx-45496856 .product-title.jsx-45496856{font-size:12px;line-height:15px;}",".product.jsx-45496856 .product-price.jsx-45496856{color:#E91E63;font-size:20px;}",".product.jsx-45496856 .productContent.jsx-45496856{width:64%;}",".h1blog.jsx-45496856{margin-left:20px;font-size:1.50rem;}",".h2blog.jsx-45496856{font-size:1.50rem;}",".image-entry.jsx-45496856{max-width:80%;}",".container-entries.jsx-45496856{-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;width:65%;}",".container-productos.jsx-45496856 .h2blog.jsx-45496856{font-size:1.75rem;}",".entrie.jsx-45496856{-webkit-flex :1 auto;-ms-flex :1 auto;flex :1 auto;margin :20px;}",".entrie-title.jsx-45496856{font-size:18px;line-height:20px;margin-bottom:15px;}",".entrie-description.jsx-45496856{font-size:11px;color:#888;line-height:16px;}",".container.jsx-45496856 .text.jsx-45496856{font-size:1.3rem;width:98%;line-height:1.8rem;}",".container-products.jsx-45496856{width:30%;}",".row.jsx-45496856{display:-ms-flexbox;display:-webkit-flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:center;-ms-flex-pack:distribute;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-align-items:center;-ms-flex-align:start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"])):f(d.a,null)};w.getInitialProps=function(e){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),null,null,null,n.a)},t.default=w},f6Bf:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("VvzN"),s=a.n(r),c=a("YFqc"),o=a.n(c),l=(a("2cs4"),n.a.createElement);t.a=function(e){return console.log("props boxcategory",e),l("div",{className:s.a.boxCategory},l("div",{className:s.a.shopcatbox},l(o.a,{href:{pathname:"/categoria/".concat(e.category.id,"/").concat(e.category.slug,".html")}},l("img",{src:"/images/categories/"+e.category.image,title:e.category.name+" running"})),l("h3",{className:s.a.name},e.category.name),l(o.a,{href:{pathname:"/categoria/".concat(e.category.id,"/").concat(e.category.slug,".html")}},l("button",{className:s.a.button},"Ver mas"))),l("div",{className:s.a.description},l(o.a,{href:{pathname:"/categoria/".concat(e.category.id,"/").concat(e.category.slug,".html")}},e.category.description)))}}},[["BR8T",1,2,0,3,4,6,5]]]);