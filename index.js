const express=require("express");
const bodyParser=require("body-parser");
const e = require("express");
const items=["BuyFood","CoodFood","EatFood"];
const workItem=[""];
const app=express();

app.use(bodyParser.urlencoded({ extended : true })); 
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get('/', (req,resp)=>{
    let date=new Date();
    const options={
        weekday: "long",
        day:"numeric",
        month:"long",
    };
    const today= date.toLocaleDateString("en-Us", options);
    resp.render('list',{ kindOfDay : today, itemList : items });
});
app.post('/',(req,resp)=>{  
    
    const item =req.body.itemList;
    if(req.body.List==="Work"){
        workItem.push(item);
        resp.redirect("/work");
    }
});
app.get('/work', (req,resp)=>{
    resp.render('list', {kindOfDay:"Work List", itemList:workItem}) 
});

app.listen("3000",()=>{
    console.log("Server is started.")
});