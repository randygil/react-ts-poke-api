import { ChangeEvent, useState } from "react";
import { findPokemon } from "./PokemonService";
import { IPokemonData } from "./types";

const Component = () => {
  const [search, setSearch] = useState("");
  const [pokemonData, setPokemonData] = useState<IPokemonData | undefined>(
    undefined
  );
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const searchPokemon = async () => {
    const pokemonData = await findPokemon(search);
    setPokemonData(pokemonData);
  };
  return (
    <div>
      <h1>POKE API</h1>
      <input type="text" onChange={handleSearchChange} />
      <button onClick={searchPokemon}>Buscar</button>
      {pokemonData ? (
        <div>
          <h3>{pokemonData.name.toUpperCase()}</h3>
          <img src={pokemonData.sprite_img} alt="" />

          {pokemonData.stats.map((stat) => {
            return (
              <p>
                {stat.name}: {stat.stat}
              </p>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Component;
