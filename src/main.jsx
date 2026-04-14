import React from 'react';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'; 
import MainLayout from "./layouts/MainLayout"; 
import Home from "./pages/Home";
import Stats from './pages/Stats';
import Timeline from './pages/Timeline';
import NotFound from './pages/NotFound';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/timeline",
        element: <Timeline />
      },
          { path: "/stats", 
            element: <Stats /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);