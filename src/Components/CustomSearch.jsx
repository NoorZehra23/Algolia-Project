import React, { useState } from 'react';
import Hit from './Hit';
import searchClient from '../helper';

const SearchComponent = () => {

  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Initialize Algolia client
  const algoliaClient = searchClient
  const algoliaIndex = algoliaClient.initIndex('users_test');

  // Function to perform search query
  const search = async (query) => {
    try {
      const result = await algoliaIndex.search(query);
      setSearchResults(result.hits);

    } catch (error) {
      console.error('Error searching:', error);
      setSearchResults([]);
    }
  };


  // Function to handle input change
  const handleSearch = (event) => {
    search(query);
  };


  return (
    <div className='justify-center items-center'>
              <form onSubmit={(e) => {
          e.preventDefault(); 
          handleSearch(); 
        }}
         className="flex"
        >
          <input
            type="text"
            value={query}
            className='px-4 py-2 border border-gray-300 rounded-l focus:outline-none'
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
          />
          <button
            type="submit" 
            className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none"
          >
            Search
          </button>
        </form>
        <div className='grid grid-cols-3 gap-4 mt-8'>

        {searchResults.length !== 0 ? (
          searchResults.map((hit) => (
            <div className="mb-4" key={hit.id}>
              <Hit hit={hit} />
            </div>
          ))
        ) : (
          <div className=' m-2 p-4'>No results found.</div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;