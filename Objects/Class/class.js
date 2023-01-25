

//Employees and Managers

class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    getFullName(){
        return `${this.surname} ${this.name}`;
    }
}


class Employee extends Person{
    constructor(name, surname, job, salary){
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }

    getData(){
        return `${super.getFullName()} ${this.salary}`;
    }
    getSalary(){
        return `${this.salary}`;
    }
    increaseSalary(){
        var newSalary = Number(this.salary * 1.1).toFixed(0);
        return `New salary with 10% increase is ${newSalary}$`;
    }
}

class Developer extends Employee{
    constructor(name, surname, job, salary, specialization){
        super(name, surname, job, salary);
        this.specialization = specialization;
    }
    getSpecialization(){
        return `${super.getFullName()} ${this.job}`;
    }
}


var osoba = new Person('Vladimir', 'Lukic');
var zaposleni = new Employee('Vladimir', 'Lukic', 'developer', 3000);
var developer = new Developer('Vladimir', 'Lukic', 'developer', 3500);

console.log(osoba.getFullName());
console.log(zaposleni.getData());
console.log(zaposleni.increaseSalary());
console.log(developer.getSpecialization());