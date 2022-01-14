import React from 'react'
import Card from './Card'
import Storage from '../../data/Content'
const Hrid = () => {
    return (
        <div className="heroes-wrapper container-fluid">
            <h2 className='heroes-header'>NATIONAL HEROES</h2>
            <div className="container row">
                <Card title="Guram Gabiskiria" title="MAYOR OF SOKHUMI" img={Storage.photos.Ggabiskria}/>
                <Card title="GIORGI ANTSUXELIDZE" title="JUNIOR SERGEANT OF THE GEORGIAN ARMED FORCE" img={Storage.photos.Gant}/>
                <Card title="ZHIULI SHARTAVA" title="HEAD OF THE COUNCIL OF MINISTERS OF THE AUTONOMOUS REPUBLIC OF ABKHAZIA" img={Storage.photos.shartava}/>
                <Card title="ALEKSANDRE ONIANI" title="JUNIOR SERGEANT OF THE GEORGIAN ARMED FORCE" img={Storage.photos.oniani}/>
                <Card title="GENO ADAMIA" title="MAJOR GENERAL OF THE GEORGIAN ARMED FORCES" img={Storage.photos.adamia}/>
                <Card title="ZURAB IARAJULI" title="SENIOR LEUTENANT OF THE GEORGIAN AIR FORCE" img={Storage.photos.iarauli}/>
            </div>
        </div>
    )
}

export default Hrid
