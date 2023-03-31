//  npm install jsdom   --> if quokka show error jsdom not found
// tsc fileName.ts      --> to convert ts file to js


// Variable in TS
let a:string="Hello";
console.log(a)

// Number in TS
let b:number=22;
console.log(b)

// Array in TS
let arr:string[]=["Maths","Physics"]//only either string or number because we use TypeScript so it Shows error
console.log(arr)

let arr2:Array<number>=[1,2,3,4]// another way to define array
console.log(arr2)

// object in TS

var std1:{name:string,age:number}={
    name:"Ali",
    age:16
}
console.log(std1)


// --------x----------

// Type in TS
// humne 1 new custom type banadiya jis sirf 3 name hen;

// String literals

type Animals="cat"|"dog"|"bird";   // String literals here we use "|" is called Union-Operators

let myFavPet:Animals="cat";//is varibale ki type Animal hai or uski 
                            // value upper me sy koye ho sakti hai 

function buyPet(pet:Animals){
    console.log(pet)
}
buyPet(myFavPet)

//down saylani

type Person={       // 1 object or uski values ki type mention krdiya ab direct is Person k refrence kren 
    name:string;
    rollNum:number;
    hobbies:string[];
    city?:string    //ID as a optional
}

const person1:Person[]=[]   //person1 ki type Person ki trha hogi
person1.push({
    rollNum:23,         // inki property upper nichy ho sakti hai but
    name:"Abid",        // property k name "name" too wahi hoga
    hobbies:["Cricket"],
    city:"Karachi"
})
person1

// --------x----------


// InterFace    (bluePrint for object)
// esy use krne sy apko bar bar object ki type define nhi 
// krna hoga agar ap same object create kr rhy hen
// Interface ends with      ; 
//  interface can be extends possible 
type StrNum= string | number    // 1 new type jo number or string dono me sy koye 1 ly sakta hai


interface Students{
    name:string;
    email:string;
    age:number;
    courses:string[];
    id?:StrNum;  //ID as a optional
}


var std2:Students={
    name:"Abid",
    email:"abid@gmail.com",
    age:12,
    courses:["Maths","Urdu"],
}
std2

interface Login{
    id:number;
    email:string;
    password?:StrNum;
    URL?:string;
}

var User1:Login={
    id:11 , 
    email:"ebad@gmail.com",
    password:"Password123",
    URL:"Not Required"
    // yhn id humne string krdiya or upper Number
    // q k humne interface me usy StrNum btaya hua hai   
}
User1


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
  email: "alice@example.com"
};

// Create an object that conforms to the IUser interface
const user2: IUser = {
  name: "Bob",
  age: 25,
  email: "bob@example.com"
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
  return Math.sqrt(dx*dx + dy*dy);
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
  }
};

console.log(myDog)


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

const foo2=(hi:string):string=>{       //here we mentioned also mention returned here
    console.log(`Good Morning ${hi}`)
    return "Bye Bye"
}
let returnedValue:string=foo2("Ali");
returnedValue


// Saylani down

type Calc="add"|"subtract"|"+"|"-"  // String literals here we use "|" is called Union-Operators
const add=(val1:number,val2:number,calc:Calc):number=> {
      if (calc=="add" || calc=="+") {
        return val1+val2
      } else {
        return val1-val2
      }
}

console.log(add(10,5,"+")) //yhn 3rd parameter me wahi operation hoga jo apne upper type me mention kiya hai

// --------x----------


// Tuples --->  fixed length Array 

let gender: [string,string]=["Male","Female"] //if we add more elements it show error 
// here is 1 problem 
// gender.push("wwiow") // it work jb k isy error show krna chhaiye
console.log(gender)

// it uses 

let admin:[number,string]=[1,"Admin"]
let error:[number,string]=[404,"Not Found"]

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

