
//1

// class Book{
//     constructor(title, author, copyrightDate, isbn, pages, bookCheckOut, bookDiscarded){

//         this.title = title;
//         this.author = author;
//         this.copyrightDate = copyrightDate;
//         this.isbn = isbn;
//         this.pages = pages;
//         this.bookCheckOut = bookCheckOut;
//         this.bookDiscarded = bookDiscarded;

//     }
// }

// class Manual extends Book{
//     constructor(title, author, copyrightDate, isbn, pages, bookCheckOut, bookDiscarded){
//         super(title, author, copyrightDate, isbn, pages, bookCheckOut, bookDiscarded)
//     }

//     exeData(){
//         var newDate = new Date().getFullYear();
//         var res = newDate - this.copyrightDate;
//         if(res > 4){
//             this.bookDiscarded = true;
//             return `This book is ${res} year old and it's dicarded!`;

//         } else{

//             return `This book is ${res} year old and is till for use!`;
//         }      
        
//     }
// }

// class Novel extends Book{
//     constructor(title, author, copyrightDate, isbn, pages, bookCheckOut, bookDiscarded){
//         super(title, author, copyrightDate, isbn, pages, bookCheckOut, bookDiscarded)
//     }

//     checkBookOut(){
//         this.bookCheckOut ++;
//         if(this.bookCheckOut >= 100){
//             this.bookDiscarded = true;
//         }
//         return 'Check out increased by 1';
//     }

// }

// var man = new Manual('Angular 6','Doguhan Uluca', 2018, '978-86-7310-529-1', 485, 50, false);

// console.log(man);
// console.log(man.exeData());
// console.log(man);


// var nov = new Novel('Silmarilion','Dz.R.R. Tolkin', 2019, '978-86-6035-647-7', 425, 5, false);

// console.log(nov);
// console.log(nov.checkBookOut());
// console.log(nov);




//2

class StackCalc{
    constructor(instruction){
        this.instruction = instruction.split(' ');
        this.numbers = [];
        this.operation = [];
        this.result = 0;

        for(var i = 0; i < this.instruction.length; i++){
            if(isNaN(this.instruction[i])){
                this.operation.push(this.instruction[i])
            } else {
                this.numbers.push(this.instruction[i]);
            }
        }
        console.log(this.numbers);
        console.log(this.operation);

        for(var ope in this.operation){
            if(this.operation[ope] == '+'){
                this.add();
            } else if(this.operation[ope] == '-'){
                this.substract();
            } else if(this.operation[ope] == '*'){
                this.multiply();
            } else if(this.operation[ope] == '/'){
                this.divide();
            } else if(this.operation[ope] == 'DUP'){
                this.dup();
            }
        }
        if(this.numbers.length == 1){
            this.result = Number(this.numbers.pop());
        }
    }

    add(){
        var suma = 0;
        var a = Number(this.numbers.pop());
        var b = Number(this.numbers.pop());
        suma = a + b;
        this.numbers.push(suma);
    }
    substract(){
        var suma = 0;
        var a = Number(this.numbers.pop());
        var b = Number(this.numbers.pop());
        if( a > b){
            suma = a - b;
        } else{
            suma = b - a;
        }
        this.numbers.push(suma);
    }
    multiply(){
        var suma = 0;
        var a = Number(this.numbers.pop());
        var b = Number(this.numbers.pop());
        suma = a * b;
        this.numbers.push(suma);
    }
    divide(){
        var suma = 0;
        var a = Number(this.numbers.pop());
        var b = Number(this.numbers.pop());
        if( a > b){
            suma = a / b;
        } else{
            suma = b / a;
        }
        this.numbers.push(suma);
    }

    dup(){
        var a = this.numbers.pop();
        this.numbers.push(a);
        this.numbers.push(a);
    }

    getInfoRes(){
        return `Final result is: ${this.result}`;
    }

}

var calc = new StackCalc('6 5 5 7 * - /');
var calc2 = new StackCalc('3 DUP +');
console.log(calc.getInfoRes());
console.log(calc2.getInfoRes());

