var gradeSystem=function(marks){

    if(marks<0 || marks>100|| marks==undefined || isNaN(marks)){
    console.log(`${marks} Invalid Input...`);
    }
    else{
        if(marks<35){
            console.log(`${marks} you are pass Grade ==>C`);
    
        }
       else {
        if(marks>=35 && marks<50){
            console.log(`${marks}you are pass Grade ==>B`);
    
        }
    else if(marks>=50 && marks<75){
    console.log(`${marks} you are pass Grade ==>A`);
    }
       } 
    }
}
gradeSystem(47)
gradeSystem(67)
gradeSystem(78)
gradeSystem(33)
gradeSystem(undefined)
gradeSystem(NaN)

