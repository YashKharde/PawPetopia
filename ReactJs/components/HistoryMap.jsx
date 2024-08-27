import axios from "axios";
import React, { useState } from "react";

function HistoryMap({ handleDelete, item }) {
  const [edit2, setedit2] = useState(false);
  const [first, setfirst] = useState({...item})
    const handlechange = (e)=>{
        setfirst({...first, [e.target.name]:e.target.value})
    }
  console.log(item);
    const handlesubmit = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8080/api/pets/${item.petId}`,
            new URLSearchParams({
               ...first
              }).toString(),
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              }
        ).then((res)=>{

        })
        // setedit2(false)
    }
  return ( 
    <div className="bg-[#c3c3c39a] justify-between shadow-lg hover:bg-white hover:shadow-2xl transition-transform transform hover:scale-105 p-4 rounded-md flex w-full flex-wrap gap-4 items-center max-w-[450px]">
      <div className="flex items-center gap-4">
        <div className="">
          <img
            className="w-28 rounded-full aspect-square object-cover"
            src={item.img1}
            alt=""
          />
        </div>
        {!edit2 ? (
          <div className="">
            <p className="font-medium">Name: {item.name}</p>
            <p className="font-medium">Age: {item.age}</p>
            <p className="font-medium">Category: {item.category}</p>
            <p className="font-medium">Weight: {item.weight}</p>
          </div>
        ) : (
          <form className="flex flex-col gap-2" onSubmit={handlesubmit} >
            <div className="flex items-center font-medium gap-1">
              <label htmlFor="">Name: </label>
              <input type="text" value={first.name} name="name" onChange={handlechange} />
            </div>
            <div className="flex items-center font-medium gap-1">
              <label htmlFor="">Age:</label>
              <input type="text" value={first.age} name="age" onChange={handlechange} />
            </div>
            <div className="flex items-center font-medium gap-1">
              <label htmlFor="">Category: </label>
              <input type="text" value={first.category} name="category" onChange={handlechange} />
            </div>
            <div className="flex items-center font-medium gap-1">
              <label htmlFor="">Pfp: </label> 

              <input type="url" value={first.img1} name="weight" onChange={handlechange} /> 
            </div>
            <button type="submit " className="bg-blue-600 py-1 px-2 rounded-md">update</button>
          </form>
        )}
      </div>
      <div className=" gap-3  self-start flex">
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="1.8rem"
          height="1.8rem"
          viewBox="0 0 24 24"
          onClick={() => handleDelete(item.petId)}
        >
          <path
            fill="red"
            d="M6 21h12V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
          ></path>
        </svg>
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="1.8rem"
          height="1.8rem"
          viewBox="0 0 24 24"
          onClick={() => setedit2(!edit2)}
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          >
            <path d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621"></path>
            <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3"></path>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default HistoryMap;
