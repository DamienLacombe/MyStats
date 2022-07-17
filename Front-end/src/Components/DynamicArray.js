import React, { useEffect, useState } from "react";
import Array from "./Array";

const DynamicArray = (props) => {
    console.log(props);
  const [smallDevice, setSmallDevice] = useState()
  const [obj, setObj] = useState({arr : {
    Accuracy: props.rank.accuracy,
    Bpm: props.rank.bpm,
    Combo: props.rank.max_combo,
    Difficulté: props.rank.star_rating,
    Temps: props.rank.total_length
  }})

  useEffect(() => {
    if (window.innerWidth < 650) {
      setSmallDevice(true)
    } else {
      setSmallDevice(false)
    }
  }, [])

  window.addEventListener("resize", () => {
    if (window.innerWidth < 650) {
      setSmallDevice(true)
    } else {
      setSmallDevice(false)
    }
  })

  return (
    <>
      {
        smallDevice ? <Array array={[Object.keys(Object.values(Object.values(obj)[0])[0]).length, Object.keys(Object.values(obj)[0]).length]} /> : <Array array={[Object.keys(Object.values(obj)[0]).length, Object.keys(Object.values(Object.values(obj)[0])[0]).length]}/>
      }
    </> 
  );
}

export default DynamicArray;