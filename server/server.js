const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();

mongoose.connect(
    process.env.MONGO_URI,
    {useUnifiedToplogy:true,useNewUrlParser:true},
    () => console.log("connected to db")
);

app.use(express.json());

// import routes
const userRoutes = require("./routes/user");
app.use("/api/user",userRoutes);

app.listen(3900, () => console.log("Server Up and running form on port 4000"));
