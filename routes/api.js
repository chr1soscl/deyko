const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("xoemodkv","xoemodkv","1HA9UVoPV9sngqqfiXPycMSdpjvZMIaL", {
    host:"baasu.db.elephantsql.com",
    dialect:"postgres",
    operatorsAliases: false,
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
});

router.get("/",(req,res)=>{
        res.send("Welcome to the Deyko routes.");
});

sequelize
.authenticate()
.then(()=>{
    console.log("Connection has been established successfully.");
})
.catch(error =>{
    console.error("Unable to connecto to DB ", error);
});

function verifyToken(req,res,next){
    
    if(!req.headers.authorization){
        console.log("!req.headers.authorization");
        return res.status(401).send("Unauthorized request.");
    }

    let token = req.headers.authorization.split(" ")[1];
    
    if (token === "null"){
        console.log("null");
        res.status(401).send("Unathorized request.");
    }

    let payload;
    try{
        payload = jwt.verify(token,"M%l#kZg!f");
    } catch (error){
        console.log("error");
        return res.status(401).send("Unathorized request.");
    }

    if(!payload){
        console.log("no payload");
        return res.status(401).send("Unathorized request.");
    }

    req.userId = payload.subject;
    next();
}

const month = sequelize.import("../models/months");
const release = sequelize.import("../models/releases");
const releaseType = sequelize.import("../models/release_type");
const bugCriticality = sequelize.import("../models/bug_criticality");
const bugStatus = sequelize.import("../models/bug_status");
const user = sequelize.import("../models/app_users");
const phase = sequelize.import("../models/phases");
const project = sequelize.import("../models/projects");


router.get("/months",(req,res)=>{
    month.findAll().then(months=>res.json(months));
});
router.get("/releases",verifyToken,(req,res)=>{
    release.findAll().then(releases=>res.json(releases));
});
router.get("/releasetypes",(req,res)=>{
    releaseType.findAll().then(types=>res.json(types));
});
router.get("/bugstatus",(req,res)=>{
    bugStatus.findAll().then(status=>res.json(status));
});
router.get("/bugcriticality",(req,res)=>{
    bugCriticality.findAll().then(criticality=>res.json(criticality));
});
router.get("/phases",verifyToken,(req,res)=>{
    phase.findAll().then(phases=>res.json(phases));
});
router.get("/projects",verifyToken,(req,res)=>{
    project.findAll().then(projects=>res.json(projects));
});

router.post("/criticalitychart",(req,res) => {
    let chart = [
        ['Defects', 'Number of Defects'],
        ['Critical', 3],
        ['High', 5],
        ['Medium', 12],
        ['Low',  6]     
        ];
    let chart1901 = [
        ['Defects', 'Number of Defects'],
        ['Critical', 7],
        ['High', 2],
        ['Medium', 12],
        ['Low',  6]     
        ];
    let chart1902 = [
        ['Defects', 'Number of Defects'],
        ['Critical', 1],
        ['High', 9],
        ['Medium', 12],
        ['Low',  6]     
        ];
    var chartData=req.body;
    if(chartData.release==='1') 
       res.json(chart1901);
    else 
    if (chartData.release==='2')
       res.json(chart1902);
    else
       res.json(chart);
});

router.post("/phasechart",(req,res) => {
    let chart = [
        ['Defects', 'Number of Defects'],
        ['Critical', 3],
        ['High', 5],
        ['Medium', 12],
        ['Low',  6],
        ['On HOld', 4]     
        ];
    let chart1901 = [
        ['Defects', 'Number of Defects'],
        ['Critical', 7],
        ['High', 2],
        ['Medium', 12],
        ['Low',  6],
        ['On HOld', 4]     
        ];
    let chart1902 = [
        ['Defects', 'Number of Defects'],
        ['Critical', 1],
        ['High', 9],
        ['Medium', 12],
        ['Low',  6],
        ['On HOld', 4]     
        ];
    var chartData=req.body;
    if(chartData.release==='1') 
       res.json(chart1901);
    else 
    if (chartData.release==='2')
       res.json(chart1902);
    else
       res.json(chart);
});

