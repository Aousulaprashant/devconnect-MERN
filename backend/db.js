const mongoose = require("mongoose");
require("dotenv").config();

const URL = process.env.MONGODB_URL; // Ensure your .env file has MONGO_URI

console.log("MongoDB URI:", URL);
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is Connected Sucessfully✅");
  } catch (error) {
    console.error("MongoDB Connection Error ❌", error);
    process.exit(1);
  }
};

module.exports = connectDB;
