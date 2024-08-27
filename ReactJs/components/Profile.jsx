import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/usercontext";
import gif from "../assets/ani.gif";
import HistoryMap from "./HistoryMap";

function Loading() {
  return (
    <>
      <div className="fixed flex justify-center w-full top-0 left-0 right-0 bottom-0 z-20 bg-white">
        <img className="w-[80vh] h-[80vh] aspect-square" src={gif} alt="" />
      </div>
    </>
  );
}

function Profile() {
  const { setuser } = useContext(userContext);
  const [data, setData] = useState("");
  const [state, setState] = useState(true);
  setTimeout(() => {
    setState(false);
  }, 3000);

  var email = localStorage.getItem("email");
  console.log(email);
  const navigate = useNavigate();
  useEffect(() => {
    if (email === null) {
      navigate("/SignIn");
    } else {
      dataCapture();
    }
  }, []);
  const [history, sethistory] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/pets/getPet/${email}`)
      .then((success) => {
        console.log(success.data);
        sethistory(success.data);
      });
  }, []);

  console.log(history);

  const handleLogout = () => {
    if (confirm("Are you sure!")) {
      localStorage.clear();
      navigate("/SignIn");
      setuser(null);
    }
  };

  const dataCapture = async () => {
    await axios
      .get(`http://localhost:8080/User/search/${email}`)
      .then((success) => {
        console.log(success.data);
        setData(success.data);
      });
  };

  console.log(data);

  const [edit1, setedit1] = useState(false);

  let UserEmail = email;
  let name = data.name;
  let phone = data.phno;
  let arr = [1, 1, 1, 1, 1];
  const handleEdit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/User/update`, // Assuming formData has an 'id' field
        new URLSearchParams({
          email: email + "",
          name: data.name,
          Phno: data.phno,
          imgUrl: data.imgUrl,
        }).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setedit1(false);
      console.log(response.data);
    } catch (error) {
      console.error(
        "Update failed:",
        error.response ? error.response.data : error.message
      );
      alert(
        "Update failed: " +
          (error.response ? error.response.data : error.message)
      );
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    if (confirm("Are you sure!")) {
      axios
        .delete(`http://localhost:8080/api/pets/delPet/${id}`)
        .then((success) => {
          console.log(success.data);
          setData(success.data);
        });
    }
  };

  return (
    <>
      {state ? (
        <Loading />
      ) : (
        <>
          <div className="">
            <div className=" bg-[#c3c3c39a] flex flex-wrap rounded-md mt-10 p-8 ">
              <div className="">
                <img
                  className="rounded-full w-44  border-[2px] aspect-square"
                  src={data.imgUrl}
                  alt=""
                />
              </div>
              <div className=" flex flex-col">
                <div className="m-8 flex flex-col gap-2">
                  <p className="text-lg font-semibold">Email : {UserEmail}</p>
                  <div className="flex">
                    {edit1 ? (
                      <p className="text-lg font-semibold">
                        Name :{" "}
                        <input
                          className="rounded-md px-1"
                          value={data.name}
                          type="text"
                          onChange={(e) =>
                            setData((prev) => {
                              return { ...prev, name: e.target.value };
                            })
                          }
                        />
                      </p>
                    ) : (
                      <p className="text-lg font-semibold">
                        Name : {data.name}
                      </p>
                    )}
                    {!edit1 && (
                      <svg
                        className="cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.8rem"
                        height="1.8rem"
                        viewBox="0 0 24 24"
                        onClick={() => setedit1(!edit1)}
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
                    )}
                  </div>
                  <div className="flex">
                    {edit1 ? (
                      <p className="text-lg font-semibold">
                        Phone :
                        <input
                          className="rounded-md px-1"
                          type="text"
                          value={data.phno}
                          onChange={(e) =>
                            setData((prev) => {
                              return { ...prev, phno: e.target.value };
                            })
                          }
                        />
                      </p>
                    ) : (
                      <p className="text-lg font-semibold">
                        Phone : {data.phno}
                      </p>
                    )}
                  </div>
                  <div className="flex">
                    {edit1 ? (
                      <p className="text-lg font-semibold">
                        Img-URL :
                        <input
                          className="rounded-md px-1"
                          type="url"
                          value={data.imgUrl}
                          onChange={(e) =>
                            setData((prev) => {
                              return { ...prev, imgUrl: e.target.value };
                            })
                          }
                        />
                      </p>
                    ) : (
                      <p className="text-lg font-semibold">
                        Img-URL : {data.imgUrl}
                      </p>
                    )}
                  </div>
                  {edit1 && (
                    <button
                      className="rounded-md py-1 bg-blue-500"
                      onClick={handleEdit}
                    >
                      Update
                    </button>
                  )}
                </div>
                <div className="mx-8 ">
                  <button
                    className=" text-lg font-semibold border-[2px]  transition-transform transform hover:scale-105 hover:bg-[#ff4d4dea] border-white bg-red-600  px-3 py-1 rounded-lg "
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
            <p className="text-xl my-4 font-bold flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89l.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18m-1 5v5l4.25 2.52l.77-1.29l-3.52-2.09V8z"
                ></path>
              </svg>
              History
            </p>
            <div className="grid gap-4 grid-cols-3 max-lg:grid-cols-2 place-items-center  max-sm:grid-cols-1">
              {history.map((item, i) => 
                (<HistoryMap key={i} handleDelete={handleDelete} item={item} ></HistoryMap>)
            )}
            </div>
            {/* <div className="grid gap-4 grid-cols-3 max-lg:grid-cols-2 place-items-center  max-sm:grid-cols-1">
              {history.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="bg-[#c3c3c39a] justify-between shadow-lg hover:bg-white hover:shadow-2xl transition-transform transform hover:scale-105 p-4 rounded-md flex w-full flex-wrap gap-4 items-center max-w-[450px]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="">
                        <img
                          className="w-28 rounded-full aspect-square object-cover"
                          src={item.img1}
                          alt=""
                        />
                      </div>
                      {
                        !edit2 ?

                      <div className="">
                        <p className="font-medium">Name: {item.name}</p>
                        <p className="font-medium">Age: {item.age}</p>
                        <p className="font-medium">Category: {item.category}</p>
                        <p className="font-medium">Weight: {item.weight}</p>
                      </div>
                      :
                      <form className="">
                        <label htmlFor="">Name</label>
                        <input type="text" value={item.name} />
                        <label htmlFor="">Name</label>
                        <input type="text" value={item.name} />
                        <label htmlFor="">Name</label>
                        <input type="text" value={item.name} />
                        <label htmlFor="">Name</label>
                        <input type="text" value={item.name} />
                      </form>
                      }
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
                        onClick={()=>setedit2(true)}
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
              })}
            </div> */}
          </div>
        </>
      )}
    </>
  );
}

export default Profile;
