const mongoose = require("mongoose")
// mongoose.set("useNewUrlParser", true);
// mongoose.set("useUnifiedTopology",true)
// mongoose.set("useFindAndModify",false)
// mongoose.set("useUnifiedTopology",true)

class Database {

    constructor(){
        this.connect();
    }

  connect(){
    mongoose.connect("mongodb+srv://shubhisharma4u:ms9p0xdQ5HLM5oY2@twitterclonecluster.gtlblnj.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connection successful")
})
.catch((error)=>{
    console.log("error"+ error)
})
  }

}
module.exports = new Database();