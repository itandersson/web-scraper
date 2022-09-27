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

app.get('/', (req, res) => {
  getAftonbladet().then(
    function(value) { res.send( value ); },
  );
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })