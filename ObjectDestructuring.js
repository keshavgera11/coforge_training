// Object Descructuring

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(obj.a);
console.log(obj.b);

const c = "c";

console.log(obj["a"]);
console.log(obj["b"]);
console.log(obj[c]);

console.log(obj);
// O(1)
const { c: cc, b, ...xyz } = obj;

console.log(xyz);
console.log(cc);
console.log(b);

// const {a, b, c: cc} = obj;

// console.log(a);
// console.log(b);
// console.log(cc);

// delete obj.c;

// console.log(obj);
