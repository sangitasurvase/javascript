console.log("*********** step first ***********");
function squareOfWorldlenght(string) {
  console.log(string);
  var a = string.length;
  console.log(`lenght is:${string.length}`);
  console.log(`square is:${a * a}`);
}
squareOfWorldlenght("JavaScript");
squareOfWorldlenght("Google Chrome");
squareOfWorldlenght("Developer Smart");

console.log("*********** step second ***********");
function multiply() {

  var givenString = "I am Angular Developer";
  var a= givenString.length;
  console.log(`lenght is:${givenString.length}`);

 
  var b = givenString.split(" ");
  console.log(`Total words in string is: ${b.length}`);
 
  console.log(`division  is:${a/b.length}`);
  console.log(`multipication is:${a*b.length}`);
}


gradeSystem(47);
