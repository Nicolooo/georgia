import React from 'react'
import Link from 'next/link'

const Inv = (LinkF) => {
    // To do: pass link props
    return (
        <div className="inv-wrapper container-fluid">
            <h2>INTERVIEWS</h2>
            <div className="inv-video ratio">
                <iframe width="100%" src="https://www.youtube.com/embed/R3zIJ01-Vt8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>
            <Link href="as"><a className="inv-link btn">View All interviews</a></Link>
        </div>
    )
}

export default Inv
