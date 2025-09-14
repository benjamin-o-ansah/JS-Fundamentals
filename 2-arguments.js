const {argv}  = require('node:process');
console.log(argv);
if(process.argv.length>3){
    console.log("Arguments found");
   
} else if(process.argv[2]){
    console.log("Argument found");
}else{
    console.log("No argument");
    
}