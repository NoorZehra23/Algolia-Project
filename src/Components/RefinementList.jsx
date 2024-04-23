import React, { useState } from 'react';
import { RefinementList } from 'react-instantsearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Refine = ({ attributes }) => {
  const transformItems = (items) => {
    return items.map((item) => ({
      ...item,
      label: item.label.toUpperCase(),
      count: `(${item.count})`
    }));
  };
  const [expandedStates, setExpandedStates] = useState(attributes.map(() => false));

  const toggleExpansion = (index) => {
    
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };  

  return (
    <div className='" bg-gray-200 w-1/4 px-4 py-8 overflow-y-auto"'>
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
      {attributes.map((attribute,index) => (
          <div className="mb-4" key={attribute.name}>
            <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700 mb-2">{attribute.name}</label>
            <button onClick={() => toggleExpansion(index)}>
              <FontAwesomeIcon icon={expandedStates[index] ? faChevronUp : faChevronDown} />
            </button>
          </div>
          <div className={`mb-4 ${expandedStates[index] ? 'block' : 'hidden'}`}>
          <RefinementList
            attribute={attribute.name}
            transformItems={transformItems}
            sortBy={['count:desc', 'name:asc']}
            classNames={{
                root:'mb-4',
              count: 'p-2 text-xs text-gray-700',
              labelText: 'text-sm text-blue-700',
              checkbox: 'm-4 form-checkbox h-5 w-5 text-blue-600'
            }}
          />
          </div>
         </div>
      ))}
    </div>
  );
};

export default Refine;


{/* <div className={`mb-4 ${expandedStates[index] ? 'block' : 'hidden'}`} key={attribute.name}>
<button onClick={() => toggleExpansion(index)}>
  {expandedStates[index] ? 'Collapse' : 'Expand'}
</button> */}