import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Inv = ({title,view}) => {
    return (
        <div className="inv-wrapper container-fluid">
            <h2>{title}</h2>
            <div className="inv-video ratio">
            <iframe width="1060" height="615" src="https://www.youtube.com/embed/R3zIJ01-Vt8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
            </div>
            <Link href="#"><a className="inv-more">{view}</a></Link>
        </div>
    )
}

export default Inv
