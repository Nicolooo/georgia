import React from 'react'
import Link from 'next/link'
const Short = () => {
    return (
        <div className="about-short-wrap">
            <h1 className="reveal about-us-short-h1">About The Project</h1>
            <p className="reveal about-us-short-p">Georgian Liberty is a non-profit, non-governmental organization founded in September 2021 by three teenagers.<br/> Our goal is to raise awareness about conflict and occupied territories in Georgia, both locally and globally.</p>
            <Link href="/about"><a className="about-us-short-link">Learn More</a></Link>
        </div>
    )
}

export default Short
