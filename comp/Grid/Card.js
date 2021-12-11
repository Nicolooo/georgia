import React from 'react'
import Link from 'next/link'
const Card = ({title,desc,links}) => {
    return (
      <div className="grid-column">
        <div className="grid-card">
          <h3>{title}</h3>
          <div className="grid-buton"><Link href={links}><a>{desc}</a></Link></div>
        </div>
      </div>
    )
}

export default Card
