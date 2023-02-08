

// create Movie class

var allMovies = [];

class Movie{
    constructor(title, length, genre ){
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    getData(){
        return `${this.title}, ${this.length}min, ${this.genre}`;
    }
}

function createMovie(){

    var name = $('#titleMovie').val();
    var length = $('#lengthMovie').val();
    var genre = $('#genreMovie').val()

    var movie = new Movie(name, length, genre);

    allMovies.push(movie);

    var newMovie = (`<li>${movie.getData()}</li>`);
    $('.movie-list ul').append(newMovie);

    var movie = $(`<option>${movie.title}</option>`)
    $('#selectMovie').append(movie);

    // cleare form
    $('#titleMovie').val('');
    $('#lengthMovie').val('');
    $('#genreMovie').val('');



    console.log(movie.getData());
    console.log(allMovies);

}



//////////////////////////////////////////////////////

var allPrograms = [];

//console.log(`Ovo je iz drugog fajla ${allMovies.movie}`);

// allMovies.forEach(function(item){
//     var movie = $(`<option>${allMovies.Movie[item].getData()}</option>`)
//     $('#selectMovie').append(movie);
// })


class Program{
    constructor(date, movieNumber = 0, duration = 0){
        this.date = date;
        this.movieNumber = movieNumber;
        this.duration = duration; //this need to changed
    }

    getInfo(){
        if(allPrograms.length == 0){
            return `${this.date}, program, duration: TBA` ; 
        } else{
            return `${this.date}, ${this.movieNumber}, duration: ${this.duration}` ;
        }
       
    }
}

function createProgram(){
    var date = $('#inputDate').val();
    var newDate = new Date(date).toLocaleDateString('de-DE');


    var newProgram = new Program(newDate);
    var program = $(`<option>${newProgram.getInfo()}</option>`)
    $('#selectProgram').append(program);

    var prog = (`<li>${newProgram.getInfo()}</li>`);
    $('.program-list ul').append(prog);

    allPrograms.push(newProgram);

    $('#inputDate').val('');

}




function addProgram(){

}