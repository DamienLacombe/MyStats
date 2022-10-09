import React, { useEffect, useState } from 'react'
import Line from './Line';

const Array = ({stats, smallDevice}) => {

    const [arrStats, setArrStats] = useState(Object.entries(stats))
    
    useEffect(() => {
        setArrStats(Object.entries(stats))
    }, [stats])
    return (
        <div className='ArrStats'>
            
            <div className='interval'>
                <div className='bg-blue radius-top-left'></div>
                <div className='bg-blue'>Min</div>
                <div className='bg-blue'>Moy</div>
                <div className='bg-blue radius-top-right'>Max</div>
            </div> 
           
            {
                
                arrStats.map((lineStats, index) => {
                    return  <Line stats={lineStats} key={index}/>
                })
            }
        </div>
    )
}

export default Array;