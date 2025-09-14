const {argv}  = require('node:process');
console.log(argv);
if(process.argv[2] && process.argv[3]){
    console.log("Arguments found");
   
} else if(process.argv[2]){
    console.log("Argument found");
}else{
    console.log("No argument");
    
}

console.log(argv.length);