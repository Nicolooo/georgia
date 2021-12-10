import React from 'react'

const Card = ({body,title}) => {
    return (
        <div className="contact-card" data-aos="fade-down">
            <h4 className="contact-card-head">{title}</h4>
            <p className="contact-card-body">{body}</p>
        </div>
    )
}

export default Card
