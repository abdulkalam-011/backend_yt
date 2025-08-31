import mongoose from "mongoose";
import { DB_NAME } from "../constaints.js";

const connnectDb = async () => {
  try {
    const res = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    console.log('databse connected ' , res.connection.host)
  } catch (error) {
    console.log(`DATABASE CONNECTION FAILED : `,error)
    process.exit(1)
  }
}


export default connnectDb;