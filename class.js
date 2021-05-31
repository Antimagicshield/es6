'use strict';
//Object-oriented programming
//class: template
//object: instance of a class
//JavaScript classes
//  -introduced in ES6
//  -syntactical sugar over prototype-based inheritance

//  1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: Hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie);
ellie.speak();

//2. Getter and Setter;
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('stieve', 'job', -1);
console.log(user1.age);

//3. Fields(public, private)
//too soon!

class Experiment {
    publicFields = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicFields);
console.log(experiment.privateField);

//4.Static properties and methods
//Too soon!

class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher);
// undefined
console.log(Article.publisher);
Article.printPublisher();

//5.Inheritance
//a way for one class to extend another class.

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color`);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'red');

rectangle.draw();
triangle.draw();
console.log(rectangle.getArea());
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(rectangle instanceof Shape);
console.log(rectangle instanceof Object);
