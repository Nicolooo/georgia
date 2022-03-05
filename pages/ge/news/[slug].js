import { NotionRenderer, BlockMapType } from "react-notion";
import Switcher from '../../../comp/LangSwitcher/Switcher';
import Back from '../../../comp/LangSwitcher/Back';
import { getAllPosts, Post } from "./index";
import React from 'react'
import Menu from '../../../comp/Menu/Menu'
import SEO from '../../../comp/SEO/title'
export async function getStaticPaths() {
    const table = await getAllPosts();
    return {
      paths: table.map((row) => `/ge/news/${row.slug}`),
      fallback: true,
    };
  }
  
export async function getStaticProps({
  params: { slug },
}) {
  const posts = await getAllPosts();
  const post = posts.find((t) => t.slug === slug);
  const blocks = await fetch(
    `https://notion-api.splitbee.io/v1/page/${post.id}`
  ).then((res) => res.json());

  return {
    props: {
      blocks,
      post,
    },
  };
}
const BlogPost = ({post,blocks})=> {
  if (!post) return null;
  return (
    <>
    <SEO title={post.title} />
    <Menu LANG="Ge"/>
    <Back title="Back" link="ge"/>
    <Switcher title="Ge" link={`/ge/news/${post.slug}`}/>
    <div className="post-page">
        <div className="news-single">
            <h2>{post.title}</h2>
            <div className="news-single-info">
            <h3>თარიღი:{post.date}</h3>
            </div>
            <p><NotionRenderer blockMap={blocks} /></p>
        </div>
      </div>
      </>
  );
};

export default BlogPost;
