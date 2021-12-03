const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    actor: {
        type: String,
    },
    genre: {
        type: String,
    },
    rating: {
        type: Number,
        min: [1, 'Score too low, must be between 1-10'],
        max: [10, 'Score too high. Must be between 1-10']
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;