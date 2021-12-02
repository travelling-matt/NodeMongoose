//require database connection. don't need to run function as database connection is set to remain open.
require("./db/connection")

const yargs = require("yargs");

const { addMovie, listMovies } = require("./movie/movieMethods");

const app = async (args) => {
    switch (process.argv[2]){
        case "add":
            addMovie({ title:args.title, actor: args.actor, genre: args.genre });
        break;
        case "list":
            listMovies();
        break;
        default:
            console.log("Incorrect command");
        break;
    }
};

app(yargs.argv);