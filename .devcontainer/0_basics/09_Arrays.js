const myArray = [1, 2, 3, 4, 5, 6, 8]
const MyFriends = ["saba", "Pranjali", "iram", "sana"]

//console.log(myArray[0]);
const myArr2 = new Array(1, 2, 3, 5, 9)


// myArr2.push(6)
// console.log(myArr2);

// myArr2.pop()
// console.log(myArr2);

// console.log(myArr2.includes(5));

// const newArr = myArr2.join()// bind array and convert into String
// console.log(myArr2);
// console.log(newArr);



// slice, splice

//console.log("A ", myArr2);
const myn1 = myArr2.slice(1, 3)//

//console.log(myn1);
//console.log("B ", myArr2);


const myn2 = myArr2.splice(1, 3)//manuplaite the array
//console.log(myn2);


const Heros = ["thor", "ironman", "spiderman"]
const dc = ["iramsaba", "sana", "sirin"]

//push

Heros.push(dc)//its array in Array

//console.log(Heros);
//console.log(Heros[3][1]);


//concat
//const AllHeros = Heros.concat(dc)
//console.log(AllHeros);


//Spreads 


const AllHeros =[...Heros,...dc]
//console.log(AllHeros);


//flat

const c = [1, 2, 3, [4, 5, 6,], 7, 8,[9, 6, 8, 0,[7, 8]]]

const AB = c.flat()
console.log(AB);

//isArray
console.log(Array.isArray("iramsaba"));//asking is Array is available
//then How to convert above Array into a Array

console.log(Array.from("iramsaba"));
console.log(Array.from({name :"iramsaba"}));//intersting []

//.of

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



