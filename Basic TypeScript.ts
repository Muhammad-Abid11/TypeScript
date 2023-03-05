// Variable in TS
let a:string="Hello";
console.log(a)

// Number in TS
let b:number=22;
console.log(b)

// Array in TS
let arr:string[]=["Maths","Physics"]//only either string or number because we use TypeScript so it Shows error
console.log(arr)

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







// InterFace    
// esy use krne sy apko bar bar type define nhi 
// krna hoga agar ap same object create kr rhy hen
// in Interface ends with      ; 
interface Students{
    name:string;
    email:string;
    age:number;
    courses:string[];
    id?:number;  //ID as a optional
}


var std2:Students={
    name:"Abid",
    email:"abid@gmail.com",
    age:12,
    id:11,
    courses:["Maths","Urdu"]
}
std2
