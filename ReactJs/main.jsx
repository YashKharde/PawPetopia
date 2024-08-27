import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchLayout from "./components/SearchLayout.jsx";
import DogCard from "./components/DogCard.jsx";
import Home from "./components/Home.jsx";
import AboutUs from "./components/AboutUs.jsx";
import AllPetCards from "./components/AllPetCards.jsx";
import DogCardDescription from "./components/DogCardDescription.jsx";
import CardMapping from "./components/CardMapping.jsx";
import SignIn from "./components/SignIn.jsx";
import SellAdopt from "./components/SellAdopt.jsx";
import Chat from "./components/Chat.jsx";
import Profile from "./components/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/signIn",
        element:<SignIn></SignIn>
      },
      {
        path: "/service",
        element: <SellAdopt/>,
        
      },
      {
        path: "/Search",
        element: <SearchLayout/>,
        children: [
          {
            path: "/Search/allPet",
            element: <AllPetCards />,
          },
          {
            path: "/Search/allPet/description",
            element: <DogCardDescription />,
          },
        ],
        errorElement: <Error/>
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
      {
        path: "/chat",
        element: <Chat/>,
      },
      
      
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <RouterProvider router={router} />
  </>
  // </React.StrictMode>
);
