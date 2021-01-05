const express = require("express")

// import Employee Data
const employees = require("./employees.json")

// import Project data
const projects  = require("./projects.json")

const app = express()

// console.log(employees.employees)
// console.log(projects.projects)

app.get('/employee/:id', (req,res)=>{
    var id = Number(req.params.id)
    let employData = employees.employees
    
    employData.map(item=>{
        if(item.employId === id){
            // console.log(item)
            return res.json(item)
        }
    })
})

app.get('/project/:id', (req, res)=>{
    var id = Number(req.params.id)
    console.log(id)
    projectData = projects.projects

    projectData.map((item)=>{
        if(item.id === id){
            return res.json(item)
        }
    })

    res.json({
        message : projectData
    })
})


app.get("/getEmployeDetails",(req,res)=>{

    employeeData = employees.employees  //Array
    projectData = projects.projects  //Array

    finalData = []


    employeeData.map(item =>{
        projectId = item.projectId

        let projectDetails 

        projectData.map(data=>{
            if (data.id == projectId){
                projectDetails = data
            }
        })
        console.log(projectDetails)

        finalData.push({
            employedetail : item,
             projects : projectDetails
          })


       
    })
    res.status(200).json(finalData)

})


app.listen(5000, (req,res)=>{
    console.log("server started")
})