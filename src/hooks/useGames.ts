import useData from "./useData";
import { Genre } from "./useGenres";

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


const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', { params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;