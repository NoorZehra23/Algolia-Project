import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const user = location.state;

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center">
      <div className='w-64 h-64 mt-4 p-2'>
        <img className="w-full h-full object-cover" src={user.image}  />
      </div>
      <h2 className="text-xl font-bold mb-4">{user.firstName} {user.maidenName} {user.lastName} </h2>
      <div className="mb-4 text-left">
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
    <h2 className="text-xl font-semibold mb-2">Physical Info</h2>
    <div className="grid grid-cols-2 gap-2">
        <p><span className="font-semibold">Age:</span>{user.age}  </p>
        <p><span className="font-semibold">Weight:</span>{user.weight} kg </p>
        <p><span className="font-semibold">Height:</span>{user.height} cm  </p>
        <p><span className="font-semibold">Blood Group:</span>{user.bloodGroup} </p>
        <p><span className="font-semibold">Gender:</span>{user.gender} </p>
    </div>
</div>

<div className="bg-gray-100 p-4 rounded-lg mb-4">
    <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
    <p><span className="font-semibold">Phone Number: </span>{user.phone}</p>
    <p><span className="font-semibold">Address:</span></p>
    <p><span className="font-semibold">House:</span>{user.address.address}</p>
    <p><span className="font-semibold">City:</span> {user.address.city}</p>
    <p><span className="font-semibold">State:</span> {user.address.state}</p>
    <p><span className="font-semibold">Postal Code:</span>{user.address.postalCode}</p>
</div>

<div className="bg-gray-100 p-4 rounded-lg mb-4">
    <h2 className="text-xl font-semibold mb-2">University</h2>
    <p>{user.university} </p>
</div>

      
      
      </div>
    </div>


  )
}

export default Details;
 