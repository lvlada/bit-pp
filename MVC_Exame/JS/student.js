function pajaPatak(){
    return console.log('neki test');
}




//za cuvanje

function addStudent(){
    var teh = $('#Teh');
    var grade = $('#Grade');
    var name = $('#Name');

    if(grade.val() > 5 ){
        var table = $('#input-table1');
        table.find('tbody')
            .append($(`                
            <tr>
            <td>${teh.val()} - ${name.val()}</td>
            <td>${grade.val()}</td>
          </tr>`))

          totaStudent ++;

    } else{
        var table = $('#input-table2');
        table.find('tbody')
            .append($(`                
            <tr>
            <td>${teh.val()} - ${name.val()}</td>
            <td>${grade.val()}</td>
          </tr>`))

          totaStudent ++;
    }

}