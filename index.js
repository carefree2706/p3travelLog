const express = require("express")
const mongoose = require("mongoose")
const app = express();
const pinRoute = require("./routes/pins")
const userRoute = require("./routes/users");

const dotenv = require("dotenv");
require('dotenv').config();
const PORT = process.env.PORT || 3001;

dotenv.config();

app.use(express.json());

if (process.env.NODE_ENV ==="production"){
    app.use(express.static("client/build"));
}


mongoose 
 .connect(process.env.MONGO_URL || "mongodb+srv://carefree2706:carefree2706@cluster0.c9zgi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",  {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));

 app.use("/api/users", userRoute);
 app.use("/api/pins", pinRoute);
 

 const server = require("http").createServer(app);
 server.listen(PORT, () => console.log("server started"));

