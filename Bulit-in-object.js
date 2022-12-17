//1
//Write a functional expression that duplicates each element of a given array.
//Input: [2, 4, 7, 11, -2, 1]

function duplicateItem(input = []){
    var newArray = [];
    for(var i = 0; i < input.length; i++){
        newArray.push(input[i]);
        newArray.push(input[i]);
    }

    return newArray;
}

var a = [2, 4, 7, 11, -2, 1];
var rez = duplicateItem(a);
console.log(rez);

//2
//Write a functional expression that removes all duplicates in a given array.
//Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]


function uniqChar(input = []){
    var uniqueChars = [...new Set(input)];
    uniqueChars.sort(function(a, b){return a-b});
    return uniqueChars;
}
var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13, 100];
var rez = uniqChar(a);
console.log(rez);


//3
//a. Write a function that checks if a given array has odd number of elements.
//Input: [1, 2, 9, 2, 1]
//Output: true

//b. Write a function that counts the number of elements less than the middle
//element. If the given array has an even number of elements, print out an error
//message.
//Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
//Output: 4

//a

function checkOdd(input = []){
    for(var i = 0; i < input.length; i++){
        if(input[i] % 2 != 0){
            return true;
        }
        else{
            return false;
        }
    }
}

//b

function countLeeThenMiddle(input = []){
    if(input.length % 2 == 0){
        return 'Error';
    }
    var counter = 0;
    var middleNumber = input[Math.floor(input.length/2)];
    console.log(middleNumber);
    for(var i = 0; i < input.length; i++){
        if(input[i] > middleNumber){
            counter++;
        }
    }

    return counter;


}

var a = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
var rez = countLeeThenMiddle(a);
console.log(rez);

//4

//Write a function that finds the smallest element of a given array. The function should
//return an object that contains the smallest value and its last position in the array.
//Input: [1, 4, -2, 11, 8, 1, -2, 3]


function smallElement(input = []){
    var smallestEl = input[0];
    for(var i = 0; i < input.length; i++){
        if(input[i] < smallestEl){
            smallestEl = input[i]
        }
    }

    return {minValue:smallestEl, minLastIndex:input.lastIndexOf(smallestEl)};
   
}

var a = [1, 4, -2, 11, 8, 1, -2, 3];
var rez = smallElement(a);
console.log(rez);


//5
//a. Write a function that finds all the elements in a given array less than a given element.
//Input: [2, 3, 8, -2, 11, 4], 6
//Output: [2, 3, -2, 4]

function findSmallElement(input = [], ele){
    var newArray = [];
    for(var i = 0; i < input.length; i++){
        if(input[i] < ele){
            newArray.push(input[i])
        }
    }

    return newArray;
}

var a = [2, 3, 8, -2, 11, 4];
var rez = findSmallElement(a, 6);
console.log(rez);

//b. Write a function that finds all the elements in a given array that start with the “pro”
//substring. The function should be case insensitive.
//Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
//Output: [’Programming’, ‘product’]

function findString(input = [], ele){
    newArray = [];
    for(var i = 0; i < input.length; i++){
        newItem = input[i].substring(0,3).toLowerCase();
        if(newItem == ele){
            newArray.push(input[i]);
        }
    }

    return newArray;

}


var a = ['JavaScript', 'Programming', 'fun', 'product'];
var rez = findString(a, 'pro');
console.log(rez);


//c.

function findString(input = [], ele){
    newArray = [];
    for(var i = 0; i < input.length; i++){
        newItem = input[i].substring(0,3).toLowerCase();
        if(newItem == ele){
            newArray.push(input[i]);
        }
    }

    return newArray;
}

function toFindAndFilter(a, findString, ele ){
    var rez = findString(a, ele);

    return rez;
}

var a = ['JavaScript', 'Programming', 'fun', 'product'];
var rez = toFindAndFilter(a, findString, 'pro');
console.log(rez);

//6

//a. Write a list (array) of products you usually buy in the supermarket. Write a price
//and name for each product. For example,

//a

var products = [
    {name: 'apples', price: 100},
    {name: 'milk', price: 80},
    {name:'bananas', price: 160}
]

//b

function totaPrice(input = []) {
    var sum = 0;
    for(var i = 0; i < input.length; i++ ){
        var item = input[i];
        sum += item.price;
    }

    return `Total price is:${sum}`;
}

console.log(totaPrice(products));

//c

function averagePice(input = []){
    var sum = 0;
    var average = 0;
    for(var i = 0; i < input.length; i++ ){
        var item = input[i];
        sum += item.price;
    }

    average = (sum / input.length).toFixed(3);
    return `The average price is: ${average}`;
}


console.log(averagePice(products));

function mostExpensive(input = []){
    var hightPrice = 0;
    var name = '';
    for(var i = 0; i < input.length; i ++){
        item = input[i];
        if(item.price > hightPrice){
            hightPrice = item.price;
            name = item.name.toUpperCase();
        }
    }

    return `Most expensive product is ${name} with price ${hightPrice}`;
}

console.log(mostExpensive(products));


//7

//a

function checkCapitals(input = ''){
    if(input.toUpperCase()  === input ){
        return true;
    } else{
        return false;
    }
}

var a = 'JavaScript';
var b = 'java';
var c = 'JAVA'
var rez = checkCapitals(b);
console.log(rez);

//b

function checkIsNumber(input = ''){
    for(var i = 0; i < input.length; i++){
        if(!isNaN(input[i])){
            return true;
        }
    }

    return false;
}

var a = 'JavaScript';
var b = 'java3';
var c = 'JAVA'
var rez = checkIsNumber(b);
console.log(rez);

//RegEx
function checkIfDigits(input) {
    return /\d/.test(input);
}

console.log(checkIfDigits('JavaScript'));
console.log(checkIfDigits('java3'));
