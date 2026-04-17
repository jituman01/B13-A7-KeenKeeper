import React from 'react';
import './index.css';
import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'; 
import { router } from './router/Routes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);