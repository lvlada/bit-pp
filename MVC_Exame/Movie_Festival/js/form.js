

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
    var length = Number($('#lengthMovie').val());
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
    constructor(date){
        this.date = date;
        this.movieNumber = allMovies.length;
        this.movies = [];
        this.duration = 0;
    }

    getInfo(){
        if(this.movies.length == 0){
            return `${this.date}, program, duration: TBA` ; 
        } else{
            var movieDuration = 0;
            this.movies.forEach(item=> { movieDuration += item.length })
            var description = this.movies.length == 1? 'movie': 'movies';
            return `${this.date}, ${this.movies.length} ${description}, duration: ${movieDuration}` ;
        }
       
    }

    addMovie(movie) {
        this.movies.push(movie);
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
    var selMovie = $('#selectMovie option:selected').text();
    console.log(selMovie);
    var programOption = $('#selectProgram option:selected');
    var programSelected = programOption.text();
    var program;
    allPrograms.forEach(item=> {
        var info = item.getInfo();
        if(info == programSelected) {
            program = item;
        }
    });

    var movie;
    allMovies.forEach(item=> {
        if(item.title == selMovie) {
            movie = item;
        }
    })

    if(program) {
        program.addMovie(movie);
        var list =  $('.program-list ul li');
        for(let i = 0; i< list.length;i++) {
            if($(list[i]).text() == programSelected) {
                var info = program.getInfo();
                $(list[i]).text(info);
                programOption.text(info);
            }
        }

       $('#selectMovie').val(0);
       $('#selectProgram').val(0);
    }


    return selMovie;
}