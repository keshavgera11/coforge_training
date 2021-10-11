// Mutable & Immutable Programing

// 10
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// O(1) -> Best complexity
console.log(arr[5] === 6);

// Complexity

// O(LogN) -> Better then O(N)

// O(N)

// O(NLogN)

// O(n**2)

// O(n^2)

let result = false;
for (let i = 0; i < arr.length; i++) {
  console.log(i);
  const element = arr[i];
  if (element === 6) {
    result = true;
    break;
  }
}

console.log(result);

// O(N)
const obj = {
  a: 1,
  b: 2,
  c: 3,
  b: 4,
  a: 1,
};

// O(1)
// ES5
const obj1 = Object.assign({}, obj, { a: 4 });

const obj2 = { ...obj, d: 5 };

const a = {
  a: 1,
};

const b = {
  b: 2,
};

const ab = { ...a, ...b };

console.log(ab);

console.log(obj2);

console.log(obj1);

// obj.d = 3;

console.log(obj);

// console.log(obj);

// Mutable way to add property
// obj.d = 4;

// console.log(obj);
