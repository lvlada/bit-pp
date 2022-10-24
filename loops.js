

// Exercises

//1 
// var sum =0;

// for (var i = 0; i <= 10; i++){
//     sum += i;
// }
// console.log('test');
// console.log(sum);

// //2
// var number = 3;
// var cube = number;

// for (var i = 0; i < 2; i++){
//     cube *= number;
// }
// console.log(cube);

//3
// var num = 6;
// var fact = 1;
// for(var i = 1; i <= num; i++){
//     fact *= i;
// }
// console.log(fact);


//4
// var number = 11;
// var evenNumbers = [];

// for (var i = 1; i <= number; i++){
//     if(i % 2 == 0){
//         evenNumbers.push(i);
//     }
// }
// console.log(evenNumbers);



//5
// var digi = '2321';
// var strinDdig = digi.split('');
// var sum = 0;
// var test = strinDdig.reduce();
// for(str in strinDdig){
//     sum += Number(strinDdig[str]);
// }
// console.log(sum);
// console.log(strinDdig);
// console.log(test);


//6
// var letter = 'Eclip542sea';
// var newLetter = letter.replace(/\d/g, '');
// console.log('There is', newLetter.length -1, 'letters in this word');


//7

// var new_array = [1, 3, 32, 'g', '$', 'h', 't', 'c', 66, 23, 'h2'];

// for(letter in new_array){
//     if(new_array[letter] == 'c'){
//         console.log('Index of letter c is : ', letter);
//     }
   
// }





// Exercises_Loops

//1
// for (var i = 1; i <= 15; i++){
//     if(i % 2 == 0 ){
//         console.log('This is number ', i, ' is even!')
//     } else{
//         console.log('This is number ', i, ' is odd!')
//     }
// }

//2
// var sum = 0;
// for(var i = 0; i < 1000; i++){
//     if( i % 3 == 0 || i % 5 == 0 ){
//         sum += i;
//     }
// }
// console.log(sum);

//3
// var numList = [1, 2, 5];
// var sum = 0;

// for (num in numList){
//     sum += numList[num];
// }
// console.log(sum);

//4
// var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];
// var newX = '';
// for (i in x){
//     newX += x[i];
// }
// console.log(newX);

//5
// var a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27]
//     ];

//     for (var x = 0; x < a.length; x++){
//         for(var i = 0; i < a[x].length; i++){
//             console.log(a[x][i]);
//         }   
//      }

//6
// var number = 20;
// var sum = 0;
// for (var i = 0; i <= number; i++){
//     sum += i * i
// }
// console.log(sum);


//7

// var grades =[80, 77, 88, 96, 68];
// var sum = 0;

// for(grade in grades){
//     sum += grades[grade];
// }
// var averageGrade = sum / grades.length;

// for(grade in grades){
//     if(grades[grade] < 60){
//         console.log('Average grade of student is: ', 'F');
//     }else if(grades[grade] < 70){
//         console.log('Average grade of student is: ', 'D');
//     }else if(grades[grade] < 80){
//         console.log('Average grade of student is: ','C');
//     }else if(grades[grade] < 90){
//         console.log('Average grade of student is: ', 'B');
//     }else if(grades[grade] <= 100){
//         console.log('Average grade of student is: ', 'F');
//     }
// }

// if(averageGrade < 60){
//     console.log('Average grade of all studens is: ', 'F');
// }else if(averageGrade < 70){
//     console.log('Average grade of all studens is: ', 'D');
// }else if(averageGrade < 80){
//     console.log('Average grade of all studens is: ','C');
// }else if(averageGrade < 90){
//     console.log('Average grade of all studens is: ', 'B');
// }else if(averageGrade <= 100){
//     console.log('Average grade of all studens is: ', 'F');
// }

//8
// for(var i = 0; i <= 100; i++ ){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log('FizzBuzz');
//     } else if(i % 3 == 0){
//         console.log('Fizz');
//     } else if (i % 5 == 0){
//         console.log('Buzz')
//     }else{
//         console.log(i);
//     }
// }





//Exercise_Loop2

//1
// var a = [5, -4.2, 3, 7];
// var e = 3;

// for (num in a){
//     if(a[num] == e){
//         console.log('Yes');
//     } 
// }

//2

// var listNum = [-3, 11, 5, 3.4, -8];
// var newList = [];

// for (num in listNum){
//     newList.push(listNum[num] *2)
// }
// console.log(newList);

//3
//  var listNum = [4, 2, 2, -1, 6];
//  var min = 0;
//  var indexNum = 0;

//  for(num in listNum){
//     if(min > listNum[num]){
//         min = listNum[num]
//         indexNum = num;
//     }
//  }

//  console.log(min, indexNum);


 //4
//  var max = 0;

//  for(num in listNum){
//     if(listNum[num] > min){
//         max = listNum[num]
//     }
//     break
//  }

//  console.log(max);

//5

// var listNum = [3, 11, -5, -3, 2];
// var posNumbers = 0

// for(num in listNum){
//     if(listNum[num] > 0 ){
//         posNumbers += listNum[num];
//     }
// }
// console.log(posNumbers);

//6
// var simeList = [2, 4, -2, 7, -2, 4, 2];
// var listControl = false;

// for (var i = 0; i < Math.round(simeList.length/2); i ++){

//     console.log(simeList[i], simeList[simeList.length -1-i])
//     if(simeList[i] == simeList[simeList.length-1-i]){
//         listControl = true;
//     } else{
//         console.log('The array is NOT symmetric.');
//         listControl = false
//         break
//     }
// }
// if(listControl){
//     console.log('The array is symmetric.');
// }

//7
// var list1 = [4, 5, 6, 2];
// var list2 = [3, 8, 11, 9];
// var list3 =[];

// for (var i = 0; i < list1.length; i ++){
//     list3.push(list1[i],list2[i]);
// }
// console.log(list3);


// //8
// var list4 =[];
// list4 = list1.concat(list2);
// console.log(list4);

//9

// var a = [4, 6, 2, 8, 2, 2];
// var e = 2;
// var newA = [];

// for(var i = 0; i < a.length; i++){
//     if(a[i] !=e){
//         newA.push(a[i]);
//     }
// }
// console.log(newA);

//10

// var a = [2, -2, 33, 12, 5, 8]
// var newE = 78;
// var pos = 3;

// a.splice(3, 0, newE)
// console.log(a);







