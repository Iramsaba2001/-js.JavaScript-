const name = "iramsaba"
const repoCount = 60

//console.log(name + repoCount + "value"); //its is outdated way to concanited to string or concting

//console.log(`Hello my name is${name} and my repo count is ${repoCount} `);
//it is a modern way to concanited two string and also called string interpolation 
//what is benfit of this sentence is we can on the go process

//another way to declare string is
 const gameName = new String('iramsabaKazi')

//there is multiple Way to access String with indexing or using prototype methods
//  console.log(gameName[0]);
//  console.log(gameName.__proto__);

//  console.log(gameName.toUpperCase());// to convert into a upper case
//  console.log(gameName.charAt(2)); //to find index to char prototypes there is a multiple protype in JS
//  console.log(gameName.indexOf('m')); // to find the index of char
 
   
//Slicing

 const newString = gameName.substring(0,4) // we canot give nagetive value;
 console.log(newString); // sliceing String

 const anotherString = gameName.slice(5, -1)
 console.log(anotherString); // Slice
 
 
 ///Trim
// it is used for removing Strating Space or ending Space
 const newStringOne = "   iram   "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 //Replace

 const url = "https://iramsaba.com/hitesh%20kazi";
 console.log(url.replace('%20', '/'))//what to find and what to replace

 console.log(url.includes('iramsaba'));// if you want to find somthing in string you can use includes

 console.log(gameName.split('-'));
 console.log(gameName.small());
 
 
 
 
 
 
 

 
 