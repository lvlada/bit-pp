//import {Subject} from './subject'


var passStudent = 0;
var failedeStudent = 0;
var allStudents = [];
var totaStudent = allStudents.length;



//Form

// Form validation
  // some code


    function addStudent(){
        var teh = $('#Teh').val();
        var grade = $('#Grade').val();
        var name = $('#Name').val();

        //Student array
        var student = new Object();
        student.subject = teh;
        student.name = name;
        student.grade = grade;
        allStudents.push(student);
        console.log(allStudents);


        if(student.grade > 5 ){
            var table = $('#input-table1');
            table.find('tbody')
                .append($(`                
                <tr>
                <td>${teh} - ${name}</td>
                <td>${grade}</td>
              </tr>`))
              passStudent ++;
              totaStudent ++;
    
        } else{
            var table = $('#input-table2');
            table.find('tbody')
                .append($(`                
                <tr>
                <td>${teh} - ${name}</td>
                <td>${grade}</td>
              </tr>`))
              failedeStudent ++;
              totaStudent ++;
        }

        console.log(totaStudent);
        addTotal();
        pStudent();
        fStudent();
        console.log(passStudent);
        console.log(failedeStudent);
    
    }


    function addTotal(){
        var total = $('#totalS').text(totaStudent);
        return total;
    }


    function pStudent(){
        var pass = $('#pNumber').text(passStudent);
        return pass;
    }

    function fStudent(){
        var faild = $('#fNumber').text(failedeStudent);
        return faild;
    }


    //Student
   class Student{
    constructor(name){
        this.name = name;

    }
    getStudentData(){
        return this.name;
    }
    
   }





   //Technology
   class Subject{
    constructor(subject, shortSubj){
        this.subject = subject;
        this.shortSubj = shortSubj;
    }
    getSubjectName(){
        return this.subject;
    }
    getshortSubj(){
        return this.shortSubj;
    }
}

var sub1 = new Subject('Visual Basic', 'VB');
var lista = $('#Teh')
var subject = $(`<option value="${sub1.getshortSubj()}">${sub1.getSubjectName()}</option>`);
lista.append(subject);






//Exame 
   

   class Exame{
    constructor(subject, student, grade){
        this.subject = subject;
        this.student =student;
        this.grade = grade;
    }

    getExameInfo(){
        return `${this.subject} - ${this.name}`;
    }

    hasPassed(){
        if(this.grade > 5){
            return true;

        } else{
            return false;
        }
    }
   }

   


