//1
// Write a function that checks if a given string contains digit 5.
// Input: “1b895abd”
// Output: true

var checkNumber = function(input, testNumber, digit){

    if(!input || input.length == 0 || typeof testNumber != 'function' || !digit ){
        return input;
    }

    for(var i = 0 ; i  < input.length; i ++){
        if(testNumber(input[i], digit)){
            return {contains: true, input: input}
        }
    }
    return false;
}

function testNumber(number, digit){
    if(number == digit){
        return true;
    }
    return false;
}

var result = checkNumber('dfaser452', testNumber, 5);
console.log(`The ${result.input} contains number ${5} : ${result.contains}`);

