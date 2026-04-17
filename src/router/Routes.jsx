import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout"; 
import Home from "../pages/Home";
import Stats from '../pages/Stats';
import Timeline from '../pages/Timeline';
import NotFound from '../pages/NotFound';
import FriendDetails from '../components/FriendDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/friend/:id",
        element: <FriendDetails />
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