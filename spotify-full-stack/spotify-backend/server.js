import express from 'express'
import cors from 'cors'
import 'dotenv/config' //due to this we get a supports from environment backend
import songRouter from './src/routes/songRoute.js'
import connectDB from './src/config/mongodb.js'
import connectCloudinary from './src/config/cloudinary.js'
import albumRouter from './src/routes/albumRoute.js'

//app config

const app = express() //here we store the instance of express app in app variable
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middleware

app.use(express.json())
app.use(cors()) //we can connect backend and frontend using cors method


//initiallising routers
app.use("/api/song",songRouter)

app.use("/api/album",albumRouter)

app.get('/',(req,res)=> res.send("API IS WORKING"))

app.listen(port,()=>console.log(`Server starts on ${port}`)) //to run the express server