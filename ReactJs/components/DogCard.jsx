// src/components/DogCard.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function DogCard( {details} ) 

{

  return (
    <div className="relative rounded-md bg-base-100 shadow-xl min-w-[150px] overflow-hidden m-4 transition-transform transform hover:scale-105 hover:bg-white h-[380px]">
      <div className="absolute inset-0 opacity-10">
        <FontAwesomeIcon icon={faPaw} className="text-gray-200 h-12 w-12" />
      </div>
      <figure>
        <img
          className="w-full h-[200px]"
          src={details.img1}
          alt="Img"
        />
      </figure>
      <div className="px-4 py-2 relative">
        <h2 className="font-semibold text-lg" >{details.name}</h2>
        <h2 className=""> Category: <span className='text-lg '>{details.category} </span></h2>

        <p className='W-10 truncate'>{details.story}</p>
        
        <div className="card-actions justify-end mt-2">
          {/* <Link to={{ pathname: "/contact/description", state: { item: details } }}> */}
            <button className="bg-[#646EE4] py-1 px-3 my-1 rounded-md text-white">
              View More
            </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default DogCard;
