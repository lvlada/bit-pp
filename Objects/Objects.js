
//1
// var product = {
//     'product' : 'Milk',
//     'quantity' : 2,
//     'price' : 1.5
// }

// function calProduct(item){
//     var newPrice = item.quantity * item.price
//     return newPrice;
// }

// var rez = calProduct(product);
// console.log(rez);

//2
// function mostExpensive(product){
//     var newName = product[0].name;
//     var newPrice = product[0].price;

//     for(item in product){
//         if(product[item].price > newPrice ){
//             newPrice = product[item].price;
//             newName = product[item].name;
//         }
//     }
//     return `The most expensive on is the ${newName}`;
// }

// var product = [
//     {
//         'name' : 'Diamond Earings',
//         'price' : 980
//     },
//     {
//         'name' : 'Diamond finger',
//         'price' : 430
//     },
//     {
//         'name' : 'Diamond watch',
//         'price' : 300
//     }
// ]

// var rez = mostExpensive(product);
// console.log(rez);


//3
// function mapLetter(letter){
//     var rez = {};
//     for(var i =0; i < letter.length; i++){
//         rez[letter[i]] = [];
//         for(var j = 0; j < letter.length; j++){
//             if(letter[i] == letter[j]){
//                 rez[letter[i]].push(j);
//             }
//         }
//     }

//     return rez;
// }

// var letter = 'doddo';

// var rez = mapLetter(letter);
// console.log(rez);

//4

// function determineWhoCursedTheMost(cursed){
//     var me = 0;
//     var spouse = 0;

//     for(item in cursed){
//         me = me + cursed[item].me
//         spouse = spouse + cursed[item].spouse
//     }
//     if(me > spouse){
//         return 'ME!'
//     } else if(me < spouse){
//         return 'SPOUSE!'
//     } else{
//         return 'DRAW!'
//     }

// }

// var cursed = [
//     {me: 10, spouse: 5},  
//     {me: 5, spouse: 10},   
//     {me: 20, spouse: 10}
// ]
    
// var rez = determineWhoCursedTheMost(cursed);
// console.log(rez);

//5

// function valToHex(value){
//     var hex = value.toString(16);
//     return hex;
// }

// function rgbToHex(rgb){
//     var hex = '#'+ valToHex(rgb.red) + valToHex(rgb.green) + valToHex(rgb.blue);
//     return hex
// }

// var rgb = {red: 50, green: 168,  blue: 52};

// var rez = rgbToHex(rgb);
// console.log(rez);

//6

function makeChanges(change){
    var rez = {};
    var temp = 0;
   if(change > quarter){
            temp = change - quarter;
            rez[q] = 1;
        }
    }
    
var penny = 0.01;
var nickle = 0.05;
var dime = 0.10;
var quarter = 0.25;
var change = 47;

var rez = makeChanges(change);
console.log(rez);
