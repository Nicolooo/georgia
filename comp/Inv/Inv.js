import React from 'react'
import Link from 'next/link'

const Inv = (LinkF) => {
    // To do: pass link props
    return (
        <div className="inv-wrapper">
            <h2>INTERVIEWS</h2>
        <div className="inv-video">
            <iframe width="1175" height="640" src="https://www.youtube.com/embed/R3zIJ01-Vt8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
            <Link href="as"><a className="inv-link">View All interviews</a></Link>
        </div>
    )
}

export default Inv
