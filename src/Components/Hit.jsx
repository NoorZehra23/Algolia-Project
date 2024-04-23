import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hit = ({ hit }) => {

  const navigate = useNavigate();
  const {id, image, firstName, lastName } = hit;
  const handleClick = () => {
    const url = `/details/${id}`;
    navigate(url, { state: hit });
  };
  return (
    <div className="flex flex-col h-full items-center justify-center rounded overflow-hidden shadow-lg hover:shadow-2xl transition duration-300" onClick={handleClick}>
      <div className='w- h-64 mt-4 p-2'>
        <img className="w-full h-full object-cover" src={image} alt={firstName} />
      </div>
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{firstName} {lastName} </div>
      </div>
    </div>
  );
}

export default Hit;