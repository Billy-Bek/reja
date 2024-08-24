console.log("Wep serverni  boshlash");
const express = require("express"); 
const app = express(); 
const fs = require("fs");


// MONGODB caqirish

const db = require("./server").db();
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
 if (err) {
console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// MONGODB caqirish


// 1: Kirish
app.use(express.static("public"));
app.use(express.static('public'));

app.use(express.json()); //json farmatdagi datani objectga ogirib beradi
app.use(express.urlencoded({ extended: true })); // hrml, formdan post qilgan narsani qabul qd //  true nest objectni ochib beradi.

// 2: Session code

// 3: Views code
// backendda html yasab clientga jo'natamiz
app.set("views", "views"); //frontetimizni views folderdan topish
app.set("view engine", "ejs"); // ejs orqali frontetni yasaymiz

// ********************************* //

// 4: Routing code
// Jonatadi
app.post("/create-item", (req, res) => {
  // console.log(req.body);
  console.log("user entered /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.get("/author", (req, res) => {
console.log(req.body)

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });});
});


app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
  { _id: new mongodb.ObjectId(data.id) },
   { $set: { reja: data.new_input } },
   function (err, data) {
  res.json({ state: "success" });
  });
});

const new_reja = req.body.reja;
db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
  if (err){
    console.log(err)
    res.end("something went wrong")
  } else {
    res.end("successfully edded")
  }
});
});

// qabul qiladi
app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      
      }
    });
});
module.exports = app;