const express = require("express")
const app = express()
const router = express.Router();
const bodyParser = require("body-parser")

app.set("view engine", "pug")
app.set("views","views")

app.use(bodyParser.urlencoded({extended: false}));

router.get("/", (req, res, next)=>{
   
    res.status(200).render("register")
})

router.post("/", (req, res, next)=>{
    var firstname =req.body.firstname.trim();
    var lastname =req.body.lastname.trim();
    var Username =req.body.Username.trim();
    var Email =req.body.Email.trim();
    var password =req.body.password;

    var payload = req.body
      
    console.log(payload)
    if(firstname && lastname && Email && password && Username){
      
    }
   else{
      payload.errorMessage ="fill the form";
       res.status(200).render("register",payload)
   }
    // console.log(req.body)
})
module.exports = router;