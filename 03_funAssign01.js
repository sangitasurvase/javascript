console.log("***************** First Step*********************");

function sub(){
    var n1=40;
    var n2=30;
    var result=n1-n2;
    console.log("substraction of two number:",result);


}
sub()

function  cube(){
    var num=5;
    var res=num*num*num;
    console.log("cube is:",res);

}
cube()
console.log("***************** second Step*********************");

function personalDetails(FirstName,lastName,collegeName){
    console.log("Name:",FirstName,lastName,collegeName);

}
personalDetails("sangita","survase","sagmeshawer college")

console.log("***************** Third Step*********************");
function swapValues(a,b){
    console.log("before swapping:","name1 =",a,", name2 =",b);

var temp=a;
var a=b;
var b=temp;
console.log("after swapping:","name1 =",a,"name2 =",b);

}
 var name= swapValues("virat","Anushaka")
 var name= swapValues("1000","2000")


 console.log("***************** Fourth Step*********************");

 function addThreeValues(a,b,c){
    console.log("three Number are:",a,b,c);
    var add=a+b+c;
   return add;
 }
  var addvalue= addThreeValues(10.23,600,40)
  console.log("addition of three numbers:",addvalue);
  var addvalue= addThreeValues("Hello","Good","Morning")
  console.log("addition of three numbers:",addvalue);
