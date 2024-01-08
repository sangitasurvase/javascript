console.log("+++++++++++++++++++addtion of 1 to 10 numbers+++++++++++++++++++++");
 let sum=0;
for (let index =1; index <=10; index++) {
    sum=sum+index;
    
}
console.log(`sum of number from 1 to 10 is : ${sum}`);

console.log("++++++++++++++++++multiply+++++++++++++++++++++");
//multiply
let multiply=1;
for (let index = 1; index<=5; index++) {
    multiply=multiply*index;
    
}
console.log(`multiply number is:${multiply}`);

console.log("+++++++++++++++++++Reading String char by char+++++++++++++++++++++");
let str="Devloper";
let result=0;
for (let index = 0; index<str.length; index++) {
    result=result+index
    
}
console.log(` String  is:${result}`);


console.log("+++++++++++++++++++Reading String in reverse char by char+++++++++++++++++++++");
let word="Devloper";
let reverse=0;
for (let index =word.length-1; index>=0; index--) {
     reverse=reverse+ word.charAt(index);
    
}
console.log(` String  is in reverse:${reverse}`);



console.log("+++++++++++++vowel count+++++++++++++++++");
let s1="Devloper UI";
let count=0;
for (let index = 0; index<s1.length; index++) {
    let char=s1.charAt(index).toLowerCase();
    if (char=='a' || char=='e' || char=='i' || char=='o' ||char=='u') {
        count=count+1;
    }
    
}
console.log(`vowel count is:${count}`);