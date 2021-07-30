const express = require("express");
const app = express();
const PORT =process.env.PORT || 4000;


const dir = __dirname;

app.use(express.static(dir));

app.listen(PORT,()=>{
   console.log(`Listining to ${PORT} Boss`);
});

