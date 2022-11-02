// Exercise_Functions 4

//1

// var e = 2;
// function checkNumber(){
//     for(var i = 0; i < arguments.length; i++){
//         if(arguments[i] == e){
//             return'yes';
//         }
//     }
//     return 'no';
// }

// var rez = checkNumber(5, -4.2, 2, 7);
// console.log(rez);

//2

// function multiNumber(){
//     var noviNiz = [];
//     for(var i = 0; i < arguments.length; i++){
//         if(arguments[i] > 0){
//             noviNiz.push(arguments[i] *=2);
//         }else{
//             noviNiz.push(arguments[i]);
//         }
//     }

//     return noviNiz;
// }

// var rez = multiNumber(-3, 11, 5, 3.4, -8);
// console.log(rez);


//3
// function miniNumber(){
//     var min = 0;
//     var index = 0;
//     for(var i = 0; i < arguments.length; i++){
//         if(arguments[i] < 0){
//             min = arguments[i];
//             index = i;
//         }
//     }

//     return console.log(min, index);
// }

// var rez = miniNumber(4, 2, 2, -1, 6);

//4  problem with index!!!!
// function secondSmallNumber(){
//     var firstMin = arguments[0];
//     var secondMin = arguments[1];
//     var index = 0;
//     for(var i =0; i < arguments.length; i++){
//         if(arguments[i] < firstMin ){
//             firstMin = arguments[i];
//             //index = i;
//         }
//         if(arguments[i] > firstMin && arguments[i] < secondMin){
//             secondMin = arguments[i];
//             index = i;
//         }
//     }

//     return console.log(secondMin, index);
// }

// var rez = secondSmallNumber(4, 2, 2 -1, 6);

//5

// function multiNumber(){
//     var sum = 0
//     for(var i = 0; i < arguments.length; i++){
//         if(arguments[i] > 0){
//             sum += arguments[i];
//         }
//     }

//     return sum;
// }

// var rez = multiNumber(-3, 11, -5, 3, 2);
// console.log(rez);



//6

// function simArray(){
//     var listControl = false;

//     for (var i = 0; i < Math.round(arguments.length/2); i ++){
//         if(arguments[i] == arguments[arguments.length-1-i]){
//             listControl = true;
//         } else{
//             listControl = false;

//             return console.log('The array is NOT symmetric.');
//         }
//     }
//     if(listControl){

//        return console.log('The array is symmetric.');
//     }
// }

// var rez = simArray(2, 4, -2, 7, -2, 4, 2);


//7

// function interwinesTwoArrays(a, b){
//     var newArray = [];
//     for(var i = 0; i < a.length; i++){
//         newArray.push(a[i], b[i]);
//     }
//     return newArray;
// }

// var rez = interwinesTwoArrays([4, 5, 6, 2], [3, 8, 11, 9])
// console.log(rez);

//8
// function concateTwoArrays(a, b){
//     var newArray = [];
//     newArray = a.concat(b);
//     return newArray;
// }

// var rez = concateTwoArrays([4, 5, 6, 2], [3, 8, 11, 9])
// console.log(rez);

//9

// function delElemet(){
//     var newArray = [];
//     for(var i = 0; i < arguments.length; i++){
//         if(arguments[i] != e ){
//             newArray.push(arguments[i]);
//         }
//     }
//     return newArray;
// }
// var e = 2;
// var rez = delElemet(4, 6, 2, 8, 2, 2);
// console.log(rez);


//10

// function insertEleme(a){
//     if(a.length-1 > p){
//         a.splice(p, 0, e)
//         return a;
//     }
//     return false;

// }

// var p = 3;
// var e = 78;
// var a = [2, -2, 33, 12, 5, 8];
// var rez = insertEleme(a);
// console.log(rez);


// Exercise_Functions 5

//1
// function switchPlaces(a){
//     var min = a[0];
//     var max = a[0];
//     for(var i = 0; i < a.length; i++){
//         if(a[i] < min){
//             min = a[i];
//         } else if (a[i] > max){
//             max = a[i];
//         }
//     }
//     indexMin = a.indexOf(min);
//     indexMax = a.indexOf(max);
//     a[indexMax] = min;
//     a[indexMin] = max;

//     return a;

// }
// var a = [3, 500, 12, 149, 53, 414, 1, 19];
// var rez = switchPlaces(a);
// console.log(rez);

//2

// function someCalculations(a){
//     for(elemet in a){
//         if(a[elemet]/2 + 5 == 0){
//             a[elemet] = 20;
//         } else{
//             a[elemet] = a[elemet]/2 + 5;
//         }
//     }
//     return a;
// }

// var a = [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// var rez = someCalculations(a);
// console.log(rez);


//3

