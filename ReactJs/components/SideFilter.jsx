import React from "react";

function SideFilter() {
  return (
    <div className="max-w-40 w-full max-[650px]:max-w-full max-[650px]:flex mr-5">
      <label
        htmlFor="default"
        className="block mb-2 text-lg font-medium text-gray-900"
      >
        Sort by Category
      </label>
      <select
        
        onChange={()=>{}}
        value=""
        className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option className="font-semibold">Choose a Category</option>
        <option className="font-semibold" value="dog">
          Dog
        </option>
        <option className="font-semibold" value="cat">
          Cat
        </option>
        <option className="font-semibold" value="bird">
          Bird
        </option>
        <option className="font-semibold" value="reptile">
          Reptile
        </option>
      </select>
      <label
        htmlFor="default"
        className="block mb-2 text-lg font-medium text-gray-900"
      >
        Sort by Gender
      </label>
      <select
        
        onChange={()=>{}}
        value=""
        className="bg-gray-50 border  border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option>Choose a Gender</option>
        <option className="font-semibold" value="Male">
          Male
        </option>
        <option className="font-semibold" value="Female">
          Femle
        </option>
      </select>
      <label
        htmlFor="default"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Default select
      </label>
      <select
         disabled
        onChange={()=>{}}
        value=""
        className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option>Choose a country</option>
        <option className="font-semibold" value="US">
          United States
        </option>
        <option className="font-semibold" value="CA">
          Canada
        </option>
        <option className="font-semibold" value="FR">
          France
        </option>
        <option className="font-semibold" value="DE">
          Germany
        </option>
      </select>
    </div>
  );
}

export default SideFilter;
