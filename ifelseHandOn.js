console.log("************** First step******************");
var checkno = function (num) {
  if (num % 2 == 0) {
    console.log(`number is: ${num},even`);
  } else {
    console.log(`nubmer is:${num},odd`);
  }
};
checkno(45);
checkno(70);
checkno(67);
checkno(98);

console.log("************** Seond step******************");

var checkvote = function (age) {
  if (age % 2 == 0) {
    console.log(`your are ${age} Eligible for vote`);
  } else {
    console.log(`your are not Eligible`);
  }
};

checkvote(18);
checkvote(20);
checkvote(17);
checkvote(40);

console.log("************** Third step******************");
var stringlenght = function (valueString) {
  var lenght = valueString.lenght;
  if (lenght > 10) {
    console.log(` String more than 10 character`);
  } else {
    console.log(`string are not more than 10 character`);
  }
};
stringlenght("JavaScript-ES6");

console.log("************** Fourth step******************");
var stringStart = function (word) {
  if (word.startsWith("Java")) {
    console.log(`Given ${word} String start with java`);
  } else {
    console.log(`Given String not start with java`);
  }
};
stringStart("Javascript Language");
