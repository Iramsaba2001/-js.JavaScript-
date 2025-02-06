// date
let MyDate = new Date()
// console.log(MyDate.toString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toJSON());
// console.log(MyDate.toLocaleDateString());
// console.log(MyDate.toISOString());
// console.log(MyDate.toLocaleString());
// console.log(MyDate.toTimeString());


let MyCreatedDate = new Date("2025-01-1")
//console.log(MyCreatedDate.toDateString());

let time = Date.now()
//console.log (MyCreatedDate.getTime());
//console.log (Math.floor(Date.now()/1000));

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth() + 1);

newDate.toLocaleDateString('default', {
    calendar: "long"
})