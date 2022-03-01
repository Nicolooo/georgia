import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Inv = ({LinkF,title}) => {
    // To do: pass link props
    return (
        <div className="inv-wrapper container-fluid">
            <h2>{title}</h2>
            <div className="inv-video ratio">
              <Image src="/1801.jpeg" alt="wepe" className="interview-image" width={650} height={480}/>
            </div>
            <Link href="as"><a className="inv-link btn">View All interviews</a></Link>
        </div>
    )
}

export default Inv
