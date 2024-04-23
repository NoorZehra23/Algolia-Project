import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const user = location.state;
const {image, firstName,lastName,age, weight,height,bloodGroup,gender, maidenName, phone ,address,university}=user;

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center">
      <div className='w-64 h-64 mt-4 p-2'>
        <img className="w-full h-full object-cover" src={image}  />
      </div>
      <h2 className="text-xl font-bold mb-4">{firstName} {maidenName} {lastName} </h2>
      <div className="mb-4 text-left">
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
    <h2 className="text-xl font-semibold mb-2">Physical Info</h2>
    <div className="grid grid-cols-2 gap-2">
        <p><span className="font-semibold">Age:</span>{age}  </p>
        <p><span className="font-semibold">Weight:</span>{weight} kg </p>
        <p><span className="font-semibold">Height:</span>{height} cm  </p>
        <p><span className="font-semibold">Blood Group:</span>{bloodGroup} </p>
        <p><span className="font-semibold">Gender:</span>{gender} </p>
    </div>
</div>

<div className="bg-gray-100 p-4 rounded-lg mb-4">
    <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
    <p><span className="font-semibold">Phone Number: </span>{phone}</p>
    <p><span className="font-semibold">Address:</span></p>
    <p><span className="font-semibold">House:</span>{address.address}</p>
    <p><span className="font-semibold">City:</span> {address.city}</p>
    <p><span className="font-semibold">State:</span> {address.state}</p>
    <p><span className="font-semibold">Postal Code:</span>{address.postalCode}</p>
</div>

<div className="bg-gray-100 p-4 rounded-lg mb-4">
    <h2 className="text-xl font-semibold mb-2">University</h2>
    <p>{university} </p>
</div>

      
      
      </div>
    </div>


  )
}

export default Details;
 