const numbers = [2, 4, 5, 6, 7, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square(element){
//     return element * element;
// }


// const result = numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })
// // 
// // 
// const multi = numbers.map(function(element){
//     return element * element;
// })
// console.log(multi);
// // 
// // 
// const multi2 = numbers.map(x => x * x)
// console.log(multi2);


const bigger = numbers.filter(x => x > 5);
console.log(bigger);

