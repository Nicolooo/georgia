import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Inv = ({title,ll}) => {
    return (
        <div className="inv-wrapper container-fluid">
            <h2>{title}</h2>
            <div className="inv-video ratio">
              <Image src="/1801.jpeg" alt="wepe" className="interview-image" width={650} height={480}/>
            </div>
            <Link href="https://www.youtube.com/channel/UCUvGWCPrEt8djat0s5V4b_w"><a className="inv-link btn">{ll}</a></Link>
        </div>
    )
}

export default Inv
