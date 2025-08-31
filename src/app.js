import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express()


// middlewares
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus:200,
  credentials:true
}))
app.use(express.json({limit:"16kb"}))  //to use json data from request like form
app.use(express.urlencoded({extended:true})) // to use data from url's
app.use(cookieParser())   // to access user cookie of browser
app.use(express.static("public"))


export default app;