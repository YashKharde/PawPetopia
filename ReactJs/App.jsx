// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Outlet } from "react-router-dom";
import Header from "./components/Header";
import SearchLayout from "./components/SearchLayout";
import AboutUs from "./components/AboutUs";
import DogCardDescription from "./components/DogCardDescription";
import { MyProvider } from "./context/usercontext";

function App() {
  return (
    
      <div className="px-14 max-sm:px-4 py-7 max-md:px-10 max-w-[1600px] mx-auto">
        <MyProvider>
        <Header ></Header>

        <Outlet  />
        </MyProvider>
      </div>
    
  );
}

export default App;
