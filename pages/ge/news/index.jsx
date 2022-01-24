import React from 'react'
import Link from 'next/link'
import SEO from '../../../comp/SEO/title'
import Menu from '../../../comp/Menu/Menu'
import Switcher from '../../../comp/LangSwitcher/Switcher'
function News({ posts,latest }) {
  return (
    <>
     <Switcher title="En" link="/en/news"/>
    <SEO title="News" />
    <Menu LANG="en" />
    <div className="news-container container">
      <div className="news-header">
        <h1 className="news-title">News</h1>
        <div className="news-latest">
              <h2 className="news-latest-title">{latest[0].title}</h2>
              <p>{latest[0].content}</p>
        </div>
      </div>
      <div className="news-card">
        <h3 className="news-other">Other News</h3>
        <div className="row">
      {posts.map((post) => (

       <Link href={`/en/news/${post.id}`} key={post.id}>
        <a className="news-card-content">
          <h2>{post.title}</h2>
          <p>{post.date}</p>
        </a>
        </Link>
      ))}
        </div>
      </div>
    </div>
      </>
  )
}
export async function getStaticProps() {
  const res = await fetch('https://georgian-liberty.herokuapp.com/news')
  const posts = await res.json()

  // Latest posts
  const les = await fetch('https://georgian-liberty.herokuapp.com/latest')
  const latest = await les.json()
  return {
    props: {
      posts,
      latest
    },
  }
}

export default News