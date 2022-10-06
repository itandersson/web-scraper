const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express()
const port = 3000

let getAftonbladet = async () => {
  let test = await axios('https://www.aftonbladet.se/')
   .then(function (response) {
       let articles = [];
       const html = response.data;
       const $ = cheerio.load(html);

       const logotype = $(".hyperion-css-1wjfkpv").attr('src');
       //const headline = $("main section div:first");
       const headline = "Test";
       const url = "https://www.aftonbladet.se/";

       articles.push({
           logotype,
           headline,
           url
       });

       return articles[0];
   })
   return test;
  }


  let articles = [];
  let head = "<html><head><title>Test title</title></head><body><div>";
  let bottom = "</div></body></html>";

    axios('https://www.bbc.com/')
     .then(function (response) {
         const html = response.data;
         const $ = cheerio.load(html);
  
         const logotype = "BBC";
         const headline = "Test";
         const url = "https://www.bbc.com/";
  
         articles.push({
             logotype,
             headline,
             url
         });

         console.log(articles[0]);
     })

app.get('/', (req, res) => {
     getAftonbladet().then(
       function(value) { },
     );
     res.send( head + articles[0] +  bottom);
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })