import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";

export const nowPlayingAction = async() => {

    try{
        // const {} = await movieApi.get('https://api.themoviedb.org/3/movie/now_playing')
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing')

        //console.log(data);
        //console.log(JSON.stringify(data, null, 2));

        //Para mandar argumentos
        //const movies = data.results.map( (movie) => MovieMapper.fromTheMovieDBToMmMovie(movie))
        const movies = data.results.map( MovieMapper.fromTheMovieDBToMmMovie)

        //console.log(movies);

        return movies;

    }catch(error){
        console.log(error);
        throw 'no puedo cargar las peliculas';

    }
}