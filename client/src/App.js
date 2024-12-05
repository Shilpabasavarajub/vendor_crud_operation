import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Add from './components/addvendors/Add.jsx';
import Edit from './components/updatevendors/Edit.jsx';
import Vendors from './components/getOnevendors/Vendors.jsx'; // Ensure the case matches your file name
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const route = createBrowserRouter([
    {
      path: "/create",
      element: <Add />
    },
    {
      path: "/update/:id", // :id means a dynamic parameter
      element: <Edit />
    },
    {
      path: "/", // Dynamic parameter :id
      element: <Hotels /> // Ensure this is the correct component
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
