// //1
// // Write a function that checks if a given string contains digit 5.
// // Input: “1b895abd”
// // Output: true

// // var checkNumber = function(input, testNumber, digit){

// //     if(!input || input.length == 0 || typeof testNumber != 'function' || !digit ){
// //         return input;
// //     }

// //     for(var i = 0 ; i  < input.length; i ++){
// //         if(testNumber(input[i], digit)){
// //             return {contains: true, input: input}
// //         }
// //     }
// //     return false;
// // }

// // function testNumber(number, digit){
// //     if(number == digit){
// //         return true;
// //     }
// //     return false;
// // }

// // var result = checkNumber('dfaser452', testNumber, 5);
// // console.log(`The ${result.input} contains number ${5} : ${result.contains}`);


// //2
// // Write a function that in a given string replaces all the appearances of the string ‘JS’ with
// // ‘**’.
// // Input: “Programming in JS is super interesting!”
// // Output: “Programming in ** is super interesting!”

// // var replaceJS = function(text, replace){
// //     var newString = '';
// //     newString = text.replaceAll('JS', '**');
// //     return newString;
// // }

// // console.log(replaceJS('Programming in JS is super interesting JS!', 'JS'));

// //8
// // Write a function that sorts an array of strings by the number of appearances of the letter
// // ‘a’ or ‘A’.
// // Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’]
// // Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]


// function counterLetter(text, letter){
//     var newArray = [];
//     var maxCounter = 0;
//     var counter = 0;
//     var position = 0;
//     for(var i = 0; i < text.length; i++){
//         for(var j = 0; j < text[i].length; j++){
//             if(text[i][j] == letter){
//                 counter ++;
//             } 
//         }
//         maxCounter = counter;
//         counter = 0;

//         if(maxCounter == 0){
//             newArray.unshift(text[i]);
//         }

//         if(maxCounter > 0){
//             newArray.push(text[i]);
//         }
//     }
//     console.log(counter);
//     return newArray;

// }


// console.log(counterLetter(['apple', 'tea', 'amazing', 'morning', 'JavaScript'], 'a'));


//Test

// var array = ['s','c'];
// array.length = 0;
// console.log(array);


// var a = 10;
// var b = 5;
// var res = a || b ++;
// console.log(a, b);

// var n= 10;
// n *= 4
// console.log(n);

// var array = ['s','c'];
// console.log(array[3]);

// var x =1, y =3, z =8;
// x=y=z=8;
// console.log(x,y,z);

// console.log(2<3+5);

// console.log('312' == 312);

// console.log(10 * 'abc');

// var x =10;
// var y = 5;
// console.log(x + 'y = ' + (x+y));

var x =10;
var y = 5;
console.log(x + 'y = ' + x+y);

// console.log(2e2 + 1);

// console.log([2,3,4] == [2,3,4]);

// console.log(typeof 2+3);


// var value = 2;
// switch(value){
//     case 2:
//         console.log('2');
// }

// var input = 0xa41;
// console.log(typeof input)

// var input;
// console.log(typeof typeof 1)


// test


// var a = 4, b = 3;

// if(a = b){
//     console.log('The number are equal!');
// } else{
//     console.log('Nope, the aren\'t');
// }

