import app from "./src/app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ DB conectada");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server en puerto ${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));