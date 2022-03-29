// Code is Poetry
import React from 'react'
import { ArrowRight } from 'react-feather'
import { ArrowLeft } from 'react-feather'
import Link from 'next/link' 
const Next = ({first,second}) => {
    // Change url
    const link = "/en/"
  return (
    <div className="next-wrapper">
        <div className="next right">
            <div className="next-text">
                <h5>{first}</h5>
                <Link href={link+first}>
                        <div className="next-icon">
                        <ArrowRight />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="next left">
                <div className="next-text">
                    <h5>{second}</h5>
                    <Link href={link+second}>
                        <div className="next-icon">
                        <ArrowLeft />
                        </div>
                    </Link>
                </div>
            </div>
    </div>
  )
}

export default Next 