//  var k tene upore newa jay jeita hoisting
// let or const k scop er baire newa jay naaaa



let bonus = 20;

function sum(first, second){
    let result = first + second + bonus;
    // console.log(result);
    if(result > 9){
        let mood = "happy"

    }
    return result;
}

const output = sum(3, 10);
// console.log(bonus);
// console.log(output);


