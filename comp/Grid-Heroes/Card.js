import React from 'react'
const Card = ({name,title,img}) => {
    return (
    <div className="heroes-card">
        <img src={img}
        loading="lazy" title={name}  width="684" height="542" alt={name} />
      <div className="heroes-card-text">
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
    )
}

export default Card
