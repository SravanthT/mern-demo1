const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 1234;

app.use(cors());
app.use(bodyParser.json());

app.all("/*", (req,res)=>{
    res.send(`You are in page ${req.url}`)
})

app.listen(port, ()=>{
    console.log(`Server is running ob port: ${port}`);
})