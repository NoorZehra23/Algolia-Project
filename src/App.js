
import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
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