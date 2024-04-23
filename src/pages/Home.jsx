import React from 'react'
import { InstantSearch } from 'react-instantsearch';
import searchClient from '../helper';
import SearchComponent from '../Components/CustomSearch';
import Refine from '../Components/RefinementList';
export default function Home() {
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


  return (
    <div className="container mx-auto p-4 grid grid-cols-4 gap-4">
      <div className="col-span-1 bg-gray-200 p-3 flex">
        <InstantSearch searchClient={searchClient} indexName='users_test'>
          <Refine attributes={attribute} />
        </InstantSearch>
      </div>
      <div className="col-span-3 bg-gray-200 p-4 flex">
<SearchComponent/>
      </div>
    </div>
  );
}

