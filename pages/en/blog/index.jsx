import React from 'react'
import Link from 'next/link'
import SEO from '../../../comp/SEO/title'
import Menu from '../../../comp/Menu/Menu'
function News({ posts }) {
  return (
    <>
    <SEO title="Blog" />
    <Menu LANG="en" />
    <div className="blog-container container">
      <div className="blog-header">
        <h1 className="blog-title">შლოგი</h1>
      </div>
      <div className="blog-card row">
      {posts.map((post) => (

       <Link href={`/en/blog/${post.id}`} key={post.id}>
        <a className="blog-card-content">
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