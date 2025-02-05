// Primitive data types
 const score = 100
 const scorevalue = 100.9
// example of number datatype

const isLoggedIn = false //boolean
const outSidetemp = null // null
// undefind
let username;

const id= Symbol('1234')
const anotherid = Symbol('1234')

console.log(id === anotherid);//symbol

const bigNumber = 125485856226315n 
//it is a bigInt



//NonPremetive
const heros = ["shaktiman", "nagraj" , "doga"];
//Array

// let myObj = {
//     name: "iramsaba",
//     age:24
// }
// // its object in object we store any type of data like String int 

// const myFunction = function(){
//     console.log("hello world");
    
// }
// // function 
// console.log(typeof bigNumber);


// memory
// there is two types of memory avalaible in js
// 1. stack 2. is heap
//Stack memory for primitive // get copy of value
//heap memory for non primetive // get refferance orignal value
let myName = "saba"

let anothername = myName
anothername = "iramsaba"

//

//console.log(myName);
console.log(myName);
console.log(anothername); 
// in this original value not change and copy will print //primitive stak memory

let userOne ={
    email: "user@google.com",
    upi :"user@ybl"
}
// heap memory

let userTwo =  userOne

userTwo.email = "iram@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

