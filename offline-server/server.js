const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectId;
   
const app = express();
const jsonParser = express.json();
 
// создаем объект MongoClient и передаем ему строку подключения
const mongoClient = new MongoClient("mongodb://localhost:27017/");

mongoClient.connect(function(err, client){
  if(err) return console.log(err);
  dbClient = client;
  app.locals.collection = client.db("ziffdb").collection("posts");
  app.listen(3000, function(){
      console.log("Сервер ожидает подключения...");
  });
});


app.post("/post", jsonParser, function (req, res) {
       
  if(!req.body) return res.sendStatus(400);
     
  const url = req.body.url;
  const post = {url: url};
     
  const collection = req.app.locals.collection;
  collection.insertOne(post, function(err, result){
             
      if(err) return console.log(err);
      res.send(post);
  });
});