
//funcations
let crow = "Black Crow";

function birdwatch() {
    let bird = 'crow'; 
    return bird;     
}

console.log(birdwatch());

//die roll funcation
function dieroll() {
    let die = Math.floor(Math.random() * 6) + 1; 
    return die;
}

//for loop
console.log(dieroll());
console.log(crow);
let animals=['panda','lion','tiger','elephant'];
let i=10;
for(let i=0;i<animals.length;i++){
    console.log(i,animals[i])
}
console.log(i);
//while loop with break;

const target = Math.floor(Math.random() * 10);
let guess;

while (true) {
  guess = Math.floor(Math.random() * 10);
  console.log(`target: ${target}, guess: ${guess}`);

  if (guess === target) {
    console.log("You win!");
    break; 
  }
}
 //for....of loop
 //it is used to store each element ot array into a variable

 for(let jungle of animals){
    console.log(jungle);
 }
 //another example of for..of

 for(let upper of 'king'){
    console.log(upper.toUpperCase())
 }