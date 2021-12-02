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
}