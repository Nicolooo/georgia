import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Count from '../../comp/Abk/counter'
const data = {
    "counts": [
        {
            "id": "001",
            "label": " DISPLACED",
            "number": "250.000",
            "duration": "2"
        },
        {
            "id": "002",
            "label": "DEAD",
            "number": "4.000",
            "duration": "2"
        },
        {
            "id": "003",
            "label": "WOUNDED",
            "number": "10.000",
            "duration": "2"
        },
       
    ]
}
const abkhazia = () => {
    return (
        <>
            <Menu />
        <div className="abkhazia-wrapper">
        <div className="abkhazia-title"> 
        <h1>ABKHAZIA</h1>
        </div>
            
            <div className="abkhazia-stats">
            {data.counts.map(count => <Count key={count.id} data={count}/>)}
            </div>
            <div className="abkhazia-content">
                
            </div>
            <div className="abkhazia-images">

            </div>
        </div>
        </>
    )
}

export default abkhazia
