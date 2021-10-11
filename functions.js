// const add = (a, b, c, d) => a + b + c + d;

const add = (...params) => {
  let result = 0;
  for (let i = 0; i < params.length; i++) {
    const element = params[i];
    result = result + element;
  }
  return result;
};

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));

const getFullName = ({ firstName, lastName, ...rest }, a) => {
  console.log(rest);
  console.log(a);

  return `${firstName} ${lastName}`;
};
const user = {
  firstName: "Yagnesh",
  lastName: "Modh",
  age: 30,
  gender: "Male",
};

console.log(getFullName(user, 1));

// == / ===

const a = 1;
console.log(typeof a);

const b = "1";
console.log(typeof b);

// Not check data type
console.log(a == b);

// Check value and datatype
console.log(a === b);

// const calc = (a, b, operation) => {
//     if(operation === '+') {
//         return a + b;
//     }
//     if(operation === '-') {
//         return a - b;
//     }
// }

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;

const calc = (a, b) => {
  return (operator) => {
    return operator(a, b);
  };
};

console.log(calc(1, 2)(sum));
console.log(calc(8, 2)(sub));
console.log(calc(4, 2)(mul));

// console.log(calc(1,2, '+'));
// console.log(calc(1,2, '-'));
