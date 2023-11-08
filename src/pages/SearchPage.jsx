import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import {PokemonCard} from '../components/PokemonCard'
import { PokemonContext } from '../context/PokemonContext';

export const SearchPage = () => {
	const location = useLocation();

	const { globalPokemons } = useContext(PokemonContext);

	const filteredPokemons = globalPokemons.filter(pokemon =>
		pokemon.name.includes(location.state.toLowerCase())
	);

	return (
		<div className='container'>
			<p className='p-search'>
				Se encontraron <span>{filteredPokemons.length}</span>{' '}
				resultados:
			</p>
			<div className='card-list-pokemon container'>
				{filteredPokemons.map(pokemon => (
					<PokemonCard pokemon={pokemon} key={pokemon.id} />
				))}
			</div>
		</div>
	);
};
