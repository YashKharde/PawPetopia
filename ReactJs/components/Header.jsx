// src/components/Header.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/usercontext';

function Header({user}) {


  const {setuser , user:username} = useContext(userContext)







  return (
    <div className="">
      <div className="flex justify-between items-center text-right">
        <nav className="grid-cols-2 max-md:hidden">
          <ul className="flex p-0 gap-5">
            <li className="text-base font-semibold text-nowrap hover:bg-slate-300 py-1 px-2 rounded-xl">
              <Link to="/">Home</Link>
            </li>
            <li className="text-base font-semibold text-nowrap hover:bg-slate-300 py-1 px-2 rounded-xl">
              <Link to="/service">Sell/Adopt</Link>
            </li>
            <li className="text-base font-semibold text-nowrap hover:bg-slate-300 py-1 px-2 rounded-xl">
              <Link to="/Search/allPet">Browse</Link>
            </li>
            <li className="text-base font-semibold text-nowrap hover:bg-slate-300 py-1 px-2 rounded-xl">
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
        </nav>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24">
            <path fill="currentColor" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1H4c-.55 0-1 .45-1 1"></path>
          </svg>
        </button>
        <div className="py-1 mx-auto">
          <p className="text-start text-lg font-bold text-nowrap">Paw-Palace</p>
        </div>
        <div className="items-center gap-3 flex justify-end">
          <Link to="/chat">
          <div className="">

        <svg className='cursor-pointer translate-y-2 ' xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6H4l8 4.99zM4 8v10h16V8l-8 5z"></path><path fill="white" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 2l-8 4.99L4 6zm0 12H4V8l8 5l8-5z"></path></svg>
        <span className=' block translate-x-4 -translate-y-5 z-20  w-3 h-3 bg-red-600 rounded-full'></span>
          </div>
          </Link>
          {
            username !== null && 
          <Link to="/profile">
          <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24">
              <circle cx={12} cy={6} r={4} fill="currentColor"></circle>
              <path fill="currentColor" d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"></path>
            </svg> 
            {username}
          </p>
            </Link>
          }
            {
              username ===null &&
          <Link to="/SignIn"> <button className="text-base font-semibold py-1 px-2 rounded-md bg-[#646EE4]">Sign-In</button></Link>
            }
        </div>
      </div>
    </div>
  );
}

export default Header;
