'stric mode';

(function(){

    function Genre(name){
        this.name = name,
        this.getData = function(){
            var genShort= `${this.name[0].toUpperCase()}${this.name[this.name.length-1].toUpperCase()}`;
            return genShort;
        }
    }

    function Movie(title, genre, length){
        this.title = title,
        this.genre = new Genre(genre),
        this.length = length,
        this.getData = function(){
            newMovie = `${this.title}, ${this.length}min, ${this.genre.getData()}`;
            return newMovie;
        }

    }

    function Program(date, movie){
        this.date = new Date(date),
        this.movies = [],
        this.totalMovievs = this.movies.length,
        this.addMovie = function(movie){
            var addNewMovie = movie.getData();
            this.movies.push(addNewMovie);
        },

        this.getData = function(){
            //return a formatted string of all data related to the program


        }
    }

    function Festival(name){
        this.name = name,
        this.programs = [],
        this.moviePrograms = this.programs.length,
        this.addProgram = function(program){
            var newProgram = program.movies;
            this.programs.push(newProgram);
        }
    }



    //create new movie

    var movie1 = new Movie('Star Wars I','Action', 120 );
    var movie2 = new Movie('Dracula','Horor', 100 );
    var movie3 = new Movie('Rambo','Action', 90 );
    var movie4 = new Movie('Titanic','Drama', 70 );

    console.log('Movies----------------------');
    console.log(movie1.getData());
    console.log(movie2.getData());
    console.log(movie3.getData());
    console.log(movie4.getData());


    //Program

    var program1 = new Program();
    program1.addMovie(movie1);
    program1.addMovie(movie2);

    var program2 = new Program();
    program2.addMovie(movie3);
    program2.addMovie(movie4);

    console.log('Programs--------------------');
    console.log(program1.movies);
    console.log(program2.movies);
    


    //Festival

    var festival = new Festival();
    festival.addProgram(program1);
    festival.addProgram(program2);

    console.log('Festival--------------------');
    console.log(festival.programs);


})();