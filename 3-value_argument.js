const argv = process.argv.slice(2);
// if (argv == 1) {
//   console.log(argv[3]);
// } else if (argv[2]) {
//   console.log(argv[2]);
// } else {
//   console.log("No argument");
// }


const args = process.argv.slice(2);

if (args[0] === undefined) {
  console.log("No argument");
} else {
  args.forEach(arg => console.log(arg));
}
