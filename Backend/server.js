const app = require("./app");
const dotenv= require('dotenv');
const connectDatabase= require("./config/database.js");

// its for the error that does not have trycatch for error
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });



dotenv.config({path:"./config/config.env"});

connectDatabase();

const server= app.listen(process.env.PORT,()=>{
    console.log(`"server is working":${process.env.PORT}`);
})
// this is for the promise that does not have a catch phase and they throw the error
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });