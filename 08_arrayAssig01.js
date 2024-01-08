console.log("***********first and last element*************");
const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
const getelement=fruits_seasonal[0];
console.log("This is first element:",getelement);
const fruits_seanal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
const getelementlast=fruits_seanal[4];
console.log("This is last element:",getelementlast);
console.log("***********adding one element*************");
const fruits_asonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_asonal);
const fruits=["Banana","Orange","Apple","Mango","Water Melon"];
fruits.unshift("Papaya");
console.log(fruits);
console.log("***********removing one element*************");
const fruit_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruit_seasonal);
fruit_seasonal.splice(3,1)
console.log(fruit_seasonal);
console.log("***********inserting one element*************");
const fruits_seasonals=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonals);
fruits.push("Pineapple")
console.log(fruits);
console.log("***********adding one  element*************");
const fruits_season=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_season);
fruits.splice(4,0,"Dragon fruit")
console.log(fruits);
console.log("***********replace an element*************");
const f_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(f_seasonal);
f_seasonal.splice(3,1,"Kivi")
console.log(f_seasonal);
console.log("*********** index 1 to 4 element*************");
const seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(seasonal);
const fruitss=["Banana","Orange","Apple","Mango","Water Melon"];
for (let index = 1; index <=4; index++) {
    const element = fruitss[index];
    console.log(element);
    
}
console.log("*********** last 3 element*************");
const f_se=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(f_se);
const f=["Banana","Orange","Apple","Mango","Water Melon"];
for (let index = f.length-1; index >= 2; index--) {
    const element = f[index];
    console.log(element);
    
}
//console.log(seasonal);
