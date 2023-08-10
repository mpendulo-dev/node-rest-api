const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bookRoutes = require("./src/routes/bookRoutes");

const app = express();
const PORT = process.env.PORT || 3001;
// const mongoURI = process.env.MONGODB_URI;

//Database connection
require("./config/db");

//CORS - access API on a different domain or origin
app.use(cors());

//middleware
app.use(express.json());
app.use("/api/book", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
