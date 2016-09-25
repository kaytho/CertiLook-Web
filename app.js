var express = require("express");
var mongoose = require('mongoose');
var Inspection = require('./models/inspection')
var bodyParser = require('body-parser')

//Connect to Mongo
mongoose.connect('mongodb://localhost/certilook');
//Initialize App
var app = express();

//Body parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**var inspect = new Inspection({anumber:"fdsf", snumber:"fsdfsd", checkingIn:false})

inspect.save(function(err, savedItem) {
    if(err==null){
        console.log("Save it")
    }
})*/

app.set('view engine', 'ejs');

app.get("/", function(req, res ){
    Inspection.find({}, function(err, inspections){
        if(err==null) {
            res.render("index", {inspections:inspections});
        }
        else
            res.send("error")
    })
})

app.post("/", function(req,res){
    var newInspect = req.body;
    Inspection.create(newInspect, function(err, savedItem) {
        if(err==null ) {
            console.log("Item saved :) ");
            res.send("Success")
        }
        else {
            console.log("Item not saved");
            res.send("failed to save")
        }
    })
})

/**  app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}); */

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

 /**  app.listen(process.env.PORT, process.env.IP, function(){
        console.log("CertiLook is up and running")
})
*/