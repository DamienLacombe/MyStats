import React from 'react'

const Maps = (props) => {

  const imageRank = {
     
  }
  
  console.log(props.mapInfo);
  return (
    <div className='map' style={{ 
      backgroundImage: `url("${Object.values(props.mapInfo.beatmapset.covers)[3]}")` 
    }}>
        <div className='top'>
            <p><img src="" alt="" />{props.mapInfo.beatmap.difficulty_rating}</p>
            <div>
                <p>{props.mapInfo.pp}</p>
                <p>{props.mapInfo.rank}</p>
            </div>
        </div>
        <div className='mid'>
            <div>
                <p>{props.mapInfo.beatmapset.artist}</p>
                <p>{props.mapInfo.beatmapset.title}</p>
            </div>
            <div className='middle'>
                <p>{props.mapInfo.beatmap.version}</p>
                <p>{props.mapInfo.beatmapset.creator}</p>
            </div>
            <ul>
                <li>{props.mapInfo.beatmap.cs}</li>
                <li>{props.mapInfo.beatmap.drain}</li>
                <li>{props.mapInfo.beatmap.accuracy}</li>
                <li>{props.mapInfo.beatmap.ar}</li>
                <li>{props.mapInfo.beatmap.bpm}</li>
                <li>{props.mapInfo.total_length}</li>
            </ul>
        </div>
    </div>
  )
}

export default Maps