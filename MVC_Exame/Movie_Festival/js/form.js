

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

    var movie = $(`<option value="${movie.length}">${movie.title}</option>`)
    $('#selectMovie').append(movie);

    // cleare form
    $('#titleMovie').val('');
    $('#lengthMovie').val('');
    $('#genreMovie').val('');

}



//////////////////////////////////////////////////////

var allPrograms = [];

class Program{
    constructor(date, duration = addProgram()){
        this.date = date;
        this.movieNumber = allMovies.length;
        this.duration = duration;
    }

    getInfo(){
        if(allPrograms.length == 0){
            return `${this.date}, program, duration: TBA` ; 
        } else{
            return `${this.date}, ${this.movieNumber}, duration: ${this.duration}` ;
        }
       
    }
}


//onclick button Create program

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
    console.log(allPrograms);

}

//onclick button Add Program
function addProgram(){
    var selMovie = $('#selectMovie').val();
    console.log(selMovie);
    return selMovie;
}