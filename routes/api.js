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

    console.log("payload.subject",pay.subject);

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


router.get("/months",verifyToken,(req,res)=>{
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
router.get("/phases",(req,res)=>{
    phase.findAll().then(phases=>res.json(phases));
});
router.get("/projects",verifyToken,(req,res)=>{
    project.findAll().then(projects=>res.json(projects));
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