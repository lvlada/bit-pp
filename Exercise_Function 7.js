//1

// function tellFortune(child, name, location, title){
//     return 'You will be a ' + title + ' in ' + location + ', and married to ' + name + ' with ' + ' kids';
// }

// console.log(tellFortune(4, 'Jovana', 'Zrenjanin', 'freelancer'));
// console.log(tellFortune(3, 'Ivana', 'Beograd', 'zidar'));
// console.log(tellFortune(1, 'Natasa', 'Novi Sad', 'mesar'));

//2

// function calculateDogAge(age, human){
//     var newAge = 0;
//     var newHuman = 0;
//     newAge = age * 7;
//     newHuman = Math.round(human / 7, 10);
//     return 'Your doggie is ' + newAge + ' years old in dog years! You have ' + newHuman + ' dog years';
// }


// console.log(calculateDogAge(7, 49));
// console.log(calculateDogAge(3, 37));
// console.log(calculateDogAge(5, 21));

//3

// function calculateSupply(age, amount){
//     var newAge = maxAge - age;
//     var sum = 0;
//     sum = newAge * amount;
    
//     return 'You will need ' + sum + ' to last you until the rip old of ' + maxAge;
// }

// const maxAge = 100;

// console.log(calculateSupply(47, 5));
// console.log(calculateSupply(21, 3));
// console.log(calculateSupply(37, 4));

//4

// function celsiusToFahrenheit(cel){
//     var newTemp = 0;
//     newTemp = cel * 1.8 + 32;

//     return cel + 'C is ' + newTemp + 'F'
// }

// function fahrenheitToCelsius(faren){
//     var newTemp = 0;
//     newTemp = (faren - 32)/1.8;
//     farenhajt = newTemp.toFixed(5);

//     return faren + 'F is ' + farenhajt + 'C'
// }

// var cel = 100;
// var faren = 100;

// console.log(celsiusToFahrenheit(cel));
// console.log(fahrenheitToCelsius(faren));


//5 Create a function that validates a password to conform to the following rules
// ! @ # $ % ^ &amp; * ( ) + = _ - { } [ ] : ; &quot; &#39; ? &lt; &gt; , .

function passwordCheker(password){
    var special = /^[a-zA-Z0-9]*$/
    var special2 = /^[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
    if(password.length >= 6 || password.length <= 24){
        if(password.match(special2)){

                return true;

        } else{

                return 'Test1'
            }

        } else{

        return 'Test2';
    }
}   

var rez = passwordCheker('Fhg9aa@');
console.log(rez);


//6 find prime numbers

// function checkPrime(number){
//     var newArray = [];
//     for(var i = 0; i < number; i ++){
//         if(i == 2 || i == 3){
//             newArray.push(i);
           
//         } else if(i % 2 != 0 && i % 3 != 0){
//             if(i != 1){
//                 newArray.push(i);
//             }
//         } 
//     }

//     return newArray;

// }

// var rez = checkPrime(20);
// console.log(rez);

//7
// Create a function that returns an array that expands by 1 from 1 to the value of the input, and then
// reduces back to 1. Items in the arrays will be the same as the length of the arrays.

// function diamondArrays(number){
//     newArray = [];
//     for(var i = 1; i <= number; i ++){
//         for(var j = 1; j <= i; j ++)
//             newArray.push(i);
//     }   

//     for(var i = number -1; i >= 1; i --){
//         for(var j = 1; j <= i; j ++)
//             newArray.push(i);
//     } 
//     return newArray
// }

// var rez = diamondArrays(5);
// console.log(rez);







