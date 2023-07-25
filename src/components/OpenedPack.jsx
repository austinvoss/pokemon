import React, { useEffect, useState } from "react";
import Card from "./Card";

const OpenedPack = () => {
  const [pokemonNames, setPokemonNames] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/generation/generation-i/")
      .then((response) => response.json())
      .then((data) => {
        const speciesNames = data.pokemon_species.map(
          (species) => species.name
        );
        const randomNames = getRandomNames(speciesNames, 11);
        setPokemonNames(randomNames);
      })
      .catch((error) => console.log(error));
  }, []);

  const getRandomNames = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <>
      <div className="mt-12 flex flex-row justify-center">
        <div className="basis-1/3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg"
            alt="Pokemon Logo"
            className="pokemon-logo mx-auto"
          />
        </div>
      </div>
      {pokemonNames.map((name, index) => (
        <div key={index} className="mt-12 flex flex-row justify-center">
          <div className="basis-1/3">
            <Card pokemonName={name} />
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default OpenedPack;