router.post("/rcachart",(req,res) => {
    let chart = [
        ['Defects', 'Number of Defects'],
        ['Critical', 3],
        ['High', 5],
        ['Medium', 12],
        ['Low',  6]     
        ];
    let chart1901 = [
        ['Defects', 'Number of Defects'],
        ['Critical', 7],
        ['High', 2],
        ['Medium', 12],
        ['Low',  6]     
        ];
    let chart1902 = [
        ['Defects', 'Number of Defects'],
        ['Critical', 1],
        ['High', 9],
        ['Medium', 12],
        ['Low',  6]     
        ];
    var chartData=req.body;
    if(chartData.release==='1') 
       res.json(chart1901);
    else 
    if (chartData.release==='2')
       res.json(chart1902);
    else
       res.json(chart);
});

router.post("/rcaprojectchart",(req,res) => {
    let chart = [
        ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
         'Western', 'Literature', { role: 'annotation' } ],
        ['2010', 10, 24, 20, 32, 18, 5, ''],
        ['2020', 15, 22, 23, 30, 16, 9, ''],
        ['2030', 36, 19, 29, 30, 12, 13, '']
      ];
    let chart1901 = [
        ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
         'Western', 'Literature', { role: 'annotation' } ],
        ['2010', 10, 24, 20, 32, 18, 5, ''],
        ['2020', 6, 22, 23, 30, 16, 9, ''],
        ['2030', 38, 19, 29, 30, 12, 13, '']
      ];
    let chart1902 = [
        ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
         'Western', 'Literature', { role: 'annotation' } ],
        ['2010', 10, 24, 20, 32, 18, 5, ''],
        ['2020', 16, 22, 23, 30, 16, 9, ''],
        ['2030', 98, 19, 29, 30, 12, 13, '']
      ];
    var chartData=req.body;
    if(chartData.release==='1') 
       res.json(chart1901);
    else 
    if (chartData.release==='2')
       res.json(chart1902);
    else
       res.json(chart);
});

router.post("/projectrcachart",(req,res) => {
    let chart = [
        ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
         'Western', 'Literature', { role: 'annotation' } ],
        ['2010', 3, 24, 20, 32, 18, 5, ''],
        ['2020', 15, 22, 23, 30, 16, 9, ''],
        ['2030', 26, 19, 29, 30, 12, 13, '']
      ];
    let chart1901 = [
        ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
         'Western', 'Literature', { role: 'annotation' } ],
        ['2010', 9, 24, 20, 32, 18, 5, ''],
        ['2020', 61, 22, 23, 30, 16, 9, ''],
        ['2030', 18, 19, 29, 30, 12, 13, '']
      ];
    let chart1902 = [
        ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
         'Western', 'Literature', { role: 'annotation' } ],
        ['2010', 69, 24, 20, 32, 18, 5, ''],
        ['2020', 26, 22, 23, 30, 16, 9, ''],
        ['2030', 38, 19, 29, 30, 12, 13, '']
      ];
    var chartData=req.body;
    if(chartData.release==='1') 
       res.json(chart1901);
    else 
    if (chartData.release==='2')
       res.json(chart1902);
    else
       res.json(chart);
});


router.post("/userlogin",(req,res) =>{
    var userData = req.body;
    user.findOne({ where: {user_login: userData.user_login}})
    .then(
        myuser=>{
            if(!myuser){
                res.status(401).send("Invalid user login");
            }else{
                if(myuser.user_password!==userData.user_password){
                    res.status(401).send("Invalid password");
                }else{
                    let payload = { subject: myuser.user_login };
                    let token = jwt.sign(payload,"M%l#kZg!f", {expiresIn: "15min"});
                    res.status(200).send([{ token, myuser }]); 
                }

            }
        })
    .catch(console.error);
});

module.exports = router;