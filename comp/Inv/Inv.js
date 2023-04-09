import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Inv = ({title,view}) => {
    return (
        <div className="inv-wrapper container-fluid">
            <h2>{title}</h2>
            <div className="inv-video ratio">
            <iframe width="500" height="450" src="https://www.youtube.com/embed/ETvKT5I-BXE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <Link href="https://www.youtube.com/channel/UCUvGWCPrEt8djat0s5V4b_w"><a className="inv-more">{view}</a></Link>
        </div>
    )
}

export default Inv
