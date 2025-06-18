import { nowPlayingAction } from "@/core/actions/movies/now-play.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
    //queries
    const nowPlayingQuery = useQuery({ 
        queryKey:['movies','nowPlaying'], 
        queryFn: nowPlayingAction,
        //queryFn: () => nowPlayingAction (12),  si se requiere mandar argumentos
        staleTime: 1000 * 60 * 60 * 24  //para mantener la consujlta fresca por 24 horas
    });

    return {
        nowPlayingQuery,
    };
};