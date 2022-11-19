//1

// function citatReader(citat){
//     var newCitat = '';
//     number = Math.floor(Math.random() * citat.length -1 )
//     newCitat = citat[number];
//     return newCitat;
// }
// var array = ['Citat 1', 'Citat 2', 'Citat 3', 'Citat 4', 'Citat 5', 'Citat 6'];
// var citat = citatReader(array);
// console.log(citat);

//2
// function checkYear(year){

//     if(year % 4 == 0 && year % 400 == 0 ){
//         if(year % 100 != 0){
//             return 'Godina je prestupna';
//         }

//         return 'Godina  ' + year + ' je prestupna';
//     } 

//     return 'Godina  ' + year + ' nije prestupna';

// }
// var year = 2000;
// var rez = checkYear(year);
// console.log(rez);

//3
// function samAndSugChecker(string){
//     var newString = string.replace(/\s+/g, '');
//     var samoglasnik = 0;
//     var suglasnik = 0;
//     for(char in newString){
//         if(newString[char] == 'a' || newString[char] == 'e' || newString[char] == 'i' || newString[char] == 'o' || newString[char] == 'u'){
//             samoglasnik ++;
//         } else if (newString[char] != '!' && newString[char] != '?' && newString[char] != '.' && newString[char] != ','){
//             suglasnik ++;
//         }
//     } 
//     return 'U zadatom stringu ima suglasnika: ' + suglasnik + ' a samoglasnika: ' + samoglasnik;

// }
// var array = 'Ovo je neka test recenica.';
// var rez = samAndSugChecker(array);
// console.log(rez);


//4
// function checkType(array){
//     var newArray = [];
//     for( element in array){
//         newArray.push(typeof array[element]);

//     }
//     return newArray;

// }
// var array = ['1', 1, undefined, null, false, NaN, ''];
// var rez = checkType(array);
// console.log(rez);

//5
// function noNumbeString(array){
//     var newArray = [];
//     for( element in array){
//         if(array[element].match(/\d+/g) == null  ){
//             newArray.push(array[element])
//         }
//     }
//     return newArray;

// }
// var array = ['12bb', 'pp', 'as23s', '00sd'];
// var rez = noNumbeString(array);
// console.log(rez);

//6

// function stringInfo(string){
//     var newArray = [];
//     var length = string.length;
//     var firstChar = string[0];
//     var lastChar = string[string.length-1];
//     var repitetChar ;
//     var middleChar ;
//     var indexRep;
//     var secChar = string[1];
//     var num = parseInt(string.length/2)
//     if(length % 2 != 0){
//         middleChar = string[num];
//     } else{
//         middleChar = string[num-1] + string[num];
//     }

//     for(item in string){
//         if(string[item] == secChar){
//             indexRep = item;
//         } else{
//             indexRep = 'not found';
//         }
//     }
//     newArray.push(length, firstChar, lastChar, middleChar, indexRep);

//     return newArray;

// }

// //var string = 'Computer';
// var string = 'Science';
// var rez = stringInfo(string);
// console.log(rez);



//7
// function nonRepitedElement(array){
//     var newArray = [];
//     var count = 0;
//     for(var i = 0; i < array.length; i++){
//         for(var j = 0; j < array.length; j++ ){
        
//             if(array[i] == array[j] && i != j){
//                 count ++;
//                 console.log(array[i], j)
//             }
//         }
        
//         if(count == 0){
//             newArray.push(array[i]);
//         }
//         count = 0;
//     }

//     return newArray;
// }


// var array = [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8];
// var rez = nonRepitedElement(array);
// console.log(rez);


//8

// function arrayDevider(array, n){
//     var newArray = [];
//     for(var i = 0; i < array.length; i += n){
//         newArray.push(array.slice(i, i + n));
//     }

//     return newArray;
// }

// var array = [2, 3, 4, 5, 6, 7];
// var rez = arrayDevider(array, 3);
// console.log(rez);
