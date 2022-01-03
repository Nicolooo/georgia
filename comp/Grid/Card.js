import React from 'react'
import Link from 'next/link'
const Card = ({title,desc,links}) => {
    return (
      <div className="grid-wrapper" data-aos="fade-up"
      data-aos-anchor-placement="center-bottom" data-aos-delay="100">
        <div className="grid-card">
          <h3>{title}</h3>
          <div className="btn grid-buton"><Link href={links}><a>{desc}</a></Link></div>
        </div>
      </div>
    )
}

export default Card
