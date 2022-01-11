import React from 'react'
import Link from "next/link"

const Switcher = ({title,link}) => {
    return (
        <div className="switcher">
            <Link href={link}>
                <a>{title}</a>
                </Link>
        </div>
    )
}

export default Switcher
