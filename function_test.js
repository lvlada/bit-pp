//1
// var a = [3,4,1,2];

// function addOne(array = []){
//     for (var i = 0; i < array.length; i++){
//         array[i] += 1;
//     }
// }

// addOne(a);

// console.log(a);

//2

// function f(){
//     return function (a, b){
//         return a+b
//     }
// }

// var res = f();
// console.log(res);


//3
// console.log(sum(2,3));

// function sum(x,y){
//     return x+y+1;
// }

//4

// function f(){
//     return function (a, b){
//         return a+b
//     }
// }

// var res = f()(1, 3);
// console.log(res);


//5

// console.log(mul(2,3));

// var mul = function (x,y){
//     return x*y;
// }

//console.log(mul(2,3));


//6

// var a = 10;

// function f(a,b){
//     a++;
//     b--;
//     console.log(a,b);
// }

// f(a,2);

// console.log(a)

//7

// (function(a){
//     console.log(a);
// })('JS');



//8
// function cal(a,b){
//     var rb = b % 10;
//     var ra = a % 10;

//     a = a - ra + rb;
//     b = b - rb + ra;
//     console.log(a, b)
// }

// cal(123, 45);

//9
// 'use strict';
// var x = 1;

// function f(){
//     return x * 2;
// }

// f(4);
// console.log(x);

//10


// (function(a,b, condition){
//     if(condition(a,b)){
//         console.log(a);
//     } else{
//         console.log(b);
//     }
// })(2,6,function (x,y){
//     return x > y;
// });


//11
// var a, b
// function cal(a,b){
//     var rb = b % 10;
//     var ra = a % 10;

//     a = a - ra + rb;
//     b = b - rb + ra;
// }

// cal(123, 45);
// console.log(a,b);


//12

// function transform (a,b,f){
//     var res;
//     res = f(a) + f(b);
//     console.log(res);
// }

// function double(x){
//     return 2 * x;
// }

// transform(2,4, double);


//13
// var res;

// function add(a,b){
//     return a+b;
// }

// res = add(2);

// console.log(res);


//14
//transform(2,4, square);

// function transform(a,b,f){
//     var result;
//     result = f(a) + f(b);
//     console.log(result);

// }

// var square = function(x){
//     return x*x;
// }


//15
// console.log(console.log('js'));


//16

// var r;
// (function(a,b){
//     return a + b;
// })(2,11);
// console.log(r);



//17

// 'use strict';
// var x = 1;

// function f(){
//     y = 3;
//     return x * y;
// }

// f(4);
// console.log(x);

//18


// var x = 12;

// function f(){
//     x = 15;
// }

// f;
// console.log(x);

//19

// var a = 12;
// var b = 3;
// var res;

// function add(a,b){
//     return a + b;
// }

// res = add();

// console.log(res);

//20

// var res;

// function add(a,b){
//     return a + b;
// }

// res = add(2);

// console.log(res);


//21

// console.log(res);
// var res = 5;


//22

// var a = 20;

// function f(n){
//     var res = a + n;
//     var a = 30;
//     return res;
// }

// console.log(f(5));

//23


// function transform (a,b,f){
//     var res;
//     res = f(a) + f(b);
//     console.log(res);
// }


// transform(2,4, function(x){return x +1});

//24

// var r;
// r= (function(a, b){
//     return a + b;
// })(2,11);
// console.log(r);

//25

// function out(x){

//     function inner(y){
//         return y + 1;
//     }

//     return x + inner(x);
// }

// var res = out(5);

// console.log(res);


//26

// var x =12;

// function f(){
//     x = 15;
// }

// f();

// console.log(x);

//27


// var a =20;

// function f(n){
//     var res = a + n;
//     a + 30;
//     return res
// }

// console.log(f(5));


//28

// function f(a, b){
//     var result = a + b;
// }

// console.log(f(2,1));
