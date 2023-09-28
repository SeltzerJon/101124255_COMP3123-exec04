var express = require('express')
const SERVER_PORT = 8089

var app = express()

//http://localhost:8089/
app.get("/", (req, res) => {
    res.status(201).send("<h1>Welcome to Express Server</h1>")
    
})
//http://localhost:8089/hello
app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>")

})
//http://localhost:8089/user
app.post("/user", (req, res) => {
    const p ={
        pid: 1,
        pnm: "Jonathan Seltzer",
      
    }

    res.send(JSON.stringify(p))
    //res.json(p)

})
//http://localhost:8089/user/Jonathan/Seltzer
// The line above is a path parameter

app.post("/user/:fname/:lname", (req, res)=>{
    const {fname, lname} = req.params
    res.send(`Welcome ${fname} ${lname}`)
})

//http://localhost:8089/query?fnm=Jonathan&lnm=Seltzer
//The line above is a query parameter
app.get("/query", (req, res)=>{   
    res.json(req.query)
  
})




app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}`)
})