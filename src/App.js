import React, { useState } from 'react';
import PokemonList from './PokemonList';
import PokemoSearch from './components/PokemonSearch';

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 to-blue-400 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Pokédex</h1>
      <PokemoSearch onSearch={setQuery} />
      <PokemonList query={query} />
    </div>
  );
}

export default App;
