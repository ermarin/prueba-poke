import React, { useEffect, useRef, useState } from 'react';
import Skeleton from './components/Skeleton';
import PokeCard from './components/PokeCard';

function PokemonList({query}) {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  const [loading, setLoading] = useState(false);

  const didInitialFetch = useRef(false);

  async function fetchData() {
    if (!nextUrl || loading) return;
    setLoading(true);
    try {
      const res = await fetch(nextUrl);
      const data = await res.json();
      const detailedData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const detail = await res.json();
          return {
            name: detail.name,
            image: detail.sprites.other['official-artwork'].front_default,
            types: detail.types.map((t) => t.type.name),
          };
        })
      );
      setPokemons((prev) => [...prev, ...detailedData]);
      setNextUrl(data.next);
    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!didInitialFetch.current) {
      fetchData();
      didInitialFetch.current = true;
    }
  }, []);

  const filteredPokemons = pokemons.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );


  return (
    <div className='max-w-4xl mt-10 mx-auto p-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {filteredPokemons.length > 0 ? (
        filteredPokemons?.map((pokemon) => (<PokeCard key={pokemon.id} {...pokemon} />)
        )
      ) : (
        <p className='text-gray-700 text-4xl col-span-3 font-semibold'>No existe un Pokemon con este nombre</p>
      )}

      {loading && (
        Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
      )}

      {!loading && nextUrl && (
        <div className="mt-6 text-center col-span-full">
          <button
            onClick={fetchData}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Cargas más...
          </button>
        </div>
      )}

      {!nextUrl && !loading && (
        <p className="mt-6 text-center text-gray-500">No hay más Pokemon's para mostrar.</p>
      )}
    </div>
  );
}

export default PokemonList;
