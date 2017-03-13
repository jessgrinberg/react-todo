// function add (a,b) {
//     return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd))

//
// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [3, ...groupB,...groupA];
//
// console.log(final)

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
//Hi Andrew, you are 25
function greet(name, age) {
    return 'Hi ' + name + ', you are ' + age;
}
console.log(greet(...person));
console.log(greet(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Jessica', ...names];
//Hi andrew

final.forEach(function(name) {
    console.log('Hi ' + name)
})
