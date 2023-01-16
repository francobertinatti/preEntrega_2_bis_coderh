import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?q=${searchTerm}`
      );
      const data = await response.json();
      onSearch(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
