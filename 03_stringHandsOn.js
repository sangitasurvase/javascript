var givenString =  "   Hey you are doing good, keep it up    ";

function stringHandsOn() {
  console.log(givenString);
  console.log(`lenght of string:${givenString.length}`);
  var trimResult = givenString.trim();
  //console.log(trimResult, trimResult.length);
  console.log(`after trim givenstring is: ${trimResult}. its lenght is:${trimResult.length}`);

  var result = givenString.split(" ");
console.log(result);
console.log(`Total words in string is: ${result.length}`);


var indexOfgood = givenString.indexOf('good');
console.log("Index of good is: ", indexOfgood);

var result = givenString.slice(21);
console.log(` Slice is: ${result}  `);

var indexOfup = trimResult.lastIndexOf('up');
console.log("Index of up is: ", indexOfup);

var indexOfhey = trimResult.indexOf('Hey');
console.log("Index of hey is: ", indexOfhey);
  
}
stringHandsOn();
