var interview=function(gradScore,hscScore,sscScore,candidateName){
    if(gradScore>=70 ||hscScore>=80 || sscScore>90 ){
        console.log(`Congrates ${candidateName} you are eligible TCS`);
    }
    else
{
    console.log(` Unfortunately you are not eligible for TCS interview`);
}
    

}
interview(80,86,90,"sangita");
interview(70,65,55,"Neeta");
interview(60,79,88,"Nikita");