import React, { useEffect, useState } from "react";

const UnopenedPack = () => {
  const pokemonName = ["venusaur", "charizard", "blastoise"][
    Math.floor(Math.random() * 3)
  ];
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.log(error));
  }, [pokemonName]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const { name, sprites } = pokemon;
  const imageUrl = sprites.other["official-artwork"].front_default;

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
      <div className="mt-6 flex flex-row justify-center">
        <div className="basis-1/3">
          <h2 className="catch-em-all text-center text-neutral-50 text-3xl">
            Gotta catch 'em all!
          </h2>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="basis-1/3">
          <img src={imageUrl} alt={pokemon.name} className="pokemon-logo" />
        </div>
      </div>
      <div className="mt-6 flex flex-row justify-center">
        <div className="basis-1/6">
          <h3 className="bg-red-700 text-center text-neutral-50 font-bold tracking-tight">
            TRADING CARD GAME
          </h3>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="basis-1/3">
          <h3 className="mt-3 text-center text-yellow-300 text-2xl">
            11 Additional cards
          </h3>
        </div>
      </div>
    </>
  );
};

export default UnopenedPack;
