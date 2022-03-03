import React from 'react'

const Staff = ({names,ok}) => {
    return (
        <div className="container row">
            <div className="about-col">
                <h3 className="abt-h">{ok.title}</h3>
                <h4 className="abt-names">Nikusha Sirbiladze</h4>
                <h4 className="abt-names">Giorgi Kakhani</h4>
                <h4 className="abt-names">Nika Khabelashvili</h4>
            </div>
            <div className="about-col">
                <h3 className="abt-h">Special thanks to</h3>
                <h4 className="abt-names">Roin Metreveli</h4>
                <h4 className="abt-names">Levan ghambashidze</h4>
                <h4 className="abt-names">Lasha Chantladze</h4>
            </div>
        </div>
    )
}

export default Staff
