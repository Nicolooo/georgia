import React from 'react'
import Link from 'next/link'
const index = () => {
  return (
    <div className="lang-wrap">
      <h2 class="home-title">
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
