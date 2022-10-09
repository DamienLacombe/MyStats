import React, { useEffect, useState} from "react";
import Array from "./Array";

const DynamicArray = (props) => {
  
  const [smallDevice, setSmallDevice] = useState()
  const [obj, setObj] = useState({
    Accuracy: { 
      category : "Accuracy",
      interval : props.rank.accuracy 
    },
    Bpm: {
      category : "Bpm",
      interval : props.rank.bpm
    },  
    Combo: {
      category : "Combo",
      interval : props.rank.max_combo
    },     
    Difficulty: {
      category : "Difficulté",
      interval : props.rank.star_rating
    }, 
    Temps: {
      category : "Temps",
      interval : props.rank.total_length
    },
    pp: {
      category : "PP",
      interval : props.rank.pp
    },
    ar: {
      category : "AR",
      interval : props.rank.ar
    },
    
  })

  useEffect(() => {
    setObj({
      Accuracy: { 
      category : "Accuracy",
      interval : props.rank.accuracy 
    },
    Bpm: {
      category : "Bpm",
      interval : props.rank.bpm
    },  
    Combo: {
      category : "Combo",
      interval : props.rank.max_combo
    },     
    Difficulty: {
      category : "Difficulté",
      interval : props.rank.star_rating
    }, 
    Temps: {
      category : "Temps",
      interval : props.rank.total_length
    },
    pp: {
      category : "PP",
      interval : props.rank.pp
    },
    ar: {
      category : "AR",
      interval : props.rank.ar
    },
    })
   
  }, [props])

  const [lineNbr, setLineNbr] = useState(Object.keys(obj).length)

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
        <Array stats={obj} lineNbr={lineNbr} smallDevice={smallDevice}/> 
      }
    </> 
  );
}

export default DynamicArray;