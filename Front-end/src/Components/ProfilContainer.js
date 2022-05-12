import React from 'react';
import "../css/profilContainer.css";

const ProfilContainer = (props)  => {
    

    return (
        <div className='profil-container'>
            <div className='profil-head' style={{ backgroundImage : `url(${props.profil.cover_url}` + ")" }}>
                <div className='shadow'></div>
                <img src={props.profil.avatar_url} alt="" />
                <div className='name'>
                    <div className='head'>
                        <div className='title'>
                            <p className='lvl'>{props.profil.statistics.level.current}</p>
                            <h1>{props.profil.username}</h1>
                        </div>
                        <p className='flag-container'><img className='flag' src={`https://flagcdn.com/${props.profil.country_code.toLowerCase()}.svg`} alt="" />{`#${props.profil.statistics.country_rank}`}</p>
                    </div>
                    <p className='rank'><img src="https://img.icons8.com/color/48/000000/earth-planet.png" alt="" />#{props.profil.statistics.global_rank}</p>
                </div>
                <div className='acc'>
                    <p className='pp'>{props.profil.statistics.pp.toFixed(0) + " pp"}</p> 
                </div>
                
            </div>
            <div>
                <div className=''>
                    
                    <p>{props.profil.statistics.hit_accuracy.toFixed(2)}</p>
                </div>
                <div className='map-ranking'> 
                    <div className='ssh'>
                        <p>S<span>S</span></p>
                        <p>{props.profil.statistics.grade_counts.ssh}</p>
                    </div>
                    <div className='ss'>
                        <p>S<span>S</span></p> 
                        <p>{props.profil.statistics.grade_counts.ss}</p>  
                    </div>
                    <div className='sh'>
                        <p>S</p>
                        <p>{props.profil.statistics.grade_counts.sh}</p>
                    </div>
                    <div className='s'>
                        <p>S</p>
                        <p>{props.profil.statistics.grade_counts.s}</p>
                    </div>
                    <div className='a'>
                        <p>A</p>
                        <p>{props.profil.statistics.grade_counts.a}</p>
                    </div>                
                </div>
            </div>
            {
                console.log(props.profil)
            }
        </div>
    )
}

export default ProfilContainer;