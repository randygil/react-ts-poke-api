import axios from "../http-common";
import { IPokemonData } from "./types";
export const findPokemon = async (
  pokemonName: string
): Promise<IPokemonData | undefined> => {
  try {
    const res = await axios.get(`/pokemon/${pokemonName}`);

    const {
      name,
      stats,
      sprites: { front_default }
    } = res.data;
    const pokemonStats = stats.map((stat: any) => {
      return {
        name: stat.stat.name,
        stat: stat.base_stat
      };
    });
    return {
      name,
      sprite_img: front_default,
      stats: pokemonStats
    };
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
};
