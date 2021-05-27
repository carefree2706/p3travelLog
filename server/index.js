const express = require("express")
const mongoose = require("mongoose")
const app = express();
const dotenv = require("dotenv");
const pinRoute = require("./routes/pins")
const userRoute = require("./routes/users");

const PORT = process.env.PORT || 3000;

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
 

app.listen(3000,()=>{
    console.log("backend is running")
})

