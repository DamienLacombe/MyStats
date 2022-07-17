import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Maps = (props) => {

  const imageRank = {
     SSH: "https://osu.ppy.sh/assets/images/GradeSmall-SS-Silver.6681366c.svg",
     SS: "https://osu.ppy.sh/assets/images/GradeSmall-SS.a21de890.svg",
     SH: "https://osu.ppy.sh/assets/images/GradeSmall-S-Silver.811ae28c.svg",
     S: "https://osu.ppy.sh/assets/images/GradeSmall-S.3b4498a9.svg",
     A: "https://osu.ppy.sh/assets/images/GradeSmall-A.d785e824.svg",
     B: "https://osu.ppy.sh/assets/images/GradeSmall-B.d785e824.svg",
     C: "https://osu.ppy.sh/assets/images/GradeSmall-C.d785e824.svg"
  }
  
  
  return (
    <div className='map' style={{ 
      backgroundImage: `url("${Object.values(props.mapInfo.beatmapset.covers)[3]}")` 
    }}>
        <div className='top'>
            <div>
                <img src={imageRank[props.mapInfo.rank]}/>
                <p>{props.mapInfo.pp.toFixed(0) + "pp"}</p>
            </div>
            <p className='row'>{props.mapInfo.beatmap.difficulty_rating}<FontAwesomeIcon classname="star" icon={faStar}/></p>
        </div>
        <div className='mid'>
            <div>
                <p className='title' data-title='Titre'>{props.mapInfo.beatmapset.title} /</p>
                <p className='title' data-title='Artiste'>/ {props.mapInfo.beatmapset.artist}</p>
            </div>
            <div className='middle'>
                <p className='title' data-title='Difficulté'>[{props.mapInfo.beatmap.version}] /</p>
                <p className='title' data-title='Createur'>{props.mapInfo.beatmapset.creator}</p>
            </div>
            
        </div>
            <ul className='bot'>
                <li><span>CS</span>{props.mapInfo.beatmap.cs}</li>
                <li><span>HP</span>{props.mapInfo.beatmap.drain}</li>
                <li><span>OD</span>{props.mapInfo.beatmap.accuracy}</li>
                <li><span>AR</span>{props.mapInfo.beatmap.ar}</li>
                <li><span>BPM</span>{props.mapInfo.beatmap.bpm}</li>
                <li>{props.mapInfo.total_length}</li>
            </ul>
        </div>
  )
}

export default Maps