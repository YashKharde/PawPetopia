import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DogCard from "./DogCard";
import axios from "axios";
import { DogContext } from "../context/DogCardContext";

function CardMapping() {
  let a = [1, 1, 1, 1, 1, 1, 1, 1, 1];
const {doglist, setDogList} = useContext(DogContext)
  const [data, setData] = useState([])
  useEffect(() => {
    dataCapture()
  }, [])
  
  const dataCapture = async()=>{
    await axios.get("http://localhost:8080/api/pets/all").then(
      success=>{
        console.log(success.data);
        setData(success.data)
      }
    )
  }

  return (
    <div className="grid bg-[#c3c3c39a] w-full rounded-md md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1">
      
      {data.map((item, i) => (
        <Link key={i} to={{ pathname: "/Search/allPet/description" , state: {category:"Dog"} }} onClick={()=>setDogList(item)} >
          <DogCard details={item}></DogCard>
        </Link>
      ))}
      
    </div>
  );
}

export default CardMapping;