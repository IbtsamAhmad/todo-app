const mysql = require("mysql2")

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ibtsam123",
    database:"test"
})

module.exports = db