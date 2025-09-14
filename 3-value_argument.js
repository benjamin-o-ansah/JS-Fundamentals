const argv = process.argv;
if (argv[2] && argv[3]) {
  console.log(argv[3]);
} else if (argv[2]) {
  console.log(argv[2]);
} else {
  console.log("No argument");
}
