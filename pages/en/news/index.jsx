/* eslint-disable react/jsx-key */
import React from 'react'
import Link from 'next/link'
import SEO from '../../../comp/SEO/title'
import Menu from '../../../comp/Menu/Menu'
function News({ posts }) {
  return (
    <>
    <SEO title="News" />
    <Menu LANG="en" />
    <div className="news-container">
      <div className="news-header">
        <h1 className="news-title">News</h1>
      </div>
      <div className="news-card">
      {posts.map((post) => (

       <Link href={`/en/news/${post.id}`}>
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