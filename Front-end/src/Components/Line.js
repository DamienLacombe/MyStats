import React from 'react';

const Line = ({stats}) => {
    return (
  
      Object.entries(stats[1].interval).length < 4 ? (
        <div className='line'>
            <div className='bg-blue'>{stats[0]}</div>
            <div>{stats[1].interval.min}</div>
            <div>{stats[1].interval.average}</div>
            <div>{stats[1].interval.max}</div>
        </div>
      ) : (
        <div className='line'>
            <div className='bg-blue'>{stats[0]}</div>
            <div></div>
            <div>{stats[1].interval}</div>
            <div></div>
        </div>
        
      )
    
    
    
  )
}

export default Line;