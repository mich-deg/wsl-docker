const express = require('express')
const mysql = require('mysql2/promise');

const app = express()

async function go(){
 
const connection = await mysql.createConnection()

}

go()

app.get('/', (req, res)=>{
    res.send(`<h1>Hello! Welcome.</h1>`)
})

app.listen(3000)