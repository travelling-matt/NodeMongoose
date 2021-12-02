//require database connection. don't need to run function as database connection is set to remain open.
require("./db/connection")

const yargs = require("yargs");

const { addMovie, listMovies, updateMovie } = require("./movie/movieMethods");

const app = async (args) => {
    switch (process.argv[2]){
        case "add":
            await addMovie({ title:args.title, actor: args.actor, genre: args.genre });
            listMovies();
        break;
        case "list":
            listMovies();
        break;
        case "add multi":
            addMovie({ title:args.title, actor:args.actor, genre:args.genre })
            await addMovie({ title:args.title2, actor:args.actor2, genre:args.genre2 })
            listMovies();
        break;
        case "update":
            await updateMovie({ title:args.title, newTitle:args.newTitle } )
            listMovies();
        break;
        default:
            console.log("Incorrect command");
        break;
    }
};

app(yargs.argv);