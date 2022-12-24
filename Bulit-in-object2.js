//1

function revNumber(num){
    var num2 = parseFloat(num.toString().split('').reverse().join(''));
    return num2;
}

var num = 12345;
var rez = revNumber(num);
console.log(rez);


//2

function revString(name){
    var name2 = name.toLowerCase().split('').sort().join('');
    return name2;
}

var name = 'Webmaster'
var rez = revString(name);
console.log(rez);


//3
function alphaWords(word){
    var word2 = word.split(' ');
    var newSgtring = '';
    for(item in word2){
        var newItem = word2[item].split('').sort().join('');
        word2[item] = newItem;
        newSgtring += word2[item] + ' ';
    }
    return newSgtring;
}


var word = 'Republic Of Serbia';
var rez = alphaWords(word);
console.log(rez);


//4

function stringArray(name){
    var newName2 = name.split(' ');
    return newName2;
}

var newName = 'John Snow';
var rez = stringArray(newName);
console.log(rez);

//5

function abbName(name){
    var newName2 = name.split(' ');
    newName2[1] = newName2[1].substring(0,1) + '.';
    //newName2[1] = newName2[1][0] + '.';
    newName2 = newName2.join(' ');
    return newName2;
}

var newName = 'John Snow';
var rez = abbName(newName);
console.log(rez);


//6

function replacChar(string, empty, side){
    var rez = '';
    if(side == 'l'){
        rez = empty.slice(0,empty-string.length) +  string;
        return rez;
    }

    if(side == 'r'){
        rez = string + empty.slice(0,empty-string.length);
        return rez;
    }

}

var empty = '00000000'
var a = '123';
var side = 'l';
var rez = replacChar(a, empty, side);
console.log(rez);


//7

function capFirst(name){
    var newName2 = name.split(' ');
    var resWord = newName2[0].substring(1);
    var firstLetter = newName2[0].charAt(0).toUpperCase();
    var rez = firstLetter + resWord;
    newName2[0] = rez;

    return newName2.join(' ');;
}

var newName = 'js string exercises';
var rez = capFirst(newName);
console.log(rez);


//8

function hideEmail(email){
    var newEmail = email.split('@');
    console.log(newEmail);
    newEmail[0] = newEmail[0].substring(0, newEmail[0].length/2) + '...@';
    return newEmail.join('');
}

var email = 'somerandomaddress@example.com';
var rez = hideEmail(email);
console.log(rez);

//9

function swapLetter(letter = ''){
    var newString = '';
    for(item in letter){
        if(letter[item] == ' '){
            newString += ' ';
        }
        if(UPPER.includes(letter[item])){
            newString += letter[item].toLowerCase();
        }
        if(LOWER.includes(letter[item])){
            newString += letter[item].toUpperCase();
        }
    }

    return newString;
}


var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';

var letter = 'The Quick Brown Fox';
var rez = swapLetter(letter);
console.log(rez);


/////////////
function swap(str) {
    var newLetters = '';
     for (vari = 0; i < str.length; i++) {
             if (str[i] == str[i].toUpperCase()) {
                 newLetters += str[i].toLowerCase();
             } else {
                 newLetters += str[i].toUpperCase();
             }
         }
         console.log(newLetters);
         return newLetters;
     }
     console.log(swap('The Quick Brown Fox'));