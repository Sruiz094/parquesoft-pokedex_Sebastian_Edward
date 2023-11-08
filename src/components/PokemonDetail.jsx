// eslint-disable-next-line no-unused-vars
import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Loader } from "./Loader";
import { PokemonContext } from '../context/PokemonContext';

export default function PokemonDetail() {
  const { pokemonId } = useParams();
  const { pokemons } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const pokemonData = pokemons.find(p => p.id === Number(pokemonId));
    setPokemon(pokemonData);
    setLoading(false);
  }, [pokemons, pokemonId]);

  if (loading) {
    return <Loader />;
  }

  const imgUrl = pokemon.sprites.other["official-artwork"].front_default;

  
}
