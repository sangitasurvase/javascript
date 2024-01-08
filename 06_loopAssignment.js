
console.log("++++++++++++Step First+++++++++++++++++");
let string="I am very good IT Developer";
let count=0;
for (let index = 0; index<string.length; index++) {
    let char=string.charAt(index).toLowerCase();
    if (char=='a' || char=='e' || char=='i' || char=='o' ||char=='u') {
        count=count+1;
    }
    
}
console.log(`vowel count is:${count}`);
console.log("+++++++++++++Step Third+++++++++++++++++");
function oddPositionedChars(str){
    console.log(str);
    let result=0;
   for (let index = 0; index < str.length; index++) {

    let char= str.charAt(index);
    if(index%2==1 &&  char==""){
        console.log(str.charAt(index));

    }
    
   }

}
oddPositionedChars("Hard work always pays back")
oddPositionedChars("Soon I will be UI IT Champ")