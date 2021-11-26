import React from 'react'
import Image  from 'next/image'
import MapImage from '../../public/map.webp'
const Map = () => {
    return (
        <div className="map-wrapper">
            <Image src={MapImage} alt="Map" width={1000} height={500}/>
        </div>
    )
}

export default Map
