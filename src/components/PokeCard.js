import React, { useState } from 'react';

const typeColors = {
  fire: 'bg-red-500 text-red-200',
  water: 'bg-blue-500 text-blue-200',
  grass: 'bg-green-500 text-green-200',
  electric: 'bg-yellow-400 text-black',
  psychic: 'bg-pink-500 text-black',
  flying: 'bg-indigo-400 text-indigo-200',
  bug: 'bg-lime-500 text-lime-200',
  rock: 'bg-yellow-700 text-yellow-200',
  ground: 'bg-amber-700 text-amber-200',
  poison: 'bg-purple-500 text-purple-200',
  normal: 'bg-gray-400 text-gray-200',
  fighting: 'bg-orange-600 text-orange-200',
  ice: 'bg-cyan-300 text-black',
  dragon: 'bg-indigo-700 text-indigo-200',
  dark: 'bg-gray-800 text-gray-200',
  steel: 'bg-gray-500 text-gray-200',
  fairy: 'bg-pink-300 text-pink-100',
};

const PokeCard = (pokemon) => {
  console.log(pokemon)
  const [isLoaded, setIsLoaded] = useState(true);

  const handleImageLoad = () => {
    setIsLoaded(false);
  };

  return (
    <div
      key={pokemon.id}
      className='bg-white rounded-xl shadow-md overflow-hidden transition hover:scale-105'
    >
      {isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={pokemon?.image}
        alt={pokemon?.name}
        onLoad={handleImageLoad}
        className={`w-full h-48 object-cover bg-gray-50 transition-opacity duration-300 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
      />
      <div className='p-4'>
        <h2 className='text-xl font-bold capitalize'>{pokemon.name}</h2>
        <div className='flex gap-2 mt-2 flex-wrap'>
          {pokemon?.types?.map((typeObj) => {
            const type = typeObj?.type?.name;
            const color = typeColors[typeObj] || 'bg-gray-100 text-gray-800';
            return (
              <span
                key={type}
                className={`px-2 py-1 text-sm rounded-full font-medium ${color}`}
              >
                {typeObj}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default PokeCard;
