import React from 'react'
import Card from './Card'
const Hrid = () => {
    return (
        <div className="heroes-wrapper container-fluid">
            <h2>NATIONAL HEROES</h2>
            <div className="container row">
                <Card title="Guram Gabiskiria" title="MAYOR OF SOKHUMI"/>
                <Card title="GIORGI ANTSUXELIDZE" title="JUNIOR SERGEANT OF THE GEORGIAN ARMED FORCE"/>
                <Card title="ZHIULI SHARTAVA" title="HEAD OF THE COUNCIL OF MINISTERS OF THE AUTONOMOUS REPUBLIC OF ABKHAZIA"/>
                <Card title="ALEKSANDRE ONIANI" title="JUNIOR SERGEANT OF THE GEORGIAN ARMED FORCE"/>
                <Card title="GENO ADAMIA" title="MAJOR GENERAL OF THE GEORGIAN ARMED FORCES"/>
                <Card title="ZURAB IARAJULI" title="SENIOR LEUTENANT OF THE GEORGIAN AIR FORCE"/>
            </div>
        </div>
    )
}

export default Hrid
