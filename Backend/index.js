const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
require('dotenv').config()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000

//middleware setup
app.use(express.json({limit: "25mb"}))
app.use(express.urlencoded({limit: "25mb"}))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
    origin: "http://localhost:5173",
    credentials:  true
}))

//all router
const authRoutes = require('./src/users/user.route')
const productRoutes = require("./src/products/products.route")

app.use('/api/auth', authRoutes)
app.use("/api/products", productRoutes)

main()
.then(()=> console.log("Mongodb is connected."))
.catch(err => console.log(err));


async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.get('/', (req, res) => {
    res.send('Hello I am Rushab!')
  })
  
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})