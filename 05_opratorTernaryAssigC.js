console.log("************First step *****************");

var maleMarriageEligibility = function (gender, age, boyName) {
  var result =
    gender == "Male" && age >= 21
      ? `Hey ${boyName} you are eligible for Marriage`
      : " Unfortunately - You are not eligible, Please try next time.";
  console.log(result);
};
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Elon");
maleMarriageEligibility("Male", 17, "Stew jobs");

console.log("************Second step *****************");

var femaleMarrigeEligibility = function (gender, age, girlName) {
  var result =
    gender == "female" && age >= 18
      ? `Hey ${girlName} Eligible for Marrige`
      : `you are not Eligible for Marrage`;
      console.log(result);
};
femaleMarrigeEligibility("female", 16, "Jenifer");
femaleMarrigeEligibility("female", 27, "Malinda Gates");
