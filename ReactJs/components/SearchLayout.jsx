import React from "react";
import SideFilter from "./SideFilter";
import DogCard from "./DogCard";
import { Link, Outlet } from "react-router-dom";
import { DogProvider } from "../context/DogCardContext";
function SearchLayout() {
  let a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <>
      <div className="">
        
        <div className="flex mt-10 box-border max-[650px]:block">
        <DogProvider>

          <Outlet></Outlet>
        </DogProvider>
        </div>
      </div>
    </>
  );
}

export default SearchLayout;
