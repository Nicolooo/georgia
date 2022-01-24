import React from 'react'
import Card from './card'
import Link from 'next/link'
const Section = ({ge}) => {
  return(
    <div className="news-home-wrapper">
        <div className="news-home-title">
            <h3>Latest News</h3>
        </div>
        <div className="news-home-content">
                <Card />
                <Card />
                <Card />
            </div>
        <Link href={ge}><a className="inv-link btn">View All News</a></Link>
    </div>
    
  )
}

export default Section