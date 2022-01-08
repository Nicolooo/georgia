import React from 'react'
import Link from 'next/link'
import SEO from '../comp/SEO/title'
const admin = () => {
    return (
        <div className="wp-admin">
        <SEO title="Wp-Admin"/>
            <h1>This is built on Next.js not Wordpress </h1>
            <p>To see our techstack see more About the <Link href="https://georgianliberty.xyz"><a className="ll">Techstack</a></Link> </p>
        </div>
    )
}

export default admin
