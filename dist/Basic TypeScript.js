"use strict";
//  npm install jsdom   --> if quokka show error jsdom not found
// tsc fileName.ts      --> to convert ts file to js
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
    age: 16
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
    city: "Karachi"
});
person1;
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
    URL: "Not Required"
    // yhn id humne string krdiya or upper Number
    // q k humne interface me usy StrNum btaya hua hai   
};
User1;
// Create an object that conforms to the User type
const user1 = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};
// Create an object that conforms to the IUser interface
const user2 = {
    name: "Bob",
    age: 25,
    email: "bob@example.com"
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
    }
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
        return this._id; //_id our value
    }
    get name() {
        return this._name; //_name our value
    }
    set name(name) {
        if (!name) {
            throw new Error("Name cannot be empty");
        }
        this._name = name;
    }
    get price() {
        return this._price; //_price our value
    }
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
console.log(product1.name = "Abdullah ");
//# sourceMappingURL=Basic%20TypeScript.js.map