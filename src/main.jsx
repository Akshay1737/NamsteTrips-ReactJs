
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import React, { StrictMode } from 'react';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Destinationpage from './pages/Destinationpage';
import Servicepage from './pages/Servicepage';
import Contactpage from './pages/Contactpage';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <Aboutpage/>,
  },
  {
    path: "/destination",
    element:<Destinationpage/>,
  },
  {
    path: "/service",
    element: <Servicepage/>,
  },
  
  {
    path: "/contact",
    element: <Contactpage/>,
  },
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>
);
