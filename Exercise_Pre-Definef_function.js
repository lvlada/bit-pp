//1

// function numberConvert(array){
//     var number = null;
//     var newArray = [];
//     for(element in array){
//         number = Number(array[element]);
//         if(!isNaN(number) && isFinite(number)){
//             newArray.push(number);
//         }
//     }

//     return newArray;
// }

// var array = ['1', '21', undefined, '42', '1e+3', Infinity];
// var rez = numberConvert(array);
// console.log(rez);

//2

// function stringConvert(array){
//     var newString = '';
//     for(element in array){
//         if(array[element] != null && array[element] != NaN && isFinite(array[element] && array[element] != undefined)){
//             newString += array[element];
//         }
//     }

//     return newString;
// }

// var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
// var rez = stringConvert(array);
// console.log(rez);


//3
// function arrayFilter(array){
//     var newArray = [];
//     var number = null;
//     for(element in array){
//         number = Number(array[element]);
//         if(!isNaN(number) && number != '' && number != null && number != false){
//             newArray.push(array[element]);
//         }
//     }

//     return newArray;
// }

// var array = [NaN, 0, 15, false, -22, '', undefined, 47, null]
// var rez = arrayFilter(array);
// console.log(rez);


//4 Integer !!!!!
// function arrayFilter(array){
//     var rez = 0;
//     var number = null;
//     for(element in array){
//         number = Number(array[element]);
//         if(!isNaN(number) && number != '' && number != null && number != false){
//             rez += number;
//         }
//     }

//     return rez;
// }

// var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// var rez = arrayFilter(array);
// console.log(rez);


//5 Float
// function arrayFilter(array){
//     var rez = 0;
//     var number = null;
//     for(element in array){
//         number = Number(array[element], 10);
//         if(!isNaN(number) && number != '' && number != null && number != false){
//             if(number % 1 != 0){
//                 rez += number;
//             }

//         }
//     }

//     return rez.toFixed(2);
// }

// var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// var rez = arrayFilter(array);
// console.log(rez);

