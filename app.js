//jshint esversion:6

const express=require("express");
const bodyParser = require("body-parser");
const app=express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
let items=[];
let workItems=[];
app.get("/",function(req,res){
    let today =new Date();
    let currentday=today.getDay;
    let options={
        weekday:"long",
        day:"numeric",
        month:"long",
    }
    let day=today.toLocaleDateString("en-US",options);
    

    res.render("lists",{listTitle:day,newListItems:items});
});

app.post("/",function(req,res){
    let item=req.body.newItem;
    if(req.body.list=="work")
    {
        workItems.push(item);
        res.redirect("/work");
    }
    else
    {
      items.push(item);
      res.redirect("/");
    }
});

app.get("/work",function(req,res){
    res.render("lists",{listTitle:"work list",newListItems:workItems})
});

app.get("/about",function(req,res){
    res.render("about");
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});

