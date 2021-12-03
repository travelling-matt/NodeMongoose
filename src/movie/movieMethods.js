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
};

exports.deleteMovie = async (movieObj) => {
    try{
        await Movie.deleteOne({ 'title': movieObj.title });
        console.log(`${movieObj.title} deleted`)
    } catch (error){
        console.log(error);
    }
},

exports.searchTitle = async (movieObj) => {
    try{
        const result = await Movie.find({ 'title': movieObj });
        console.log(result)
    } catch (error){
        console.log(error);
    }
};

exports.searchActor = async (movieObj) => {
    try{
        const result = await Movie.find({ 'actor': movieObj });
        console.log(result)
    } catch (error){
        console.log(error);
    }
};

exports.searchGenre = async (movieObj) => {
    try{
        const result = await Movie.find({ 'genre': movieObj });
        console.log(result)
    } catch (error){
        console.log(error);
    }
};

exports.searchAll = async (movieObj) => {
    try {
        const result = await Movie.find({ $or: [{ 'title': movieObj }, { 'actor': movieObj}, { 'genre': movieObj}] });
        console.log(result)
    } catch (error){
        console.log(error);
    }
}
