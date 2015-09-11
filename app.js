var express = require('express'),
  app = express();
   //middleware for post
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
  
  app.set('view engine', 'ejs');
 
puppies = [
  {name: "Pluto", age: 2, id:1 }
  ];
  var newId = 1;

/*function Newpuppy(name,age){
  this.name = name;
  this.age = age;
}*/
app.get("/", function(req, res){
    //use res.render
    res.render("index",{puppies: puppies});//left key right value//ejs takes key, value refers to my object that i have above
  });
/*app.get("/", function (req, res){
  res.send(puppies.join(","));
});*/

//Get request for new puppies
app.get("/puppies/new", function(req, res){
    res.render("puppies/new");//go to this page
});
//get about
app.get("/about", function(req, res){
    res.render("about");//go to this page
});
//get contact
app.get("/contact", function(req, res){
    res.render("contact");//go to this page
}); 
  //do something to add a new puppy
  //add new puppy info to puppies array
  //finally, redirect using:
//UGING POST
app.post("/puppies", function(req, res){
  newPuppy={};
  newPuppy.name = req.body.name;
  newPuppy.age = req.body.age;
  puppies.push(newPuppy);
  newPuppy.id = newId;
  newId++;
  console.log(newPuppy);
  res.redirect("/");
});




//Grab info from the query sting???using req.query.key
app.get("/puppies", function(req, res){
  newPuppy={};
  newPuppy.name = req.query.name;
  newPuppy.age = req.query.age;
  puppies.push(newPuppy);
  newPuppy.id = newId;
  newId++;
  console.log(newPuppy);
  res.redirect("/");
});

//get pup by id
app.get("/puppies/:pupid", function(req,res){
  var pupid = req.params.pupid;
  var currentpup;//i do not know which puppy yet is going to store age and name
    for(var i=0; i < puppies.length; i++){
      if (puppies[i].id==pupid){//if they match if it is ture currentpup becomes puppies[i]
         currentpup = puppies[i];
         }
       }
         res.render("puppies/pupid",{
            currentpup:currentpup
         });
});




// start the server
app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});