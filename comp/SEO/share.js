import React from 'react'
import { Facebook, Twitter } from "react-feather"
import Link from "next/link"
const Share = ({url}) => {
    const fb = "https://www.facebook.com/sharer.php?u=https%3A%2F%2Fgeorgianliberty.com"
    const tw =  "https://twitter.com/intent/tweet?url=https://georgianliberty"
    console.log(fb+url)
    return (<>
    <h3 className="share-title">Share Article</h3>
        <div className="share-wrapper">
            <Link href={fb + url}><a className="footer-icon"><Facebook /></a></Link>
            <Link href={tw +url}><a className="footer-icon"><Twitter /></a></Link>
        </div>
        </>
    )
}

export default Share
