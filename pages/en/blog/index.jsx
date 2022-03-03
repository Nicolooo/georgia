import React from 'react'
import Link from 'next/link'
import SEO from '../../../comp/SEO/title'
import Menu from '../../../comp/Menu/Menu'
const NOTION_BLOG_ID = process.env.NOTION_BLOG_ID || "f2098184a6f644b4bd07d77960648b25";
function News({ posts }) {
  return (
    <>
    <SEO title="Blog" />
    <Menu LANG="en" />
    <div className="blog-container container">
      <div className="blog-header mb-5">
        <h1 className="blog-title">ბლოგი</h1>
      </div>
      <div className="blog-card row">
      {posts.map((post) => (

       <Link href={`/en/blog/${post.slug}`} as={`/en/blog/${post.slug}`} key={`/ge/blog/${post.slug}`}>
        <a className="blog-card-content">
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <p>{post.slug}</p>
        </a>
        </Link>
      ))}
      </div>
    </div>
      </>
  )
}
export default News

export const getAllPosts = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
};

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}