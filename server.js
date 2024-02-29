// let express = require("express");
// let app = express();
// let path = require("path");
// let fs = require("fs");
// app.use(express.static("public"));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/index.html"));
// });
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/About.html"));
// });
// app.get("/contact", (req, res) => {
//   let x = { login: true, name: "utsav" };
//   let temp = path.join(__dirname, "public/Contact.html");
//   fs.readFile(temp, "utf-8", (err, data) => {
//     if (err) {
//       res.send("somthing wrong");
//     } else {
//       let newData = data.replace("<!-- dynamic -->", x.name);
//       res.end(newData);
//     }
//   });
// });
// app.listen(8080, () => {
//   console.log("connect");
// });








// /..................ejs..............................
let express=require('express')
let app=express()
app.set('view engine','ejs')
app.use(express.static('views'))
 app.get('/',(req,res)=>{
    let arr=[{name:"utsav"},{name:"Ram"},{name:"vishal"}]
    let title="utsav jha"
    let login=true
    res.render('pages/index',{arr,login,title})
 })
 app.get('/about',(req,res)=>{
    res.render('pages/About')
 })
 app.get('/contact',(req,res)=>{
    res.render('pages/Contact')
 })
app.listen(8080,()=>{
    console.log('connect')
})
