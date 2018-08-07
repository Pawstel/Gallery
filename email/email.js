env = require('env2')('../.env');  // required to access the environment variables
/*var sendemail   = require('sendemail').email; // no api key
var email = sendemail.email;
sendemail.set_template_directory('./relative/path/to/template/directory');
 
var person = {
  name : "Jenny",
  email: "your.name+test" + Math.random() + "@gmail.com", // person.email can also accept an array of emails
  subject:"Welcome to DWYL :)"
}
 
email('welcome', person, function(error, result){
  console.log(' - - - - - - - - - - - - - - - - - - - - -> email sent: ');
  console.log(result);
  console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - -')
})*/

var path    = require('path'); // used to resolve relative paths
/*var config  = path.resolve(__dirname+'/../config.env'); // load config file
*//*var env     = require('env2')(config);*/

var sendemail = require('../node_modules/sendemail/lib/index.js'); // no api key
var email     = sendemail.email;

var dir = '/Users/jvertil/Desktop/hero-photo-service/hero-photo-service/email/templates'; // unresolved
//dir = path.resolve(dir);
sendemail.set_template_directory(dir); // set template directory

var person = {
  name : "JPV!",
  email: "vertil.jp@gmail.com" // your email here
}

email('welcome', person, function(error, result){
  console.log(' - - - - - - - - - - - - - - - - - - - - -> email sent: ');
  console.log(result);
  console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - -')
})


