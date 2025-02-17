const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db");
const routes = require("./routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
