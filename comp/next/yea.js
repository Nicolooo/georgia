// Code is Poetry
import React from 'react'
import { ArrowRight } from 'react-feather'
import { ArrowLeft } from 'react-feather'
import Link from 'next/link' 
const Next = ({options}) => {
    // Change url
  return (
    <div className="next-wrapper">
        <div className="next right">
            <div className="next-text">
                <h5>{options.first_title}</h5>
                <Link href={options.first_link}>
                        <div className="next-icon">
                        <ArrowRight />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="next left">
                <div className="next-text">
                    <h5>{options.second_title}</h5>
                    <Link href={options.second_link}>
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