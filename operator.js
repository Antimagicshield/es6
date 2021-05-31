//1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log('string literals: 1 + 2 = ${1 + 2}');

//2.Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

//3. Increment and decrement operators
let counter = 2;

const preIncrement = ++counter;
//preIncrement = counter;
//counter = counter + 1
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const postDecreament = counter--;
console.log(`postIncrement: ${postDecreament}, counter: ${counter}`);

//4. Assignment Operators
let x = 3;
let y = 6;

x += y; // x = x + y;
x -= y; // x = x + y;
x *= y; // x = x + y;
x /= y; // x = x + y;

//5.Comparison operators
console.log(10 <= 6); //less than
console.log(10 <= 6); //less than or eaual
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal

//6.Logical Operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

//||(or)
console.log(`or: ${value1 || value2 || check()}`);

//&&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😱');
    }
    return true;
}

//! (not)
console.log(!value1);

//7.Equality
const stringFive = '5';
const numberFive = 5;

// == loose equlity, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === Strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true

//equlity - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

//8. Conditional operators: if
//if, else if, else
const name = 'moon';
if (name === 'moon') {
    console.log('welcome, moon!');
} else if (name === 'doolie') {
    console.log('You are Doolie');
} else {
    console.log('unknown');
}

//9. Ternart operator: ?
//condition ? value1 : value2
console.log(name === 'ellie' ? 'yes' : 'no');

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type check in TS
const browser = 'Chrome';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}

//Loops
//while loop, while the conditionis truthy,
//body code is excuted.

let i = 3;
while (i > 0) {
    console.log(i);
    i--;
}

do {
    console.log(i);
    i--;
} while (i > 0);

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
for (let i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nester loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

//break, continue

for (let a = 0; a <= 10; a++) {
    let b = a % 2;
    if (b != 0) {
        continue;
    } else {
        console.log(a);
    }
}

for (let a = 0; a <= 10; a++) {
    if (a != 8) {
        console.log(a);
    } else {
        break;
    }
}
