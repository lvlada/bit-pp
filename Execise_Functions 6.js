//15

// function addFrame(inputArray){
//     if(!inputArray || inputArray.length < 1){
//         return inputArray;
//     }

// }

//1

// function countVowels(string){
//     var counter = 0;
//     var newString = string.toLowerCase();
//     for(var i = 0; i < newString.length; i++){
//         if(newString[i] == 'a' || newString[i] == 'a' || newString[i] == 'a' || string[i] == 'a' ){
//             counter++
//         }
//     }

//     return counter;
// }

// var string = 'VladimirA';

// var rez = countVowels(string);
// console.log(rez);

//2

// function combArray(array1, array2){
//     var newArray = [];

//     for (var i = 0; i < array1.length; i ++){
//         newArray.push(array1[i], array2[i]);
//     }

//     return newArray;
// }

// var array1 = ['a','b','c'];
// var array2 = [1, 2, 3];

// var rez = combArray(array1, array2);
// console.log(rez);


//3 Write a function that rotates a list by k elements.

// function rotateElemets(array, k){
//     var newArray = array.slice(0, k);
//     var array = array.slice(k, array.length);
//     var rez = array.concat(newArray);

//     return rez;
// }

// var array = [1, 2, 3, 4, 5, 6];
// var k = 2
// var rez = rotateElemets(array, k);
// console.log(rez);


//4 Write a function that takes a number and returns array of its digits.

// function arrayDig(number){
//     newArray = [];
//     newArray = Array.from(String(number), Number);

//     return newArray;
// }

// var rez = arrayDig(123456);
// console.log(rez);


//5 Write a program that prints a multiplication table for numbers up to 12.




//6 Write a function to input temperature in Centigrade and convert to Fahrenheit.

// function centigradeToFahren(cel){
//     var newTem = 0;
//     newTem = (cel * 9/5) + 32;

//     return newTem;
// }

// var rez = centigradeToFahren(37);
// console.log(rez);

//7

// function maxNumber(array){
//     var maxNumber = 0;
//     var maxElement = 0;
//     for (num in array){
//         if( typeof array[num] == 'number' && !isNaN(array[num])){
//             maxElement ++;
//             var number = array[num];
//             if(number > maxNumber){
//                 maxNumber = number;
//             }
//         }
//     }


//     return 'Maximal number of element in array of number are: ' + maxElement + ' and maximal number in array is: ' + maxNumber;
// }

// var numbers = [3, 35, 5, 0, -1, NaN, true, false];
// var rez = maxNumber(numbers);
// console.log(rez);


//8 Write a function to find the maximum and minimum elements. Function returns an array.

// function maxAndMin(array){
//     var maxNumber = 0;
//     var minNumber = array[0];
//     for (num in array){
//         if( typeof array[num] == 'number' && !isNaN(array[num])){
//             var number = array[num];
//             if(number > maxNumber){
//                 maxNumber = number;
//             } else if(number < minNumber){
//                 minNumber = number
//             }
//         }
//     }


//     return 'Maximal number is : ' + maxNumber + ' and minimal number is: ' + minNumber;
// }

// var numbers = [3, 35, 5, 0, -1, NaN, true, false, -5, 78];
// var rez = maxAndMin(numbers);
// console.log(rez);


//9 Write a function to find the median element of array.

// function midInArray(array){
//     var midNumber = 0;
//     var counter = 0;
//     var sum = 0;
//     for (num in array){
//         if( typeof array[num] == 'number' && !isNaN(array[num])){
//             counter++;
//             sum += array[num];
//         }
//     }
//     midNumber = Math.floor(sum / counter);

//     return 'Mid number is : ' + midNumber;
// }

// var numbers = [3, 35, 5, 0, -1, NaN, true, false, -5, 78];
// var rez = midInArray(numbers);
// console.log(rez);


//10