// VER_1
// function nameGrades(names, points){
//     for(name in names){
//         if(points[name] <= 50 ){
//             console.log(names[name] + ' acquired ' +  points[name] + ' points and failed to complete the exam.');
//         } else if (points[name] > 50 && points[name] < 61) {
//             console.log(names[name] + ' acquired ' + points[name] + ' points and earned 6');
//         }else if (points[name] > 60 && points[name] < 71) {
//             console.log(names[name] + ' acquired ' + points[name] +  ' points and earned 7');
//         }else if (points[name] > 70 && points[name] < 81) {
//             console.log(names[name] + ' acquired ' + points[name] + ' points and earned 8');
//         }else if (points[name] > 80 && points[name] < 91) {
//             console.log(names[name] + ' acquired ' + points[name] + ' points and earned 9');
//         }else if (points[name] > 90 && points[name] <= 100) {
//             console.log(names[name] + ' acquired ' + points[name] + ' points and earned 10');
//         }
//     }

// }

//VER_2
// function Grades(points){
//     var grade = 0;
//         if(points <= 50 ){
//             grade = 0;
//         } else if (points > 50 && points < 61) {
//             grade = 6;
//         }else if (points > 60 && points < 71) {
//             grade = 7;
//         }else if (points > 70 && points < 81) {
//             grade = 8;
//         }else if (points > 80 && points < 91) {
//             grade = 9;
//         }else if (points > 90 && points <= 100) {
//             grade = 10;
//         }
//     return grade;

// }
// function nameGrades(names, points){
//     for(name in names){
//         if(Grades(points[name]) == 0 ){

//             console.log(names[name] + ' acquired ' +  points[name] + ' points and failed to complete the exam.');

//         } else {

//             console.log(names[name] + ' acquired ' + points[name] + ' points and earned ' + Grades(points[name]));
//         }
//     }

// }


// var names = [ 'Micahel', 'Anne', 'Frank', 'Joe' ,'John', 'David', 'Mark', 'Bill' ];
// var points = [50, 39, 63, 72, 99, 51, 83, 59];

// nameGrades(names, points);

//4
//  function sortArray(array){
//     var newArray = [];
//     var elem = null;
//     for(var i = 1; i < array.length; i++){
//         for(var j = 0; j < i; j++){
//             if(array[i] < array[j]){
//                 elem = array[i];
//                 array[i] = array[j];
//                 array[j] = elem;
//             } 
//         }
//     }
//     for(elem in array){
//         newArray.push(array[elem]*2);
//     }
//     return newArray;
//  }
//  var array = [ 13, 11, 15, 5, 6, 1, 8, 12 ];

//  var rez = sortArray(array);
//  console.log(rez);


 //5
//  function sortArray(array){
//     var elem = null;
//     for(var i = 1; i < array.length; i++){
//         for(var j = 0; j < i; j++){
//             if(array[i] > array[j]){
//                 elem = array[i];
//                 array[i] = array[j];
//                 array[j] = elem;
//             } 
//         }
//     }
//     return array;
//  }
//  var array = [ 13, 11, 15, 5, 6, 1, 8, 12 ];

//  var rez = sortArray(array);
//  console.log(rez);

 //6

//  function evenOdd(even, odd){
//     var evenSum = 0;
//     var oddSum = 0;
//     var sum = 0;
//     for(var i = 1; i <= 1000; i++){
//         if(i % 2 == 0){
//             evenSum += i;
//         }
//     }
//     for(var i = 1; i <= 500; i++){
//         if(i % 2 != 0){
//             oddSum += i;
//         }
//     }
//     sum = (evenSum - oddSum) * 12.5;

//     return sum;
//  }

// var even = 1000;
// var odd = 500;
// console.log(evenOdd(even, odd));

//7

// function letterApp(a){
//     var newString = '';
//     for(var i = 0; i < a.length; i++){
//         if(a[i].length > 1 ){
//             newString += a[i][0] + a[i][1];
//         }
//     }

//     return newString;
// }

// var array = [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ];

// var rez = letterApp(array);
// console.log(rez);


//8

// function revString(string){
//     var newString = '';
//     for(var i = string.length-1; i >= 0; i--){
//         newString += string[i];
//     }

//     return newString;
// }

// var a = 'Belgrade Institute of Technology';
// var rez = revString(a);
// console.log(rez);

//9




//10

// function checkPrime(number){
//     if(number == 2 || number == 3 || number == 5){
//         return true;
//     }
//     if(number > 1 && number % 2 != 0 && number % 3 != 0 && number % 5 != 0){
//         return true;
    
//     } else{
    
//         return false;
//     }
// }

// var number = 89;
// var rez = checkPrime(number);
// console.log(rez);


//11



//12
