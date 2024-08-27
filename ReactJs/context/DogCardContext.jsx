import { createContext, useState } from "react";

const DogContext = createContext()

const DogProvider = ({ children }) => {
    const [doglist, setDogList] = useState([]);
  
    return (
      <DogContext.Provider value={{ doglist, setDogList }}>
        {children}
      </DogContext.Provider>
    );
  };
  
  export { DogProvider, DogContext };