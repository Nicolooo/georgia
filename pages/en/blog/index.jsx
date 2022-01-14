import React from 'react'
import Link from 'next/link'
import SEO from '../../../comp/SEO/title'
import Menu from '../../../comp/Menu/Menu'
function News({ posts }) {
  return (
    <>
    <SEO title="News" />
    <Menu LANG="en" />
    <div className="news-container container">
      <div className="news-header">
        <h1 className="news-title">შლოგი</h1>
      </div>
      <div className="news-card row">
      {posts.map((post) => (

       <Link href={`/en/news/${post.id}`} key={post.id}>
        <a className="news-card-content">
          <h2>{post.title}</h2>
          <p>{post.author}</p>
          <p>{post.date}</p>
        </a>
        </Link>
      ))}
      </div>
    </div>
      </>
  )
}
export async function getStaticProps() {
  const res = await fetch('https://georgian-liberty.herokuapp.com/blog')
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}

export default News