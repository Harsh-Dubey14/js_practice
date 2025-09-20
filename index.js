
// //funcations
// let crow = "Black Crow";

// function birdwatch() {
//     let bird = 'crow'; 
//     return bird;     
// }

// console.log(birdwatch());

// //die roll funcation
// function dieroll() {
//     let die = Math.floor(Math.random() * 6) + 1; 
//     return die;
// }

// //for loop
// console.log(dieroll());
// console.log(crow);
// let animals=['panda','lion','tiger','elephant'];
// let i=10;
// for(let i=0;i<animals.length;i++){
//     console.log(i,animals[i])
// }
// console.log(i);
// //while loop with break;

// const target = Math.floor(Math.random() * 10);
// let guess;

// while (true) {
//   guess = Math.floor(Math.random() * 10);
//   console.log(`target: ${target}, guess: ${guess}`);

//   if (guess === target) {
//     console.log("You win!");
//     break; 
//   }
// }
//  //for....of loop
//  //it is used to store each element ot array into a variable

//  for(let jungle of animals){
//     console.log(jungle);
//  }
//  //another example of for..of

//  for(let upper of 'king'){
//     console.log(upper.toUpperCase())
//  }


 //datte:-20/sep/2025
// for....in loop
 const winnings={
    regular:30,
    tournament:40,
    seasonal:20

 };
 for( let prop in winnings){

    console.log(`${prop}:${winnings[prop]}`)
 }
 for(const[key,values]of Object.entries(winnings)){
    console.log(`${values}:${key}`)
 }

 //password validator funcation
function passwordValidator(password, username) {
    if (password.length < 8) {
        console.log('Password is too short');
    }

    if (password.includes(' ')) {
        console.log('Password must not have spaces');
    }

    if (username && password.includes(username)) {
        console.log('Password must not contain the username');
    }

    if (
        password.length >= 8 &&
        !password.includes(' ') &&
        !(username && password.includes(username))
    ) {
        console.log('Password is valid');
    }
}

// Example usage:
passwordValidator('abc', 'john');           
passwordValidator('john1234', 'john');     
passwordValidator('goodPassword', 'john');  

//aavg of array
let arr=[1.2,3,4,5,6];
function avg(arr){
 let sum=0
 for (let num of arr) {
    sum+=num;}
    return sum/arr.length;
    
 }
console.log(avg(arr));
// double the element of aaray
function doubleArr(arr) {
    let result=[];
    for(let num of arr){
        let double=num*2
        result.push(double)
    }
    return result;
    
}
console.log(doubleArr([1,2,3,4]));
// funcation expression
//funcations are object in js we can store them in variable
const substraction=function(x,y){
    return x-y;
}
console.log(substraction(49,40));

//funcation in array

const addition=function(x,y){
    return x+y;
}
const multiplication=function(x,y){
    return x*y;
}
const subs=function(x,y){
    return x-y;
}

let operations=[addition,subs,multiplication];
//using funcations from array
for(let result of operations){
    let funs=result(4,3);
    console.log(funs);
}
//funcation arguments
function happy(){
    console.log("the world is beautiful");
}
function rage(){
    console.log("what a drag");
}
function repeatThreeTimes(action,num){
  for (let i= 0; i< num; i++) {
    action();
    
  }
}
repeatThreeTimes(rage,2);
repeatThreeTimes(happy,2);

//function as return value
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

// triple holds a function:
const triple = multiplyBy(3);
console.log(triple(4));  
console.log(triple(10)); 

const double = multiplyBy(2);
console.log(double(3));  
console.log(double(9));  

const halve = multiplyBy(0.5);
console.log(halve(5));   
console.log(halve(100));

function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
}

// This function checks if a value is between 0 and 18
const isChild = makeBetweenFunc(0, 18);
console.log(isChild(10));  
console.log(isChild(56));  

const isInNineties = makeBetweenFunc(1990, 1999);
console.log(isInNineties(1994)); 
console.log(isInNineties(1987)); 

const isNiceWeather = makeBetweenFunc(60, 79);
console.log(isNiceWeather(68));  
console.log(isNiceWeather(98)); 
