const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express()
const port = 3000

axios('https://www.theguardian.com/international')
   .then(function (response) {
       const html = response.data;
       const $ = cheerio.load(html);
       console.log(html);
   })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })