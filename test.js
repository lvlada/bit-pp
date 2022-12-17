// function f(a,b){
//     return 1+ a+b;
// }
//  var rezult;
//  rezult = f(4, 5, 32, 11);
//  console.log(rezult);

//  var s = 'ab34abc';
//  console.log(parseInt(s));


//  console.log(true && false);


//  var num = [4, 5, 12, 9];
//  console.log(num.length);

// var a = 10;
// var b = 12;
// var temp;

// temp = a;
// a = b;
// b = temp;
// console.log(a,b);

// for (var i = 0; i < 5;){
//     console.log('*')
// }


// var sum = 0;
// for (var i = 0; i < 10; i++){
//     if(i % 3 == 0){
//         sum++;
//     }
//     if(i == 8){
//         break;
//     }
// }

// console.log(sum);

// function mul(a,b){
//     var rezult;

//     rezult = a * b;

//     return rezult;
// }
//  var product;
//  product = mul(4);
//  console.log(product);

//  for (var i = 3; i >= 0; i--){
//         console.log(i)
//     }


// function mul(a, b){
//     return a+b;
// }
// var product;
// product = mul(4, 5);
// console.log(product);

// var res;
// var n = 34;
// if(n%2 == 0){
//     res = n/2;

// }else{
//     res = n*2;
// }

// console.log(res);

// var sum = 0;
//  for (var i = 4; i < 8; i=i+1){
//         sum +=i
//        console.log(sum)
//     }

// var s = 'Test';
// console.log(s[3]);

function f(a){
    for(var i = 0, j = a.length -1; i< j; i++, j--)
    {
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }

    return a;
}
console.log(f('3', 4, 22, true, -2));

// var a =[2,3,11,5,23,24];
// a.length = 2;
// console.log(a);

// var n=5;
// var sum = 0;
// var i =0;
// while(i <= n){
//     if(i %2==0){
//         sum++
//     }
//     i++
// }

// console.log(sum);



// var array=[];
// for(var i = 0; i < 4; i++){
//     array[2*i] =i;
//     array[2*i+1] = i;
// }

// console.log(array);

// console.log(parseInt('34abc'));

// var sum = 0;
// for (var i =0; i < 5; i++){
//     sum += i;
//     console.log(sum);
// }


// console.log(2+ true);

// function mul(a, b){
//     return a*b;
// }
// var product;
// product = mul(4, 5);
// console.log(product);

// var n = 23;
// n -= 2;
// console.log(n)

// var sum = 0;
// for(var i = 0; i < 10; i++){
//     if(i == 6){
//         continue;
//     }
//     if(i % 3 == 0){
//         sum ++;
//     }
// }

// console.log(sum)

// var a=[2,3,11]
// a.length = 5;
// console.log(a)

// var mes = '';
// var n = 4;

// while(n >= 0 ){
//     mes += '*';
//     n--;
// }

// console.log(mes)


// var array = [];
// for (var i = 0; i < 4; i++){
//     array[i] = 2*i;
// }
// console.log(array);

// for (var i = 1; i < 6; i++){
//    if(i ==2 || i == 4){
//         continue;
//    }
//    console.log(i);
// }

// var s = 'abc';
// console.log(s+s);

// var counter = 0
// var mes = 'JaVaScRIPT progrAMMing'
// for (var i = 1; i < mes.length; i++){
//     if(mes[i] == 'a' || mes[i] == 'A'){
//          counter++;
//     }
//  }

//  console.log(counter);

//  function f(a,b){
//     var result;
//     return result;
//     return 1+ a+b;
// }
// var s = 'coffee';
// s[6] = 'C';
//  console.log(s, s.length);

//  function sum(){
//     return arguments[0] + arguments[2];
// }
// var res;
// res = sum(2,5,11, 'abc')
//  console.log(res);


//  var res = 10;
//  console.log(++res);


// var array = [2, 15,18, -4, 2];
// var res = array[0];

// for(var i= 1; i < array.length; i++){
//     if(array[i] > res){
//         res = array[i]
//     }
// }
// console.log(res);

// var  des = 'Do the magic';
// var s = '';
// for(var i= des.length-1; i >= 0; i--){
//     s = s + des[i];
// }
// console.log(s);

// function f(a, b){
//     return a+b;
// }

// console.log(f(12));

// console.log(true || false);

// for(var i = 0; i < 10; i+=2){
//     console.log(i);
// }