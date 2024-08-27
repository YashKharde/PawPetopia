import React from "react";
import { Link, Outlet } from "react-router-dom";
import DogCard from "./DogCard";
import SideFilter from "./SideFilter";
import CardMapping from "./CardMapping";

function AllPetCards() {
  return (
    <>
      <div className="flex w-full">
        <SideFilter></SideFilter>
        <div className="w-full max-w-[1600px]">
          <div className="flex justify-end">
            <select
              onChange={() => {}}
              value="US"
              className="bg-gray-50 border max-w-60 font-semibold  border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
            >
              <option className="">Sort by-</option>
              <option className="font-semibold" value="weight">
                Weight
              </option>
              <option className="font-semibold" value="age">
                Age
              </option>
              <option className="font-semibold" value="date">
                Posted By Date
              </option>
              <option className="font-semibold" value="DE">
                suggested
              </option>
            </select>
          </div>
          <CardMapping></CardMapping>
        </div>
      </div>
    </>
  );
}

export default AllPetCards;
