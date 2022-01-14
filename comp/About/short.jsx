import React from 'react'
import Link from 'next/link'
const Short = ({title,p,link}) => {
    return (
        <div className="about-short-wrap container-fluid">
            <h1 className="reveal about-us-short-h1">{title}</h1>
            <p className="reveal about-us-short-p">{p}</p>
            <Link href="/en/about"><a className="about-us-short-link">{link}</a></Link>
        </div>
    )
}

export default Short
