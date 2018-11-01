const express=require('express');
var app=express();

var request = require('request');
request('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY',
 function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
/*
app.get('/',function(req,res){
  res.send('hello world');
});
app.post('/',function(req,res){});
app.listen(3000);
*/
