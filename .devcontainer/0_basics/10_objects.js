//Singleton
//const tinderUser = new Object()
//Non Singleton object
const tinderUser = {}
 

tinderUser.id = '12344sc'
 tinderUser.name = "sanny"
 tinderUser.islogged = "false"


console.log(tinderUser);

//Objects Litreals
//Symbol 

const mySym = Symbol("key1")

const JsUser = {
    name : "iramsaba", 
    location: "kolhapur",
    "full name": "iramsaba Kazi",
    [mySym] : "myKey1",
    age : 24,
    email: "kazi@gmail.com",
    isLoggedIn : false,
    lastGogindays: ["Monday", "Sunday"]

}

// console.log(JsUser.email); //its a wrong way to access the object
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser [mySym]);

//changing email
JsUser.email = "iramsaba@gmail.com"
//console.log(JsUser["email"]);

//freeze
//Object.freeze(JsUser)
JsUser.email = "iram@gmail.com"
//console.log(JsUser);


//function
JsUser.greeting = function () {
    console.log("Hello js User")
    
}
JsUser.greeting2 = function () {
    console.log('Hello js User, ${this.name}'); //convertiing string into '' is called string manupulation
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


//object in a object

const employee = {
    email: "sara@gmail.com",
    fullname :{
        username:{
            firstname: "harmony",
            lastname : "d-soza"
        }
    }
}

console.log(employee.fullname.username.firstname);


//combining object
const traget = {1:"a", 2:"b"}
const source = {3: "c" , 3: "d"}

//const obj = {traget , source} // it will print one object butt two are will be print as array in array

//const obj = Object.assign({}, traget, source) // why empty bracess is there because we have mutltiple object there it is esy for reading its not complete use


//Spread
const obj = {...traget,...source}
console.log(obj);

//multiple object in array

const users = [
    {
       id : 1,
       email : "kzi@gmail.com"
    },
    {
         id : 1,
       email : "kzi@gmail.com"
    },
    {
       id : 1,
       email : "kzi@gmail.com"
    },
]

users[1].email
console.log(employee);
console.log(Object.keys(employee)); // for keys 
console.log(Object.values(employee)); //for values
console.log(Object.entries(employee));
console.log(employee.hasOwnProperty('email'));



