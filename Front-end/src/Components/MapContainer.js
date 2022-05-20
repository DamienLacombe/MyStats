import React from 'react'
import Map from './Map';
import "../css/map.css"
const MapContainer = (props) => {

    

    return (
        <div className='maps-container'>
            {
                props.maps.map((map, index) => {
                    return <Map key={index} mapInfo={map}/>
                })
            }
        </div>
    )
}

export default MapContainer