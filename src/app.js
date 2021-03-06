//require database connection. don't need to run function as database connection is set to remain open.
require("./db/connection")

const yargs = require("yargs");

const { addMovie, listMovies, updateMovie, deleteMovie, searchTitle, searchActor, searchGenre, searchAll, updateMovieMany, updateMovieVariable } = require("./movie/movieMethods");

const app = async (args) => {
    switch (process.argv[2]){
        case "add":
            await addMovie({ title:args.title, actor: args.actor, genre: args.genre, rating: args.rating });
        break;
        case "add multi":
            addMovie({ title:args.title, actor:args.actor, genre:args.genre })
            await addMovie({ title:args.title2, actor:args.actor2, genre:args.genre2 })
        break;
        case "list":
            listMovies();
        break;
        case "update":
            await updateMovie({ title:args.title, newTitle:args.newTitle } )
        break;
        case "update many":
            await updateMovieMany({ actor:args.actor, newActor:args.newActor } )
        break;
        case "update variable":
            await updateMovieVariable({ key:args.key, value:args.value, newKey:args.newKey, newValue:args.newValue })
        break;
        case "delete":
            await deleteMovie({ title:args.title })
        break;
        case "search title":
            searchTitle(args.title)
        break;
        case "search actor":
            searchActor(args.actor)
        break;
        case "search genre":
            searchGenre(args.genre)
        break;
        case "search all":
            searchAll(args.search)
        break;
        default:
            console.log("Incorrect command");
        break;
    }
};

app(yargs.argv);