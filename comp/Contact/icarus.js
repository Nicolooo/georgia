import React from 'react'
import Link from 'next/link'
const Icarus = ({title,link}) => {
  return (
    <>
    <Link href={link} passHref >
        <div className="message-vol">
            <h3>{title}</h3>
        </div>
    </Link>
    </>
  )
}

export default Icarus