//1. use strict
// 'use strict';

//2. Variable
//let (added in ES6)
let globalName = 'Hi';
{
    let name = 'Moon';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(globalName);

//3. Constants
//  -faver immutable data type always
//  -security
//  -thread safety
//  -reduce haman mistakes

const daysInweek = 7;
const maxNumber = 5;

//4.Variable types
// primitive, single item: nember, string, boolean, nell...
// obkect, box container
// function, first-class function

const count = 17; //integer
const size = 17.1; //decimal nember
console.log('value: ${count}, type: ${typeof count}');
console.log('value: ${size}, type: ${typeof size}');

//numver - special numberic value: infinity, NaN...
const infinity = 1 / 0;
const negativeinfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; 
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
//backtick(`) + ${}를 사용하면 편리
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

//boolean
//false: 0, NaN, null, undefined, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`)

//symbol, create unique identifiers for object
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);//.description을 사용하여 string으로 변환하여 출력해야 함.

//object, real-life object, data structure
//object는 변경 불가능 하지만 속성값들은 변경 변경할 변경할수 있 변경할 수 있 음.
const mun = { name: 'msj', age: 36 };
mun.age = 26;

//5.Dynamic typing: dynamicallu typed language
let text = 'hello';
console.log(text.charAt(0)); //h

console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5 - 2
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
