const express = require("express")
const app = express()
const port = 3003;
const middleware = require("./middleware.js")
const bodyParser = require("body-parser")
const path = require("path")


app.listen(port, (()=>{
    console.log("server is running on port :", port)
}))

app.set("view engine", "pug")
app.set("views","views")
app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.urlencoded({extended: false}));

//routes
const loginRoute = require("./Routes/loginRoute.js")
const registerRoute = require("./Routes/registerRoute.js")

app.use("/login",loginRoute);
app.use("/register",registerRoute);

app.get("/",middleware.requireLogin, (req, res,next)=>{

    var payload = {
        pageTitle:"Home"
    }
    res.status(200).render("Home", payload)
})