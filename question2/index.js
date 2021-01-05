const express = require("express")
const request = require("request")
const app = express()

app.get('/',  (req,res)=>{
    finaldata = []
    

   request('http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees', function (err, res1, body) {

        data = JSON.parse(body)

        data.map((item, res) => {

             finaldata.push({
                Name: item.name,
                Id: item.id,
                CreatedAt: item.createdAt
            })
        })
        console. log(finaldata);
    res.json(finaldata)
        
    }) 
})


app.listen(5001, (req,res)=>{
    console.log("server started")
})