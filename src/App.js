
import React from 'react';
import SearchPage from './SearchPage';
import Details from './Details';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import SearchComponent from './Components/CustomSearch';
import Home from './Home';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' >
      <Route
        path=''
        element={<Home />} />
      <Route path='/details/:userId' element={<Details />} />
    </Route>
  )
)


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;