const balance = new Number(500);
// console.log(balance);


// console.log(balance.toString());
// console.log(typeof balance);


// console.log(balance.toString().length);

// console.log(balance.toFixed(3));//it is used to Sepicially used for E-commerce webSite

//Pricision
const otherNum = 223.8965
//console.log(otherNum.toPrecision(3));

//localString
const num1 =  100000000
//console.log(num1.toLocaleString('en-IN'));//to commas value en-IN to indian Standard

///------------------------Maths---------------------------

console.log(Math.abs(-4));//its a absolute method that convert negtive value into positive
console.log(Math.round(4.2));//its round of the value
console.log(Math.ceil(4.2));// its round of value into top value
console.log(Math.floor(4.2));// its round of value into lower value
console.log(Math.min(4, 2, 6 ,5));
console.log(Math.max(4, 2, 6 ,5));
console.log(Math.random()* 10 + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)






