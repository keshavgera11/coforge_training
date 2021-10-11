// object

const firstName = "yagnesh";
const lastName = "Modh";
const age = 30;

// Bind Related Information together;
// objects are key value pair
// ES6+
const user = {
  firstName,
  lastName,
  age: age,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.fullName());
