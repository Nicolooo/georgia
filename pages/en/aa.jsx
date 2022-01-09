import React from 'react'
function News({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.main}</li>
      ))}
    </ul>
  )
}
export async function getStaticProps() {
  const res = await fetch('https://tamada-api.herokuapp.com/tamada')
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}

export default News