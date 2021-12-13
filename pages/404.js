import React from "react";
import SEO from '../comp/SEO/title'
import Link from 'next/link'
const Notfound = () => {
    return (
        <>
        <SEO title="404" />
        <div className="four" title="404" data-aos="slide-right">
            404
            <Link href="/"><a>Back To Homepage</a></Link>
        </div>
        </>
    )
}

export default Notfound
