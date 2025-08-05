import { useEffect, useRef, useState } from 'react';

const PokemoSearch = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setInput('');
        onSearch('');
        inputRef.current?.blur(); // Optional: remove focus
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSearch]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value);
  };

  return (
    <div className="m-auto w-1/2 left-auto p-4 bg-white shadow z-10">
      <input
        type="text"
        ref={inputRef}
        value={input}
        onChange={handleChange}
        placeholder="Buscar Pokemon..."
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
      />
    </div>
  );
}

export default PokemoSearch;