const mongoose = require('mongoose');

const connectDatabase= ()=>{
    mongoose.connect(process.env.DB_URI).then(()=>{
    console.log(`"mongo connected"`)
    }).catch((err)=>{
    console.log(err);
     } );
}
module.exports= connectDatabase;