const express = require("express")
const mongoose = require("mongoose")
const app = express();
const dotenv = require("dotenv");
const pinRoute = require("./routes/pins")
const userRoute = require("./routes/users");

dotenv.config();

app.use(express.json());


mongoose 
 .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));

 app.use("/api/users", userRoute);
 app.use("/api/pins", pinRoute);
 

app.listen(3000,()=>{
    console.log("backend is running")
})

