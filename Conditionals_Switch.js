//1 and 2
// var day = 2;
// var res = '';

// switch(day){
//     case 1:
//         res = 'Monday';
//         break;
//     case 2:
//         res = 'Tuesday';
//         break;
//     case 3:
//         res = 'Wednesday';
//         break
//     case 4:
//         res = 'Thursday';
//         break;
//     case 5:
//         res = 'Friday';
//         break;
//     case 6:
//         res = 'Saturday';
//         break;
//     case 7:
//         res = 'Sunday';
//         break
//     default:
//         res = 'Input must be a number between 1 and 7.';
//         break;

// }
// console.log(res);

//3
// var day = 7;
// var res = '';

// switch(day){
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         res = 'It\'s weekday.';
//         break
//     case 6:
//     case 7:
//         res = 'It\'s weekend.';
//         break
//     default:
//         res = 'Input must be a number between 1 and 7.';
//         break;

// }
// console.log(res);

//4

// var day = 1;
// var res = '';


// switch(day){
//     case 1:
//         res = 'January';
//         break;
//     case 2:
//         res = 'February';
//         break;
//     case 3:
//         res = 'March';
//         break
//     case 4:
//         res = 'April';
//         break;
//     case 5:
//         res = 'May';
//         break;
//     case 6:
//         res = 'June';
//         break;
//     case 7:
//         res = 'July';
//         break
//     case 8:
//         res = 'August';
//         break
//     case 9:
//         res = 'September';
//         break
//     case 10:
//         res = 'October';
//         break
//     case 11:
//         res = 'November';
//         break
//     case 12:
//         res = 'December';
//         break
//     default:
//         res = 'Input must be a number between 1 and 12.';
//         break;

// }
// console.log(res);

//5

// var day = 1;
// var res = '';


// switch(day){
//     case 12:
//     case 1:
//     case 2:
//         res = 'Winter';
//         break;
//     case 3:
//     case 4:
//     case 5:
//         res = 'Spring';
//         break;
//     case 6:
//     case 7:
//     case 8:
//         res = 'Summer';
//         break
//     case 9:
//     case 10:
//     case 11:
//         res = 'Autumn';
//         break
//     default:
//         res = 'Input must be a number between 1 and 12.';
//         break;

// }
// console.log(res);


//6

// var letter = 'A';
// var res = '';


// switch(letter){
//     case 'A':
//         res = 'Good job!';
//         break;
//     case 'B':
//         res = 'Pretty good!';
//         break;
//     case 'C':
//         res = 'Passed!';
//         break;
//     case 'D':
//         res = 'Not so good!';
//         break;
//     case 'F':
//         res = 'Failed!';
//         break;
//     default:
//         res = 'Unknown grade!';
//         break;

// }
// console.log(res);

//7

// var city = 'Moskva';
// var res = '';


// switch(city){
//     case 'Beograd':
//     case 'Novi Sad':
//     case 'Zrenjanin':
//     case 'Subotica':
//     case 'Nis':
//         res = 'Srbija';
//         break;
//     case 'Vienna':
//     case 'Linz':
//     case 'Graz':
//     case 'Salzburg':
//     case 'Baden':
//         res = 'Austrija';
//         break;
//     case 'Paris':
//     case 'Nice':
//     case 'Lyon':
//     case 'Lille':
//     case 'Marseille':
//         res = 'Francuska';
//         break;
//     case 'Keln':
//     case 'Berlin':
//     case 'Hamburg':
//     case 'Frankfurt':
//     case 'Dresden':
//         res = 'Nemacka';
//         break;
//     case 'Moskva':
//     case 'Kazan':
//     case 'Sankt Peterburg':
//     case 'Samara':
//     case 'Omska':
//         res = 'Rusija';
//         break;
//     default:
//         res = 'Please choose a diffrent city!';
//         break;

// }
// console.log(res);


//8


var operation = '/';
var a = 0;
var b = 0;
var res = '';


switch(operation){
    case '-':
        res = a -b;
        break;
    case '+':
        res = a + b;
        break;
    case '/':
        res = a / b;
        break;
    case '*':
        res = a * b;
        break;
    default:
        res = 'You must insert right operation: + , - , /, *';
        break;

}
if (res == Infinity) {
    console.log('Number must be different from 0!');
} else if (isNaN(res)){
    console.log('Number must be different from 0!');
} else{
    console.log(res);
}



