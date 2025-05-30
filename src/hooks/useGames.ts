import { GameQuery } from "@/App";
import useData from "./useData";

export interface ParentPlatform{
    id: number;
    name: string;
    slug: string;
}

export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform : ParentPlatform }[];
    metacritic: number;
}


const useGames = (gameQuery: GameQuery) => 
    useData<Game>(
        '/games', 
        { params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.ordering, search: gameQuery.search}}, 
        [gameQuery]);

export default useGames;