import React, {useEffect, useState} from 'react';
import algoliasearch from 'algoliasearch';
import Hit from './Hit';

const SearchComponent = () => {

    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    // Initialize Algolia client
    const algoliaClient = algoliasearch('H883WZN5K5', 'c4c34621505ccdbb7ec2d7f8907571c4');
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
            <input
                type="text"
                value={query}
                className='px-4 py-2 border border-gray-300 rounded-l focus:outline-none'
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch()
                  }
                }}
                placeholder="Search..."
            />
             <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
<div className='grid grid-cols-3 gap-4 mt-8'>

{searchResults.length !== 0 ? (
  searchResults.map((hit) => (
    <div className="mb-4" key={hit.id}>
      <Hit hit={hit}/> 
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