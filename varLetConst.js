// Ecma Script
//  ES5

// ES6(ES2016) +
//  |
// ES2022

//1. Solve the ES5 problems in es6+
//2. For Complex operation user has to depend on third party libraries
//3. New javascript they have added most of the features(no need to depend on third party library)
//4. Modern syntex
//5. For large scale project we can use javascript

// 1. Hoisting

// var a = 1;

// console.log(a);

// var a = 1;

// var a;

// console.log(a);

// a = 1;

// console.log(a);

// var a, b;

// a = 1;

// a = 2;

// b = 2;

// {
//     var xyz = 1;
// }

// console.log(xyz);

// {
//     var b = 2;
// }

// console.log(b);

// function abc() {
//     var c = 3;
//     console.log(c);
// }

// abc();

// IIFE (Immediately Invoked Function Expression)

// var b = 3;
// (function(bb) {
//     console.log(bb);
//     console.log(a);
// })(b)

// Solution for Hoising + Scoping

// Can't redeclare
// Can Reassign value
let a = 1;

a = 3;

console.log(a);

var b = 3;
{
  let b = 2;
}

console.log(b);

// Can't redeclare
// Can't Reassign value
const c = 3;

// c = 4;

{
  const d = 5;
}

const arr = [1, 2, 3];

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

obj.d = 4;

console.log(obj);

arr.push(4);

console.log(arr);

// console.log(d);

// Primitive Type

// string
// number
// boolean
// bigint
// symbol

// Non-Premitive Types

// Object
// Array
// undefine
// null

// null / undefine

// null
// console.log(abc);

// var abc;
// console.log(abc);
// console.log(pqr);

let pqr = 1;

// Fetures      hoisting        scoping     reassign        redeclare

// var             Yes             No           yes             yes

// let              NO            Yes           yes              No

// const            No            Yes           No               No
