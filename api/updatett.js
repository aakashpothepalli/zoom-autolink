const express = require('express')
const app = express()
const cors = require('cors')
const axios = require("axios")
// app.use(express.json());
app.use(express.urlencoded());
// app.use(cors());
app.post('/api/updatett',async (req,res)=>{

    try{
        let tt = JSON.parse(req.body['tt'])
        
        for(let i in tt){
            let obj = tt[i];
            console.log(obj)
            tt[i]['id'] = `${obj['dayName']}${obj['start']}${obj['end']}`
        }
        // console.log(tt);
        await axios.post(process.env.API_ENDPOINT,{
            tt
        },{
            
            headers: {
              // Overwrite Axios's automatically set Content-Type
              'Content-Type': 'application/json'
            }
          });
        res.sendStatus(200)
    }
    catch(err){
        console.log(err)
        res.send(err.response)
    }
})

module.exports = app