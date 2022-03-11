import React from 'react'
import Link from 'next/link'
import SEO from '../../../comp/SEO/title'
import Menu from '../../../comp/Menu/Menu'
import Switcher from '../../../comp/LangSwitcher/Switcher'
function News({ posts}) {
  return (
    <>
     <Switcher title="Ge" link="/ge/news"/>
    <SEO title="News" />
    <Menu LANG="En" />
    <div className="news-container container">
      <div className="news-header">
        <h1 className="news-title">News</h1>
      </div>
      <div className="news-card">
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
  const res = await fetch('https://georgian-liberty.herokuapp.com/en')
  const posts = await res.json()
  return {
    props: {
      posts
    },
  }
}

export default News