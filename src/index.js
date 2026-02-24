import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { connect } from "mongoose";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongoDb connection failed :", err);
  });
