//Exercise_Functions 1

//1
// function sum(a, b){
//     var c = a + b;
//     return c;
// }

// var res = sum(2, 5);
// console.log(res);

// //2
// function checkOdd(a){
//     if(a % 2 == 0){
//         return true
//     } else{
//         return false
//     }

// }

// var odd = checkOdd(3);
// console.log(odd);

//3

// function checkLong(a){
//     var res = a.toString().length;
//     if(res == 3){
//         return true;
//     } else{
//         return false;
//     }
// }

// var number = checkLong(111);
// console.log(number);

//4

// function aritmsticMeans(a, b, c, d){
//     var c = (a + b + c + d)/ 4
//     return c;
// }

// var number = aritmsticMeans(3, 4, 5, 6);
// console.log(number);

//5


//6


//7

// function checkLong(a){
//     var res = a.toString().length;
//     return res;
// }

// var newRes = checkLong(234);
// console.log(newRes);

//8 and 9
// function checkRep(){
//     var e = 7;
//     var sum = 0;
//     for(var i = 0;  i < arguments.length; i++){
//         if(arguments[i] == e){
//             sum ++;
//         }
//     }

//     return sum;
//  }


//  function oddSum(){
//     var sum = 0;
//     for(var i = 0;  i < arguments.length; i++){
//         if(arguments[i] % 2 != 0){
//             sum += arguments[i];
//         }
//     }

//     return sum;
//  }


// var rez = checkRep(2, 4, 7, 8, 7, 7, 1, 7, 1, 7);
// var rezNew = oddSum(2, 4, 7, 8, 7, 7, 1);
// console.log(rez);
// console.log(rezNew);


//10a

// function numLetter(a){
//     var sum = 0;
//     var res = a.length;
//     var e = 'a';
//     for(var i = 0; i < a.length; i++){
//         if(a[i] == e){
//             sum++;
//         }
//     }

//     return sum;
// }

// var letter = numLetter('aaaAa');
// console.log(letter);


//10b

// function numLetter(a){
//     var sum = 0;
//     newA = a.toLowerCase();
//     var res = a.length;
//     var e = 'a';
//     for(var i = 0; i < newA.length; i++){
//         if(newA[i] == e){
//             sum++;
//         }
//     }

//     return sum;
// }

// var letter = numLetter('aaaAaAA');
// console.log(letter);

//11

// function concetString(a){
//     var e = 2;
//     var rez = ''
//     for(var i = 0; i < e; i++){
//         rez += a;
//     }

//     return rez;


// }

// var rez = concetString('abc');
// console.log(rez);




//Exercise_Functions 2

//1
// function checkInput(a){
//     if(typeof a == 'string'){
//         return true;
//     } else{
//         return false;
//     }
// }

// var chek = checkInput(1);
// console.log(chek);


//2
// function checkInput(a){
//     if(a == ''){
//         return true;
//     } else{
//         return false;
//     }
// }

// var chek = checkInput('1');
// console.log(chek);


//3
// function concetString(a){
//     var e = 3;
//     var rez = ''
//     for(var i = 0; i < e; i++){
//         rez += a;
//     }

//     return rez;


// }

// var rez = concetString('Ha');
// console.log(rez);


//4
// function numLetter(a){
//     var sum = 0;
//     var e = 'n';
//     for(var i = 0; i < a.length; i++){
//         if(a[i] == e){
//             sum++;
//         }
//     }

//     return sum;
// }

// var letter = numLetter('My random string');
// console.log(letter);

//5 problem with else and -1!!!
// function numLetter(a){
//     var e = 'n';
//     for(var i = 0; i < a.length; i++){
//         if(a[i] == e){
//             return i;
//         } 
//     }
//     return -1;

// }

// var letter = numLetter('My random string');
// console.log('First occurrence of a character "n" strign is: ', letter);

//6 problem with undefine!!!!
// function numLetter(a){
//     var e = 'n';
//     var length = a.length-1;
//     for(var i = length; i >= 0; i--){
//         if(a[i] == e){
//             return i;
//         }
//     }
//     return -1;
// }

// var letter = numLetter('My random string');
// console.log('Last occurrence of a character "n" i a strign is: ', letter);


//7
// function replaceString(a){
//     array = a.split('');
//     for(a in array){
//         if(array[a] == ' '){
//             array[a] = null;
//         }
//     }

//     return array;
// }


// var rez = replaceString('My random string');
// console.log(rez);

//8

// function checkPrime(a){
//     if(a > 1 && a == 2 || a == 3){
//         return true;
//     } else if(a % 2 != 0 && a % 3 != 0){
//         return true
//     } else {
//         return false
//     }
// }

// var rez = checkPrime(23);
// console.log(rez);


//9

// function replaceString(a, b){
//     var newString = '';
//     if(b){
//         newString = a.replaceAll(' ', b);
//     } else{
//         newString = a.replaceAll(' ', '_');
//     }

//     return newString;
// }


// var rez = replaceString('My random string', '+');
// console.log(rez);

//10

// function newSub(a, b){
//     newString = '';
//     if(a.length > b){
//         new_part = a.substring(0, b)
//     } else{
//         return 'To big number!'
//     }

//     return new_part + '...'
// }

// var newString = newSub('Vladimir', 7);
// console.log(newString);


//11

// function convertStrToNumber(){
//     newArray = [];
//     newNumber = 0;
//     for(var i = 0; i < arguments.length; i++ ){
//         newNumber = Number(arguments[i]);
//         if(!isNaN(newNumber) && newNumber != "Infinity"){
//             newArray.push(newNumber);
//         }
//     }
//     return newArray;

// }

// var newArray = convertStrToNumber('20', '1', '21', undefined, '42', '1e+3', Infinity);
// console.log(newArray);


//12

// function retirement(a, b){
//     years = 0;
//     if(a == 'women'){
//         if(b < 60){
//             years = 60 - b;
//             return years;
//         }
//         else{
//             return 'You are already in retirement or death :)!';
//         }
//     }
//     if(a == 'man'){
//         if(b < 65){
//             years = 65 - b;
//             return years;
//         }
//         else{
//             return 'You are already in retirement or death :)!';
//         }
//     }
// }

// var answer = retirement('man',55);
// console.log('You have to year/years to retirement: ',answer);


//Exercise_Functions 3

function concetString(a, b, c){


}

var newString = concetString('My random string', 'JS', 10);