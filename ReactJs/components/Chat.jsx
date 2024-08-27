import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Chat() {
  var email = localStorage.getItem("email");
  console.log(email);
  const navigate = useNavigate();
  const [listUser, setlistUser] = useState([]);
  const [cc, setcc] = useState(false);
  const socketRef = useRef(null);
  useEffect(() => {
    axios.get("http://localhost:8080/User/getAll").then((res) => {
      console.log(res);
      setlistUser(res.data);
    });
    if (email === null) {
      navigate("/SignIn");
    }
  }, []);
  console.log(listUser);
  var socket;
  useEffect(() => {
    console.log("===>>>>");
    socket = new WebSocket("ws://localhost:8080/my-websocket-endpoint");
    socketRef.current = socket;
    socket.onmessage = (event) => {
      console.log(event.data);
      let a = JSON.parse(event.data);

      if (a.receiver == email) {
        console.log(a.msg);
        setMsg((prev) => [...prev, { id: "r", msg: a.msg }]);
      }
    };
    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  }, []);
  // socketRef.current.onmessage = (event) => {
  //   console.log(event.data);
  //   setMsg(prev=>[...prev, event.data]);
  // };
  const [input, setInput] = useState("");

  const handleclickmsg = (item) => {
    setFriend(item);
  };

  const [friend, setFriend] = useState("");
  const [msg, setMsg] = useState([]);
  const arr = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
  ];

  const HandelSubmit = (e) => {
    e.preventDefault();
    let rec = friend.email;
    console.log("ssssssssssssssssssssss");
    console.log(socketRef.current);
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(
        JSON.stringify({
          sender: email,
          receiver: rec,
          msg: input,
        })
      );
    } else {
      console.log("WebSocket is not open");
    }
    setMsg((prev) => [...prev, { id: "s", msg: input }]);
    setInput("");
  };
  return (
    <div className="">
      <div className="flex gap-4 bg-[#c3c3c39a] rounded-md mt-4 h-[calc(100vh-113px)] p-4">
        <div className="min-w-[300px] flex flex-col gap-3">
          <input
            className="p-1 w-full rounded-md"
            placeholder="Search"
            type="text"
            name=""
            id=""
          />
          <div className="h-[calc(100%-10px)] flex flex-col gap-1 overflow-auto ">
            {listUser.map((item, i) => (
              <div
                key={i}
                className="bg-white p-2 rounded-md"
                onClick={() => handleclickmsg(item)}
              >
                <div className="flex gap-1 items-center">
                  <img
                    className="w-10 h-10 aspect-square rounded-full"
                    src={item.imgUrl}
                    alt=""
                  />
                  <div className=" ">
                    <p className="font-medium">{item.name}</p>
                    <p>Message</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" grow shrink w-full">
          <div className="flex justify-between  ">
            <div className="flex gap-2">
              <img
                className="w-10 h-10 rounded-full"
                src={friend.imgUrl}
                alt=""
              />
              <div className="flex flex-col gap-0">
                <p className="font-medium">{friend.name}</p>
                {/* <p className=" text-sm font-normal">Online</p> */}
              </div>
            </div>
            <div className=" flex items-center gap-4 px-4 ">
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="1.8rem"
                height="1.8rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98"
                ></path>
              </svg>
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="1.8rem"
                height="1.8rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l2.29 2.29c.63.63 1.71.18 1.71-.71V8.91c0-.89-1.08-1.34-1.71-.71zM13 13h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H7c-.55 0-1-.45-1-1s.45-1 1-1h2V9c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1"
                ></path>
              </svg>
            </div>
          </div>
          <div className="h-[calc(100%-50px)] flex flex-col justify-end p-2 rounded-md min-w-80 bg-white my-2">
            <div className="h-[calc(100%-50px)] overflow-auto">
              {msg.map((item, i) => (
                <div key={i}>
                  {item.id == "r" ? (
                    <div  className="flex justify-start">
                      <p className="p-1 bg-[#646EE4] text-white rounded-md m-1 inline ">
                        {item.msg}
                      </p>
                    </div>
                  ):
                    <div  className="flex justify-end">
                      <p className="p-1 bg-[#6f6f6f] text-white rounded-md m-1 inline ">
                        {item.msg}
                      </p>
                    </div>
                  
                  }
                </div>
              ))}
            </div>
            <form
              className="w-full mt-2 flex items-center gap-2 "
              onSubmit={HandelSubmit}
            >
              <input
                value={input}
                className=" rounded-lg py-1 px-2 font-normal w-full bg-[#c3c3c39a] "
                type="text"
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit">
                <svg
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
