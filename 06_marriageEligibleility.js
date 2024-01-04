var marriageEligibility=function(gender,age){
if(gender=="Male" && age>=21){
    console.log(`Male age ${age} Eligible for marriage`);

}
else if(gender=="Male" && age<21){
console.log(`Male age ${age}  not Eligible `);
}
else if(gender=="Female" && age>=18 ){
    console.log(`Female age ${age}  Eiligible for marriage`);

}
else if(gender=="Female" && age<18){
    console.log(`Female age ${age}  not Eligible for Marriage`);
}
else{
    console.log(`invalid input...`);
}
}
marriageEligibility("Male",17)
marriageEligibility("Male",25)
marriageEligibility("Female",28)
marriageEligibility("Female",16)
marriageEligibility("Other",25)
marriageEligibility("Other",35)
