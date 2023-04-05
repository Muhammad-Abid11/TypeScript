"use strict";
//  npm install jsdom   --> if quokka show error jsdom not found
// tsc fileName.ts      --> to convert ts file to js
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Variable in TS
let a = "Hello";
console.log(a);
// Number in TS
let b = 22;
console.log(b);
// Array in TS
let arr = ["Maths", "Physics"]; //only either string or number because we use TypeScript so it Shows error
console.log(arr);
let arr2 = [1, 2, 3, 4]; // another way to define array
console.log(arr2);
// object in TS
var std1 = {
    name: "Ali",
    age: 16,
};
console.log(std1);
let myFavPet = "cat"; //is varibale ki type Animal hai or uski
// value upper me sy koye ho sakti hai
function buyPet(pet) {
    console.log(pet);
}
buyPet(myFavPet);
const person1 = []; //person1 ki type Person ki trha hogi
person1.push({
    rollNum: 23,
    name: "Abid",
    hobbies: ["Cricket"],
    city: "Karachi",
});
console.log(person1);
const Bike = {
    //
    Label: "SuperPower",
    //here we use either rideSpeed or carSpeed because of Union
    rideSpeed: 232,
};
console.log(Bike);
const Cars = {
    Label: "Civic",
    //here we use both rideSpeed and carSpeed because of InterSection
    carSpeed: 23,
    rideSpeed: 23,
};
console.log(Cars);
//interface extends 2,3 interface k sath kr sakten hen jb k
//class sirf 1 class k sath extend hoti hai
const Honda = {
    carSpeed: 22,
    Label: "Sajid",
    rideSpeed: 233,
};
console.log(Honda);
class Tiger {
    //implement is a keyword to use interface for any class
    constructor(name, runningSpeed) {
        this.name = name;
        this.runningSpeed = runningSpeed;
    } //here public keyword mandatory
    eat(foot) {
        return "Eating Food";
    }
}
const f = (parameter) => {
    console.log(parameter.name);
    //  console.log(parameter.height) //it shows error
    // typescript keh rha hai shyd ye property nhi ho too ap confirm kren
    //now we use Type Guards
    if ("height" in parameter) {
        console.log(parameter.height);
    }
    if ("length" in parameter) {
        console.log(parameter.length);
    }
};
const E = {
    name: "apple",
    height: 23,
};
f(E);
var std2 = {
    name: "Abid",
    email: "abid@gmail.com",
    age: 12,
    courses: ["Maths", "Urdu"],
};
std2;
var User1 = {
    id: 11,
    email: "ebad@gmail.com",
    password: "Password123",
    URL: "Not Required",
    // yhn id humne string krdiya or upper Number
    // q k humne interface me usy StrNum btaya hua hai
};
User1;
// Create an object that conforms to the User type
const user1 = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
// Create an object that conforms to the IUser interface
const user2 = {
    name: "Bob",
    age: 25,
    email: "bob@example.com",
};
function distance(p1, p2) {
    const dx = p2[0] - p1[0];
    const dy = p2[1] - p1[1];
    return Math.sqrt(dx * dx + dy * dy);
}
const p1 = [0, 0];
const p2 = [3, 4];
console.log(distance(p1, p2)); // Output: 5
const myDog = {
    name: "Buddy",
    eat(food) {
        console.log(`Eating ${food}`);
    },
    bark() {
        console.log("Woof!");
    },
};
console.log(myDog);
// Function in TS
/*

const foo=(hi)=>{ // it work but it is not good practice  because we arenot define the "Type of parameter" that function receive
console.log("Hello ",hi)
}
foo("Abid");

*/
//1.  return jo kro uski bhi type btao
//2.  return lazmi kro
// 3. jhn receive kro uski type bhi same ho
// 4. function define sy pehly uski bhi data type dyna hai
const foo2 = (hi) => {
    //here we mentioned also mention returned here
    console.log(`Good Morning ${hi}`);
    return "Bye Bye";
};
let returnedValue = foo2("Ali");
returnedValue;
const add = (val1, val2, calc) => {
    if (calc == "add" || calc == "+") {
        return val1 + val2;
    }
    else {
        return val1 - val2;
    }
};
console.log(add(10, 5, "+")); //yhn 3rd parameter me wahi operation hoga jo apne upper type me mention kiya hai
// --------x----------
// Tuples --->  fixed length Array
let gender = ["Male", "Female"]; //if we add more elements it show error
// here is 1 problem
// gender.push("wwiow") // it work jb k isy error show krna chhaiye
console.log(gender);
// it uses
let admin = [1, "Admin"];
let error = [404, "Not Found"];
// --------x----------
//  FOR Configuration of TS
// tsc --init
/*
in tsconfig.json all define by its defination


"target": "es2016",-->     Set the JavaScript language version for emitted JavaScript and include compatible library declarations.
"lib": [],               Specify a set of bundled library declaration files that describe the target runtime environment.
"rootDir": "./src",       Specify the root folder within your source files.
"outDir": "./dist",       Specify an output folder for all emitted files.
"sourceMap": true,         Create source map files for emitted JavaScript files.
// souceMap humen browser pe debugging k liye asani krta hai q k browser "ts" file ko read nhi krta laken ab kryga

"strict": true,            Enable all strict type-checking options.



*/
// -----------------x-----------
// Class in TS lecture 3    Must watch it
/*      // one method
class StudentClass{
public name_construc:string;  // public ye by default bhi hota hai agar ap mention nhi kren
public rollNum_construc:number
constructor(name_rec:string,rollNum_rec:number){
this.name_construc=name_rec;
this.rollNum_construc=rollNum_rec;
}
}
*/
//  2nd
class StudentClass {
    constructor(name_rec, rollNum_rec) {
        this.name_rec = name_rec;
        this.rollNum_rec = rollNum_rec;
        this.skills = []; //access modifier
    }
    addSkill(skill) {
        this.skills.push(skill);
    }
}
const student1 = new StudentClass("Yasir", 1234);
console.log(student1);
student1.addSkill("private me data save");
console.log(student1);
console.log(student1.name_rec);
// student1.name_rec="Not Edit Possible"  // because it is only readonly
// console.log(student1.rollNum_rec)  //  it is not direct access show error because it private
// since we have done over configuration now
// just type "tsc" in cmd it will direct save app.js file in dist folder
// tsc -w it open watch mode
// -----------------x----------- Class 4
// TypeScript Getters and Setters
//  same as like method
class Product {
    constructor(_id, _price, _name) {
        this._id = _id;
        this._price = _price;
        this._name = _name;
    }
    /*
  
  setId(id:number){ //ye hai method but ab hum Getters And Setters Use krengy
  this._id=id
  }
  getId(){ //ye hai method but ab hum Getters And Setters Use krengy
  return this._id
  }
  
  */
    // Geter
    get id() {
        // receive value
        return this._id; //_id our value
    }
    get name() {
        // receive value
        return this._name; //_name our value
    }
    set name(name) {
        if (!name) {
            // agar name nhi ho to error throw kro
            throw new Error("Name cannot be empty");
        }
        this._name = name;
    }
    get price() {
        // receive value
        return this._price; //_price our value
    }
}
// ------------x------
// Inheritance child class
//interface extends 2,3 interface k sath kr sakten hen jb k
//class sirf 1 class k sath extend hoti hai
class clothingProduct extends Product {
    constructor(id, name, price, _color, _size) {
        super(id, price, name); // yahn ki position same ho jo
        this._color = _color;
        this._size = _size;
    } // upper construction me hai
}
const product1 = new Product(2, 3, "Bilal");
console.log(product1);
//----with methodes
/*
product1.setId(3)
console.log(product1.getId())
*/
// jb hum methodes use kr rhy to single private property ko methode k through access krna hota hai.
// Now Getter And Setters
console.log(product1.price);
console.log(product1.id);
console.log(product1.name); //through getter use direct method name
// console.log(product1.name="")  //show error!
console.log((product1.name = "Abdullah "));
// Inheritance
const tShirt = new clothingProduct(12, "T-Shirt", 1000, "blue", "M");
console.log(tShirt);
// ------------x------
// lecture 4
// abstract
// jo base class ko extend kry us k pass 1 particular method ho lazmi ho jo base me hai
class Parent {
    constructor(_p1, _p1Num) {
        this._p1 = _p1;
        this._p1Num = _p1Num;
    }
}
class Child extends Parent {
    constructor(_p1, _p1Num) {
        super(_p1, _p1Num);
    }
    greeting() {
        return `Hi Child`;
    }
}
const C1 = new Child("ALi", 2);
console.log(C1, C1.greeting());
// ------------x------
// Singleton
// koye bhi class jika 1 bar instence create kry
/*
Static
Math.round(6.9)  // static Method
Math.PI  // static property

console.log(Date.now())  // static method jo direct access kr sako


const  date=new Date()     // "new jhn use ho "it isnot static
console.log(date.getFullYear())
*/
class Util {
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Util();
        }
        return this.instance;
    }
}
const utlInst = Util.getInstance();
const utlInst2 = Util.getInstance();
//----------x--------
// TypeCasting  lecture 6
// typeScript ko btane k liye hum ye use krten hen k ye Html element hau
const input = document.getElementById("input"); //as HTMLInputElement <--- TypeCasting
//----------x--------
// Generics lecture 6
//  Promise<type>
const promiseFunc = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Issue Resolved");
    }, 2000);
});
promiseFunc.then((data) => {
    // console.log(data); it ok but
    const arr = data.split(" "); //data.split not work  it show error data type not defined
    console.log(arr);
    // so we use generic where function call
});
const promiseFunc2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "abid",
                id: 23,
            });
        }, 2000);
    });
};
promiseFunc2().then((data) => {
    // yhn bhi change
    console.log(data.name, data.id);
});
//----------x--------
//video 45:55 // helperfunction that work for us
function merge(ObjA, ObjB) {
    //ye "object" hai ye nhi "Object"
    //  <T,U> yhn ap kuch bhi rakh len. without is k Typescript key ko remove krdyga
    return Object.assign(Object.assign({}, ObjA), ObjB);
}
const mergedVal = merge({ name: "Abid" }, { id: 21 }); // ab upper koye bhi type ki value do wo usy T,U alag suppose kr k merge kryga
console.log(mergedVal.name);
//----------x--------
// Decorator
// isy use krne k liye apko .json file me 1 decorator ko uncomment krna hai
function Logger(msg) {
    //Decorator Factory
    return function (construction) {
        //Decorator
        console.log("Loading...", msg);
    };
}
function FillHtml(template, elemID) {
    return function (construction) {
        const elm = document.getElementById(elemID);
        if (elm) {
            elm.innerHTML = template;
        }
    };
}
let P = class P {
    constructor() {
        this.name = "abid";
    }
};
P = __decorate([
    Logger("Calling From Logger") // usy lazmi constructor me koye parameter receive ho
    ,
    FillHtml("<h1>Hello</h1>", "app") // usy lazmi constructor me koye parameter receive ho
], P);
// decorator jis k class k sath hoga us k sath connect hojayega
//decorator can use with multiple classes with multi arguments
//----------x--------
// Enum
// An enum can be defined using the enum keyword.
// 1.Numeric enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 0] = "Up";
    Direction2[Direction2["Down"] = 1] = "Down";
    Direction2[Direction2["Left"] = 2] = "Left";
    Direction2[Direction2["Right"] = 3] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction); // value then prop
console.log(Direction2);
// Above, we have a numeric enum where Up is initialized with 1. All of the following members are
// auto-incremented from that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.
// if not define it will start from 0 like Direction 2
//2. String enums
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "UP";
    Direction3["Down"] = "DOWN";
    Direction3["Left"] = "LEFT";
    Direction3["Right"] = "RIGHT";
})(Direction3 || (Direction3 = {}));
console.log(Direction3);
// While string enums don’t have auto-incrementing behavior, string enums have the benefit that they “serialize” well.
// In other words, if you were debugging and had to read the runtime value of a numeric enum, the value is often opaque
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess);
//# sourceMappingURL=Basic%20TypeScript.js.map