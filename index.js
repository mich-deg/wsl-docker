const express = require('express')
const mysql = require('mysql2/promise');

const app = express()

let db

async function go(){
db = await mysql.createConnection({
    host:'localhost',
    user: 'root',
    port:3306,
    password:'example', 
    database:'pets'
})
app.listen(3000)
}
go()

app.get('/', async(req, res) => {
    const [users] = await db.execute('SELECT * FROM users')
    console.log(users)
    res.send(`<ul>${users.map(animal => `<li>${animal.name}</li>`).join(' ') }</ul>`)
    // res.send(`<h1>Hello! Welcome.</h1>`)
})

