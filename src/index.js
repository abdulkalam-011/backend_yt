import dotenv from "dotenv"
import connnectDb from "./db/connnectDb.js"
import app from "./app.js"
dotenv.config({path:"./.env"})


connnectDb()
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
  console.log("Database connection established successfully");
})
.catch((error) => {
  console.error("Database connection failed:", error);
});
    


