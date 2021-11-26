import React from 'react'
const Headline = ({title,text,lnk}) => {
    return (
        <div className="abt-title-wrap">
            <h2 className="abt-title">{title}</h2>
            <p className="abt-text">{text}<span className="abt-red">{lnk}</span></p>
        </div>
    )
}

export default Headline
