// function add(a,b){
//     return a+b;

// }

// console.log(add(3,1));

// var toAdd=[9,5];
// //spread operator
// console.log(add(...toAdd))

var groupA=['Jen','Cory'];
var groupB=['Vikram'];
var final =[...groupA,...groupB];

console.log(final)

var person = ['Andrew',25];
var personTwo = ['Jen',25];

var greeting = function(name,age){
    console.log("Hello "+name+" age"+age);
}

greeting(...person);