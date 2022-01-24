import React from 'react'
import Link from 'next/link'

const Inv = (LinkF) => {
    // To do: pass link props
    return (
        <div className="inv-wrapper container-fluid">
            <h2>INTERVIEWS</h2>
            <div className="inv-video ratio">
              <img src="/1801.webp" alt="wepe" className="interview-image"/>
            </div>
            <Link href="as"><a className="inv-link btn">View All interviews</a></Link>
        </div>
    )
}

export default Inv
