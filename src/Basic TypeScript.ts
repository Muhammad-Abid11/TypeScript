//  npm install jsdom   --> if quokka show error jsdom not found
// tsc fileName.ts      --> to convert ts file to js

// Variable in TS
let a: string = "Hello";
console.log(a);

// Number in TS
let b: number = 22;
console.log(b);

// Array in TS
let arr: string[] = ["Maths", "Physics"]; //only either string or number because we use TypeScript so it Shows error
console.log(arr);

let arr2: Array<number> = [1, 2, 3, 4]; // another way to define array
console.log(arr2);

// object in TS

var std1: { name: string; age: number } = {
  name: "Ali",
  age: 16,
};
console.log(std1);

// --------x----------

// Type in TS
// humne 1 new custom type banadiya jis sirf 3 name hen;

// String literals

type Animals = "cat" | "dog" | "bird"; // String literals here we use "|" is called Union-Operators

let myFavPet: Animals = "cat"; //is varibale ki type Animal hai or uski
// value upper me sy koye ho sakti hai

function buyPet(pet: Animals) {
  console.log(pet);
}
buyPet(myFavPet);

//down saylani

type Person = {
  // 1 object or uski values ki type mention krdiya ab direct is Person k refrence kren
  name: string;
  rollNum: number;
  hobbies: string[];
  city?: string; //ID as a optional
};

const person1: Person[] = []; //person1 ki type Person ki trha hogi
person1.push({
  rollNum: 23, // inki property upper nichy ho sakti hai but
  name: "Abid", // property k name "name" too wahi hoga
  hobbies: ["Cricket"],
  city: "Karachi",
});
console.log(person1);

// --------------------------x-----------

//  Union and Intersection Type

type MotorBikes = {
  // 1st type
  Label: string;
  rideSpeed: number;
};
type MotorCar = {
  // 2nd type
  Label: string;
  carSpeed: number;
};
type Vehicles = MotorBikes | MotorCar; // Union of Types

const Bike: Vehicles = {
  //
  Label: "SuperPower",
  //here we use either rideSpeed or carSpeed because of Union
  rideSpeed: 232,
};
console.log(Bike);

// Intersection of Types
type HybridVehicles = MotorBikes & MotorCar;

const Cars: HybridVehicles = {
  Label: "Civic",
  //here we use both rideSpeed and carSpeed because of InterSection
  carSpeed: 23,
  rideSpeed: 23,
};

console.log(Cars);

// --------x----------

// InterFace    (bluePrint for object)
// esy use krne sy apko bar bar object ki type define nhi
// krna hoga agar ap same object create kr rhy hen
// Interface ends with      ;
//  interface can be extends possible
type StrNum = string | number; // 1 new type jo number or string dono me sy koye 1 ly sakta hai

interface Students {
  name: string;
  email: string;
  age: number;
  courses: string[];
  id?: StrNum; //ID as a optional
}

var std2: Students = {
  name: "Abid",
  email: "abid@gmail.com",
  age: 12,
  courses: ["Maths", "Urdu"],
};
std2;

interface Login {
  id: number;
  email: string;
  password?: StrNum;
  URL?: string;
}

var User1: Login = {
  id: 11,
  email: "ebad@gmail.com",
  password: "Password123",
  URL: "Not Required",
  // yhn id humne string krdiya or upper Number
  // q k humne interface me usy StrNum btaya hua hai
};
User1;

// ----------------------------------x----------------------------

// Difference between Type and Interface    ChatGPT

// Define a type
type User = {
  name: string;
  age: number;
  email: string;
};

// Define an interface
interface IUser {
  name: string;
  age: number;
  email: string;
}

// Create an object that conforms to the User type
const user1: User = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

// Create an object that conforms to the IUser interface
const user2: IUser = {
  name: "Bob",
  age: 25,
  email: "bob@example.com",
};

// Attempt to create an object that partially conforms to the User type

/*  //uncomment * me and check 
const user3: User = {
name: "Charlie",
age: 20
// Error: Property 'email' is missing in type '{ name: string; age: number; }' but required in type 'User'.
// ye error upper nhi ayega Type k example pe nhi ayega qk  wo array disturb kr rha hai 
};
user3

*/

// Overall, the difference between a type
//  and an interface in TypeScript is largely
//  syntactic and conceptual, but understanding
// when to use each can help make your code
//  more clear and maintainable

// Now  Real Difference here

// USE OF TYPE
type Point = [number, number];

function distance(p1: Point, p2: Point): number {
  const dx = p2[0] - p1[0];
  const dy = p2[1] - p1[1];
  return Math.sqrt(dx * dx + dy * dy);
}

const p1: Point = [0, 0];
const p2: Point = [3, 4];
console.log(distance(p1, p2)); // Output: 5

// USE OF Internface

interface Animal {
  name: string;
  eat(food: string): void;
}

interface Dog extends Animal {
  bark(): void;
}

const myDog: Dog = {
  name: "Buddy",
  eat(food: string) {
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

const foo2 = (hi: string): string => {
  //here we mentioned also mention returned here
  console.log(`Good Morning ${hi}`);
  return "Bye Bye";
};
let returnedValue: string = foo2("Ali");
returnedValue;

// Saylani down

type Calc = "add" | "subtract" | "+" | "-"; // String literals here we use "|" is called Union-Operators
const add = (val1: number, val2: number, calc: Calc): number => {
  if (calc == "add" || calc == "+") {
    return val1 + val2;
  } else {
    return val1 - val2;
  }
};

console.log(add(10, 5, "+")); //yhn 3rd parameter me wahi operation hoga jo apne upper type me mention kiya hai

// --------x----------

// Tuples --->  fixed length Array

let gender: [string, string] = ["Male", "Female"]; //if we add more elements it show error
// here is 1 problem
// gender.push("wwiow") // it work jb k isy error show krna chhaiye
console.log(gender);

// it uses

let admin: [number, string] = [1, "Admin"];
let error: [number, string] = [404, "Not Found"];

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
  private skills: string[] = []; //access modifier
  constructor(public readonly name_rec: string, private rollNum_rec: number) {}
  addSkill(skill: string) {
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
  constructor(
    private _id: number,
    private _price: number,
    private _name: string
  ) {}
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

  set name(name: string) {
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

class clothingProduct extends Product {
  constructor(
    id: number,
    name: string,
    price: number,
    private _color: string,
    private _size: "S" | "M" | "L" | "XL"
  ) {
    super(id, price, name); // yahn ki position same ho jo
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

// abstract
// jo base class ko extend kry us k pass 1 particular method ho

abstract class Parent {
  constructor(private _p1: string, private _p1Num: number) {}
  //Abtract function in Parent that should be in child
  abstract greeting(): string; // abstract method
}
class Child extends Parent {
  constructor(_p1: string, _p1Num: number) {
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
  private static instance: Util;
  private constructor() {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Util();
    }
    return this.instance;
  }
}
const utlInst = Util.getInstance();
const utlInst2 = Util.getInstance();
