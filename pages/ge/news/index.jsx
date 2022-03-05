import React from 'react'
import Link from 'next/link'
import SEO from '../../../comp/SEO/title'
import Menu from '../../../comp/Menu/Menu'
import Switcher from '../../../comp/LangSwitcher/Switcher'
const NOTION_BLOG_ID = process.env.NOTION_BLOG_ID || "5f54f91c90e14df19e21041e93245eeb";
function News({ posts}) {
  return (
    <>
     <Switcher title="Ge" link="/ge/news"/>
    <SEO title="News" />
    <Menu LANG="Ge" />
    <div className="news-container container">
      <div className="news-header">
        <h1 className="news-title">ნიუსი</h1>
      </div>
      <div className="news-card">
        <div className="row">
        {posts.map((post) => (
          <Link href={`/ge/news/${post.slug}`} as={`/ge/news/${post.slug}`} key={`/ge/news/${post.slug}`}>
          <a className="news-card-content">
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.slug}</p>
          </a>
          </Link>
        ))}
        </div>
      </div>
    </div>
      </>
  )
}
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

export default News