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
type Animals="cat"|"dog"|"bird";

let myFavPet:Animals="cat";//is varibale ki type Animal hai or uski 
                            // value upper me sy koye ho sakti hai 

function buyPet(pet:Animals){
    console.log(pet)
}
buyPet(myFavPet)


// --------x----------


// InterFace    (bluePrint for object)
// esy use krne sy apko bar bar object ki type define nhi 
// krna hoga agar ap same object create kr rhy hen
// Interface ends with      ; 
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


// --------x----------

// Function in TS

const foo=(hi)=>{ // it work but it is good practice  because we arenot define the "Type of parameter" that function receive
    console.log("Hello ",hi)
}
foo("Abid");

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

// --------x----------




// --------x----------

