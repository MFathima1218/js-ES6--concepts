// let ,const(same as var)


console.log("var,let,const");

// example

let marks = 99;
console.log(marks);

// output 99

const internalmarks = 30;
console.log(internalmarks);

// output 30

// arrow function(=>)

const pets = () => {
  console.log("those are my favriate one");
};
pets();

// reset and spread operator(...)

const numbers = [5, 10, 15, 20];
console.log(math.max(...numbers));

// destructing arrays

const weeks = ["sun", "mon", "tue", "wed", "fri", "sat"];
console.log(weeks[0], weeks[1]);

const holiday = weeks[0];
const workingday = weeks[1];

console.log(holiday, workingday);

// destructing objects

const userdata = { username: "muskan", age: 20 };
const name = userdata.username;
const age = userdata.age;
console.log(name, age);

//templete literals

const myfriendname = "raj";
const greeting = "happy birthday" + myfriendname;
console.log(greeting);

// Es6
const greeting2= 'happy birthday' ${my friend name}'
console.log(greeting2)
