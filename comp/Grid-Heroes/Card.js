import React from 'react'
import Image from 'next/image'
const Card = ({name,title,img}) => {
    return (
    <div className="heroes-card">
        <Image src={img}
        loading="lazy" title={name}  width="170" height="200" alt={name} />
      <div className="heroes-card-text">
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
    )
}

export default Card
