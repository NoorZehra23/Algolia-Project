import React from 'react'
import SearchComponent from './Components/CustomSearch'
import Refine from './Components/RefinementList'
import { InstantSearch } from 'react-instantsearch'
import algoliasearch from 'algoliasearch';
export default function Home() {
    
    
    const searchClient = algoliasearch('H883WZN5K5', 'c4c34621505ccdbb7ec2d7f8907571c4');
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
        <Refine attributes={attribute}/>  
        </InstantSearch>
        </div>
        <div className="col-span-3 bg-gray-200 p-4 flex">
        <SearchComponent/>
        </div>
      </div>
    );
  }

