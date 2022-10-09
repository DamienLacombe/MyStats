import React, { useEffect, useState } from 'react'
import Map from './Map';
import "../css/map.css";
import { triMap } from '../Utils/CreateStats';
const MapContainer = (props) => {

    const [maps, setMaps] = useState()

    useEffect(()=> {
        setMaps(triMap(props.maps))
    }, [])
    useEffect(()=> {
        setMaps(triMap(props.maps))
    }, [props])


    return (
        <div className='maps-container'>
            {
                maps?.map((map) => {
                    return <Map key={map.id} mapInfo={map}/>
                })
            }
        </div>
    )
}

export default MapContainer;