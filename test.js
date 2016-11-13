// var request = require('request');
// var cheerio = require('cheerio');
// //var URL = require('url-parse');
//
// function questionGrabber(pageUrl) {
//   console.log("Visiting page: " + pageUrl);
//
//   request.get(pageUrl, function(error, response, body) {
//     if (error) {
//       console.log(error);
//     }
//
//     if (response.statusCode === 200) {
//       console.log(body);
//       var $ = cheerio.load(body);
//       var rightFrame = $('frame').attr('mainFrame');
//       console.log(rightFrame);
//     }
//   });
// }
//
// questionGrabber('http://www.20q.net');
