import React from 'react'

const Card = ({name,title,img}) => {
    return (
    <div className="heroes-card">
        <img src="https://i2.wp.com/www.georgianliberty.support/wp-content/uploads/2021/08/1992.webp?resize=1024%2C745&ssl=1"
        loading="lazy" title="..." alt="..." width="684" height="742"/>
      <div className="heroes-card-text">
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
    )
}

export default Card
