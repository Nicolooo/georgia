import React from 'react'
import Menu from '../../../comp/Menu/Menu'
import SEO from '../../../comp/SEO/title'
function Post({ post }) {
    return (
      <>
      <SEO title={post.title} />
      <Menu LANG="en"/>
      <div className="post-page">
          <div className="news-single">
              <h2>{post.title}</h2>
              <div className="news-single-info">
              <h3>Date:{post.date}</h3>
              </div>
              <p>{post.content}</p>
          </div>
        </div>
        </>
      )
  }
  export async function getStaticPaths() {
        const res = await fetch('https://georgian-liberty.herokuapp.com/news')
        const posts = await res.json()
        const paths = posts.map((post) => ({
        params: {id: post.id.toString()},
        }))
        return { paths, fallback: false }
  }
export async function getStaticProps({ params }) {
  const res = await fetch(`https://georgian-liberty.herokuapp.com/news/${params.id}`)
  const post = await res.json()
  return { props: { post } }
}
export default Post