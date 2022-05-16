const express = require('express');
const app = express();
const port = 5000;

const { AddDate } = require('./Middelware/Middelware');

/* using static files html and css*/
  app.use(express.static(__dirname +'/public'));
/*First Route home.html */
  app.get("/",AddDate,(req,res,next)=>{
    res.sendFile(__dirname+ "/public/home.html");
  });
/* Second Route services.html*/
  app.get("/Services",AddDate,(req,res,next)=>{
    res.sendFile( __dirname +"/public/Services.html");
  });
  /*third Route contact.html */
  app.get("/contact",AddDate,(req,res,next)=>{
    res.sendFile(__dirname+ "/public/contact.html");
  });
  


app.listen(port, (err) => {
  (err) ? console.log(err) : console.log(`Go to your localhost at port : ${port}`);
})