  var mongoose = require("mongoose")
  
   //Schema Setup
    var inspectionSchema = new mongoose.Schema ({
        snumber: String,
        anumber:String,
        ticketNumber:String,
        checkingIn:Boolean
    })
    
    module.exports = mongoose.model("inspection", inspectionSchema)