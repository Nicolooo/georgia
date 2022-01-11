import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Count from '../../comp/Samachablo/counter'
const data = {
    "counts": [
        {
            "id": "001",
            "label": " DISPLACED",
            "number": "120.000",
            "duration": "2"
        },
        {
            "id": "002",
            "label": "DEAD",
            "number": "1.000",
            "duration": "2"
        },
        {
            "id": "003",
            "label": "WOUNDED",
            "number": "4.000",
            "duration": "2"
        },
       
    ]
}
const samachablo = () => {
    return (
        <>
            <Menu />
            <Switcher title="GE" link="/ge/samachablo"/>
        <div className="samachablo-wrapper">
        <div className="samachablo-title"> 
        <h1>SAMACHABLO</h1>
        </div>
            
            <div className="samachablo-stats">
            {data.counts.map(count => <Count key={count.id} data={count}/>)}
            </div>
            <div className="samachablo-content">
                
            </div>
            <div className="samachablo-images">

            </div>
        </div>
        </>
    )
}

export default samachablo
