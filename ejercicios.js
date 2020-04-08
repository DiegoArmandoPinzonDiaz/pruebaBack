process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!
'use strict'

array = [3,2,5,9,1,3];
array2 = [7,2,5,9,8,3];
array3 = [7,2,5,9,8,3,3,2,5,9,1,3];
clases = [{
    horaInicial: '11:00',
    horaFinal: '14:00',
},{
    horaInicial: '12:00',
    horaFinal: '15:00',
}, {
    horaInicial: '14:30',
    horaFinal: '16:00',
}]

console.log('Ejercicio 1, Input: ');
console.log(array);
console.log('Ejercicio 1, Output: ');
console.log(first(array));

console.log('Ejercicio 2, Input: ');
console.log(3,6);
console.log('Ejercicio 2, Output: ');
console.log(second(3,6));

console.log('Ejercicio 3, Input: ');
console.log(array2,2);
console.log('Ejercicio 3, Output: ');
console.log(three(array2,2));

console.log('Ejercicio 4, Input: ');
console.log(array3);
console.log('Ejercicio 4, Output: ');
console.log(four(array3));


console.log('Ejercicio 5, Input: ');
console.log(array3);
console.log('Ejercicio 5, Output: ');
console.log(five("([)]"));


console.log(six(clases));

function first(array){
    let result = [];
    for(let i=1; i<array.length; i++){
        if(array[i] > array[i-1]){
            result.push(array[i])
        }
    };
   return result;
}

function second(a,b){
    let result = 0;
    for(let i=a; i<=b; i++){
        result = i + result;
    };
   return result;
}

function three(array, a){
    array.sort();
   return array[array.length - a];
}

function four(array){
    let result = []
    for(let i=0; i<array.length; i++){
        let index = result.indexOf(array[i])
        if (index === -1) {
            result.push(array[i])
        }
    };
   return result;
}

function five(input){
  let read = ['(','[','{'];
  let match = [')',']','}'];
  let answer = [];
  let balanced = true;
  for(let i=0; i<input.length; i++){
      let indexRead = read.indexOf(input[i]);
      let indexMatch = match.indexOf(input[i]);
      if (indexRead > -1) {
          answer.push(match[indexRead]);
      } else if (indexMatch > -1) {
          if (input[i] === answer[answer.length-1]) {
            answer.splice(answer.length-1, 1);
          } else {
              balanced = false;
              break;
          }
      }
  };
  return balanced
}

function six(array){
   classroom = [];
   for(let i=0; i<array.length; i++){ 
       if (classroom.length > 0) {
            for(let j=0; j<classroom.length; j++) {
                // console.log(j, classroom[j])
                // if (classroom[j].horaInicial > array[i].horaInicial)
            }
       } else {
           classroom.push(array[i])
       }
   }
//    console.log(classroom)
   return classroom.length;
}