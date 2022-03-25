require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

//import ContactMe module
const contactRoute = require('./route/contactRoute')

//calls express function and puts new application inside here
const app = express();

//create the middleware
app.use(express.json());
app.use(cors());

//hit the correct route
app.use("/", contactRoute);

//prod deployment
if (process.env.NODE_ENV === "production")
{
    //middleware function
    app.use(express.static("client/build"))
    app.get("*",(req,res)=>(
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    ))
}

const port = process.env.PORT;
app.listen(port, console.log(`server listening to port 5005 only`));