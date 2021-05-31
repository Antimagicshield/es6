//function
//  - fundamental building block in the program
//  - subprogram can be used multiple times
//  - performs a task or calculates a value

//1. Function declaration
//function name(param1, param2) {body...return;}
//one function === one thing
//naming: doSomething, command, verb
//eg/ createCardAndPoint -> createdCard, createdPoint
//function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello~~!!');
log(1234);

//2. Parameters
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}

const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

//3. Default parameters (add in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4. Rest parameters (added in ES6)
//...param 배열 형태로 파라미터값을 받아 옴.
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

//5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); 부모요소에서는 자식 부모에 선언된 변수를 사용할 수 없음.
}

printMessage();

//6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

//7. Early return, early exit
//bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}

//goood
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}

//first-class function
//functions are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other function.
//can be returned by another function

//1. Function expression
//a function declaration can be called earlier than it is defined. (hoisted)
//a function expression is crated when the execution reaches it.

const print = function () {
    console.log('print');
};
print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

//anonymous function
const printYes = function () {
    console.log('yes');
};

//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function printN() {
    console.log('No');
};
randomQuiz('love you', printYes, printNo);
randomQuiz('hate you', printYes, printNo);

//Arrow function
//always anonymous
//const simplePrint = function() {
//    console.log('simplePrint!');
//};

const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const simpleMultiplay = (a, b) => {
    //do something more {}를 써서 긴 함수식을 표현할 경우, return을 사용해야 함.
    return a * b;
};

//IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();
