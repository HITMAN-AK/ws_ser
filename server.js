const express=require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.listen(1234,()=>{
    console.log("server is on");
})

