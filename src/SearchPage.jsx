import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Pagination, RefinementList } from 'react-instantsearch';
import { useNavigate } from 'react-router-dom';
import Refine from './Components/RefinementList';

const searchClient = algoliasearch('H883WZN5K5', 'c4c34621505ccdbb7ec2d7f8907571c4');
function Hit({ hit }) {
  const navigate = useNavigate()
  const handleClick = () => {
    const url = `/details/${hit.id}`;
    navigate(url, { state: hit });
  };
  return (
    <div className="flex flex-col h-full items-center justify-center rounded overflow-hidden shadow-lg hover:shadow-2xl transition duration-300" onClick={handleClick}>
      <div className='w- h-64 mt-4 p-2'>
        <img className="w-full h-full object-cover" src={hit.image} alt={hit.firstName} />
      </div>
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{hit.firstName} {hit.lastName} </div>
      </div>
    </div>
  );
}
const attribute = [
  {
    name: "gender",
  },
  {
    name: "university",
  },
  {
    name: "bloodGroup",
  }
]

const SearchPage = () => (
  <InstantSearch searchClient={searchClient} indexName='users_test'>
    <SearchBox classNames={{
      root: 'flex items-center justify-center align-center',
      form: 'mx-auto max-w-md p-6 bg-white rounded-md shadow-md',
      input: 'px-2 py-1 border border-gray-300 focus:outline-none',
      submit: 'px-2 py-3 ml-2  text-white hover:bg-blue-600 focus:outline-none'
    }}
      placeholder='Search for Users'
    />
    <Refine attributes={attribute} />
    <div className="flex flex-wrap justify-center">
      <Hits hitComponent={Hit} classNames={{
        list: 'flex flex-wrap justify-center items-center p-4 space-x-4',
      }} />
    </div>

    <Pagination classNames={{
      list: 'flex flex-wrap justify-center items-center p-4 space-x-4',
      item: 'hover:text-blue-500'
    }} />
  </InstantSearch>
);
export default SearchPage;



