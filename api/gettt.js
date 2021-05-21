const express = require('express')
const app = express()
const cors = require('cors')
// app.use(express.json());
// app.use(express.urlencoded());
app.use(cors());
const axios = require("axios")

app.get('/api/gettt',(req,res)=>{
    console.log(process.env.API_ENDPOINT)
    axios.get(process.env.API_ENDPOINT).then(response=>{
        let ar = response.data
        // console.log(ar)
        // let ar = (data['value']);
       res.json(ar);
    }).catch(err=>{
        res.send(err)
    })
})
module.exports = app

