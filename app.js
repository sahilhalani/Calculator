const express = require("express");
const app = express();


const dir = __dirname;

app.use(express.static(dir));

app.listen(4000,()=>{
   console.log("Listining Boss");
});

