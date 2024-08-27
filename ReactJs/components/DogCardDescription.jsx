import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DogContext } from "../context/DogCardContext";


function DogCardDescription() {
const {doglist} = useContext(DogContext)
console.log(doglist);

  var email= localStorage.getItem("email");
  console.log(email);
  const navigate = useNavigate();
  useEffect(() => {
    if(email === null){
      navigate("/SignIn")
    }
  }, [])
 
  
  const dogImages = [doglist.img1,doglist.img2,doglist.img3,doglist.img4
     ];
  const [fact, setFact] = useState([]);
  let a = "https://catfact.ninja/fact";

  const [img, setImg] = useState(dogImages[0]);
  useEffect(() => {
    async function func() {
      let y = await fetch(a)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.error("Error:", error));
      setFact((prev) => [...prev, y.fact]);
    }
    func();
    func();
  }, []);
  console.log(doglist);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        <div className=" mt-28 flex-col basis-[250px] max-w-[350px] grow shrink flex gap-3 ">
          <p className="-mt-12 text-3xl  font-bold  ">Interesting Facts...</p>
          {fact.map((item, i) => (
            <div key={i} className="bg-[#DBDBDB] p-4 rounded-md ">
              <p className="text-lg  font-semibold">{item}</p>
            </div>
          ))}
          <div className=""></div>
        </div>
        <div className=" basis-[450px] min-w-[300px] grow shrink ">
          <div className="my-4 flex flex-col gap-2">
            <p className="text-5xl font-semibold ">My name is {doglist.name}</p>
            <p className="">Posted on {(doglist.postedAt).split("T")[0]}</p>
          </div>
          <div className="p-4 rounded-md bg-[#c3c3c39a] ">
            <div className=" grid grid-cols-2 max-sm:grid-cols-1 gap-4">
              <div className=" flex flex-col gap-3 ">
                <div className=" flex max-w-[450px] max-h-[450px]  ">
                  {/* <svg className="" xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.55} color="currentColor"><path d="M8.269 8.497c1.34-.822 2.51-.49 3.214.037c.288.216.432.325.517.325s.229-.109.517-.325c.703-.528 1.874-.86 3.214-.037c1.76 1.08 2.158 4.64-1.9 7.645c-.774.572-1.16.858-1.831.858c-.67 0-1.057-.286-1.83-.858c-4.06-3.005-3.661-6.566-1.901-7.645"></path><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></path></g></svg> */}
                  <img
                    className="rounded-md  w-[450px] grow shrink h-[400px] "
                    src={img}
                    alt=""
                  />
                </div>
                <div className="flex gap-4 flex-wrap">
                  {dogImages.map((item, i) => (
                    <img
                      className="w-16 h-16 cursor-pointer rounded "
                      src={item}
                      key={i}
                      alt=""
                      onClick={() => setImg(item)}
                    />
                  ))}
                </div>
              </div>
              <div className="text-2xl flex flex-col gap-2 bg-white rounded-md p-6 font-semibold">
                <p className="w-full">Category: {doglist.category}</p>
                <p className="w-full">Name: {doglist.name}</p>
                <p className="w-full">Gender: {doglist.gender}</p>
                <p className="w-full">Weight: {doglist.weight}</p>
                <p className="w-full">postedAt: {(doglist.postedAt).split("T")[0]}</p>
                
                {/* <p className="w-full">Story: {doglist.story}</p> */}
                <Link to="/chat">
                <button className="bg-[#646EE4] rounded-md flex items-center justify-center  max-w-40 mt-10 text-white py-1 w-full">
                  <svg
                    className="-translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2rem"
                    height="1.2rem"
                    viewBox="0 0 24 24"
                    >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M2.25 5A2.75 2.75 0 0 1 5 2.25h14A2.75 2.75 0 0 1 21.75 5v10A2.75 2.75 0 0 1 19 17.75H7.961c-.38 0-.739.173-.976.47l-2.33 2.913c-.798.996-2.405.433-2.405-.843z"
                      clipRule="evenodd"
                      ></path>
                  </svg>
                  Chat
                </button>
                      </Link>
              </div>
            </div>
            <div className=" mt-4 rounded-md p-4 text-lg font-semibold bg-white">
              <p>My Story</p>
              <p>
              {doglist.story}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DogCardDescription;
