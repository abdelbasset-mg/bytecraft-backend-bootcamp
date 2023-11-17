const express = require("express")
const fs = require("fs")

function readJson (filename){
    const db = fs.readFileSync(filename, "utf8")
    return JSON.parse(db)
}

function writeJson (filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data))

}


const db = readJson("data.json")
const app = express()
const PORT = 3000

//API s

app.use(express.json())

app.get("/",(req,res)=>{
    console.log("hello world")
    res.send("<h1>Hello world</h1> <p>hello world</p>")
})

app.post("/submit-data",(req,res)=>{
    const data = req.body;
    console.log(data.msg)
    res.send("we ve got you")
})

app.get("/user/:id", (req,res)=>{
    const userid = req.params.id;
    console.log(userid)
    res.send("i got ur id")
})

app.get("/alldata",(req,res)=>{
    res.send(db)
})

app.get("/users",(req,res)=>{
    res.send(db.users)
})

app.get("/products",(req,res)=>{
    res.send(db.products)
})

app.post("/register",(req,res)=>{
    const data = req.body;
    writeJson("data.json", data);
    res.send(db.users)
})




app.listen(PORT, ()=>{
    console.log(`server has started in : ${PORT}`)
    
})