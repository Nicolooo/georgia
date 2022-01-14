import React from 'react'

const Card = ({name,title,img}) => {
    return (
    <div className="heroes-card">
        <img src={img}
        loading="lazy" title="..." alt={name} width="684" height="742"/>
      <div className="heroes-card-text">
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
    )
}

export default Card
