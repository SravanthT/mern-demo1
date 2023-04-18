const mongoose = require('mongoose');
require('dotenv').config;

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('MongoDB database connection established successfully..!');
})


