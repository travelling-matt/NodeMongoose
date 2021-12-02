const Movie = require("./movieModels")

exports.addMovie = async (movieObj) => {
    try {
        const movie = await new Movie(movieObj);
        await movie.save();
        console.log(`Successfully added ${movie.title}`)
    }
    catch (error){
        console.log(error);
    }
};

exports.listMovies = async () => {
    try {
        console.log(await Movie.find({})); //when using .find method need empty object inside brackets
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async (movieObj) => {
    try{
        await Movie.updateOne({ 'title': movieObj.title }, { 'title': movieObj.newTitle });
        console.log()
    } catch (error){
        console.log(error);
    }
}

exports.deleteMovie = async (movieObj) => {
    try{
        await Movie.deleteOne({ 'title': movieObj.title });
        console.log(`${movieObj.title} deleted`)
    } catch (error){
        console.log(error);
    }
}