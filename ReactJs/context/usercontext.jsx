import { createContext, useState } from "react";

const userContext = createContext()


const MyProvider = ({ children }) => {
  const [user, setuser] = useState(localStorage.getItem("email"))
    console.log(user);
  
    return (
      <userContext.Provider value={{ user, setuser }}>
        {children}
      </userContext.Provider>
    );
  };
  
  export { userContext, MyProvider };