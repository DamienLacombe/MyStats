import React from 'react';
import "../css/profilContainer.css";


const ProfilContainer = (props)  => {

    return (
        <div className='profil-container'>
            <div className='profil-head'>
                <img src={props.profil.avatar_url} alt="" />
                <div className='head'>
                    <h1>{props.profil.username}</h1>
                    <div className='rank-container'>
                        <p className='rank'><img src="https://img.icons8.com/color/48/000000/earth-planet.png" alt="" />#{props.profil.statistics.global_rank}</p>
                        <p className='flag-container'><img className='flag' src={`https://flagcdn.com/${props.profil.country_code.toLowerCase()}.svg`} alt="" />{`#${props.profil.statistics.country_rank}`}</p>
                    </div>
                </div> 
                <div className='lvlpp'>
                    <p className='lvl'>{props.profil.statistics.level.current}</p>
                    <p className='pp'>{props.profil.statistics.pp.toFixed(0) + " pp"}</p>
                </div>
                <ul className='map-ranking'>
                    <li>
                        <img src="https://osu.ppy.sh/assets/images/GradeSmall-SS-Silver.6681366c.svg" alt="" /> 
                        <p>{props.profil.statistics.grade_counts.ssh}</p>
                    </li>
                    <li>
                        <img src="https://osu.ppy.sh/assets/images/GradeSmall-SS.a21de890.svg" alt="" />
                        <p>{props.profil.statistics.grade_counts.ss}</p>
                    </li>
                    <li> 
                        <img src="https://osu.ppy.sh/assets/images/GradeSmall-S-Silver.811ae28c.svg" alt="" />
                        <p>{props.profil.statistics.grade_counts.sh}</p>
                    </li>
                    <li>
                        <img src="https://osu.ppy.sh/assets/images/GradeSmall-S.3b4498a9.svg" alt="" />
                        <p>{props.profil.statistics.grade_counts.s}</p>
                    </li>
                    <li>
                        <img src="https://osu.ppy.sh/assets/images/GradeSmall-A.d785e824.svg" alt="" />
                        <p>{props.profil.statistics.grade_counts.a}</p>
                    </li>
                </ul>
            </div>
            <aside>

            </aside>
            {/* <p>{props.profil.statistics.hit_accuracy.toFixed(2)}</p> */}
        </div>
    )
}

export default ProfilContainer;