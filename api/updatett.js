const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded());

app.post('/api/updatett',async (req,res)=>{

    const { Deta } = require("deta")
    // add your Project Key
    const deta = Deta("a0m4hdrk_uJDTehfAHFHRjKtYtTSd7HXgApbDi72X")
    // name your DB
    const db = deta.Base("tt")
    try{
    await db.put(req.body['tt'],'tt');
    res.sendStatus(200)
    }
    catch(err){
        res.send(err.response.body)
    }
})

module.exports = app