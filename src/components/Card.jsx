import React, { useEffect, useState } from "react";

const Card = ({ pokemonName }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonSpeciesData, setPokemonSpeciesData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => console.log(error));

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonSpeciesData(data);
      })
      .catch((error) => console.log(error));
  }, [pokemonName]);

  const color = pokemonSpeciesData?.color?.name || "";
  const flavor_text = pokemonSpeciesData?.flavor_text_entries[0].flavor_text
    .replace(/POKéMON/g, "Pokémon")
    .replace(/\/g, " ");
  const hp = pokemonData?.stats[0]?.base_stat || "";
  const imageURL = pokemonData?.sprites.other["official-artwork"].front_default;
  const type = pokemonData?.types[0].type.name;
  const height = pokemonData?.height;
  const weight = pokemonData?.weight;

  const colorMappings = {
    yellow: "bg-yellow-600",
    blue: "bg-blue-600",
    red: "bg-red-600",
    brown: "bg-yellow-900",
    green: "bg-green-600",
    white: "bg-neutral-200",
    gray: "bg-neutral-400",
    purple: "bg-purple-600",
    black: "bg-neutral-600",
    pink: "bg-pink-600",
  };

  const tailwindColorClass = colorMappings[color] || "";

  return (
    <div
      className={`relative rounded border-8 border-yellow-300 ${tailwindColorClass} bg-auto bg-center bg-[url('/images/overlay.png')] p-6 drop-shadow-lg`}
    >
      <div className="flex flex-row justify-left items-end">
        <div className="basis-1/2">
          <h1 className="text-neutral-950 font-bold text-2xl capitalize">
            {pokemonName}
          </h1>
        </div>
        <div className="basis-1/2 text-right">
          <h1 className="text-neutral-950 text-xl">{hp} HP</h1>
        </div>
      </div>
      <div className="flex flex-row justify-items-center items-center content-center">
        <div
          className={`basis-full h-60 border-8 border-yellow-500 ${tailwindColorClass} bg-auto bg-center bg-[url('/images/galaxy.png')] drop-shadow-lg`}
        >
          {imageURL && (
            <img src={imageURL} alt={pokemonName} className="h-full mx-auto" />
          )}
        </div>
      </div>
      <div className="mt-1 flex flex-row justify-items-center items-center content-center">
        <div
          className={`basis-11/12 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-400 mx-auto`}
        >
          <p className="text-center text-xs capitalize">{`${type} Pokemon, Height: ${height}, Weight: ${weight}`}</p>
        </div>
      </div>
      <div className="mt-2 flex flex-row justify-items-center items-center content-center">
        <div className="basis-11/12 mx-auto">
          <p>{flavor_text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
