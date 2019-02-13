const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("bugs123","postgres","6A5T2MeGzK", {
    host:"localhost",
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
        res.send("from API route");
});

sequelize
.authenticate()
.then(()=>{
    console.log("Connection has been established successfully.");
})
.catch(error =>{
    console.error("Unable to connecto to DB ", error);
});

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
router.get("/releases",(req,res)=>{
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
router.get("/projects",(req,res)=>{
    project.findAll().then(projects=>res.json(projects));
});



router.post("/userlogin",(req,res) =>{
    var userData = req.body;
    console.log(req);
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
                    res.status(200).send({ token, myuser }); 
                }

            }
        })
    .catch(console.error);
});

module.exports = router;