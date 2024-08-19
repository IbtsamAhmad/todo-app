const express = require('express')
const dotenv = require('dotenv').config()
const toDoRoutes = require('./routes/todoRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/todo', toDoRoutes)

app.use(errorHandler)

connectDB()
app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
})