const argv = process.argv.length;
console.log(argv);
if(argv == 2){
    console.log("No argument");
   
} else if(argv == 3){
    console.log("Argument found");
}else{
    console.log("Arguments found");
    
}