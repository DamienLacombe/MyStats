import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { calculateMapStatsWithMods } from '../Utils/CreateStats';

const Maps = (props) => {

  const imageRank = {
     XH: "https://osu.ppy.sh/assets/images/GradeSmall-SS-Silver.6681366c.svg",
     X: "https://osu.ppy.sh/assets/images/GradeSmall-SS.a21de890.svg",
     SH: "https://osu.ppy.sh/assets/images/GradeSmall-S-Silver.811ae28c.svg",
     S: "https://osu.ppy.sh/assets/images/GradeSmall-S.3b4498a9.svg",
     A: "https://osu.ppy.sh/assets/images/GradeSmall-A.d785e824.svg",
     B: "https://osu.ppy.sh/assets/images/GradeSmall-B.e19fc91b.svg",  
     C: "https://osu.ppy.sh/assets/images/GradeSmall-C.6bb75adc.svg" 
  }

  const imageMods = {
     NM : "https://osu.ppy.sh/assets/images/mod_no-mod.d04b9d35.png", 
     HD : "https://osu.ppy.sh/assets/images/mod_hidden.cfc32448.png",
     DT : "https://osu.ppy.sh/assets/images/mod_double-time.348a64d3.png", 
     NF : "https://osu.ppy.sh/assets/images/mod_no-fail.ca1a6374.png",
     FL : "https://osu.ppy.sh/assets/images/mod_flashlight.be8ff220.png", 
     EZ : "https://osu.ppy.sh/assets/images/mod_easy.076c7e8c.png",  
     HR : "https://osu.ppy.sh/assets/images/mod_hard-rock.52c35a3a.png",
     NC : "https://osu.ppy.sh/assets/images/mod_nightcore.240c22f2.png",
     SD : "https://osu.ppy.sh/assets/images/mod_sudden-death.d0df65c7.png",   
  }
 
  return (
    <div className='map'  style={{ 
        backgroundImage: `url("${Object.values(props.mapInfo.beatmapset.covers)[3]}")` 
    }}>
        <div className='mods-container'>
            {
                props.mapInfo.mods.length === 0 ? <img src={imageMods.NM} alt="" /> : (
                    props.mapInfo.mods.map(mod => {
                        return <img src={imageMods[mod]} alt="" />
                    })
                )
            }
        </div>
        <div className='top'>
            <div className='top-left'>
                <div>
                    <img src={imageRank[props.mapInfo.rank]}/>
                    <p>{props.mapInfo.pp.toFixed(0) + "pp"}</p>
                </div>
                
                <p className='row'>{props.mapInfo.beatmap.difficulty_rating}<FontAwesomeIcon className="star" icon={faStar}/></p>
            </div>
                    
        </div>
        <a href={props.mapInfo.beatmap.url} target="_blank" className='mid'>
            <div>
                <p className='title' data-title='Titre'>{props.mapInfo.beatmapset.title} /</p>
                <p className='title' data-title='Artiste'>/ {props.mapInfo.beatmapset.artist}</p>
            </div>
            <div className='middle'>
                <p className='title' data-title='Difficulté'>[{props.mapInfo.beatmap.version}] /</p>
                <p className='title' data-title='Createur'>{props.mapInfo.beatmapset.creator}</p>
            </div>
            
        </a>
            <ul className='bot'>
                <li><span>CS</span>{calculateMapStatsWithMods(Object.entries(props.mapInfo.beatmap)[15], props.mapInfo.mods).toFixed(0)}</li>
                <li><span>HP</span>{calculateMapStatsWithMods(Object.entries(props.mapInfo.beatmap)[17], props.mapInfo.mods).toFixed(0)}</li>
                <li><span>OD</span>{calculateMapStatsWithMods(Object.entries(props.mapInfo.beatmap)[8], props.mapInfo.mods)}</li>
                <li><span>AR</span>{calculateMapStatsWithMods(Object.entries(props.mapInfo.beatmap)[9], props.mapInfo.mods).toFixed(0)}</li>
                <li><span>BPM</span>{calculateMapStatsWithMods(Object.entries(props.mapInfo.beatmap)[10], props.mapInfo.mods)}</li>
                <li>{props.mapInfo.total_length}</li>
            </ul>
        </div>
  )
}

export default Maps;