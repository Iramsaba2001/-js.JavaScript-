//Singleton
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
