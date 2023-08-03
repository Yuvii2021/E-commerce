const express = require("express");
const app = express();
const errorMiddleware =require("../Backend/middleware/error");
// it is used for parse incoming json data and made it available in req.body
app.use(express.json());
//it is used for parse incoming cookie data and made easy access through req.cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const product= require("./routes/productroutes");
const user = require("./routes/userroutes");
const order= require("./routes/orderRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
  
app.use(errorMiddleware);
module.exports =app;

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;