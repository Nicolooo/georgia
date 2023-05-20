import React from 'react'
import Image from 'next/image'
const Card = ({name,title,img,link,text}) => {
    return (
    <div className="heroes-card">
        <Image src={img}
        loading="lazy" title={name}  width="300" height="300" alt={name} />
      <div className="heroes-card-text">
        <h3>{name}</h3>
        <p>{title}</p>
        <a href={link}>{text}</button>
      </div>
    </div>
    )
}

export default Card
