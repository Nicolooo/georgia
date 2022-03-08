import React from 'react'
import Link from 'next/link'
import SEO from '../comp/SEO/title'
const index = () => {
  return (
    <div className="lang-wrap">
      <SEO title="Georgian Liberty - Stand Against Illegal Occupation" />
      <h2 className="home-title">
        <span>Choose Language</span>
        <span>აირჩიე ენა</span>
      </h2>
      <div className="lang-buttons">
      <Link href="/ge"><a>GE</a></Link>
      <Link href="/en"><a>EN</a></Link>
      </div>
    </div>
  )
}

export default index
