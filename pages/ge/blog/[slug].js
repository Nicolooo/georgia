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
      paths: table.map((row) => `/ge/blog/${row.slug}`),
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
    <div className="content">
      <SEO title={post.title} />
      <Menu LANG="en"/>
      <Switcher title="Ge" link={`/ge/blog/${post.slug}`}/>
      <Back link="ge/blog" title="Back"/>
      <div className="post-page container">
          <div className="blog-single">
              <h2>{post.title}</h2>
              <div className="blog-single-info">
              <h3>თარიღი: {post.date}</h3>
              <h3>საკითხავი დრო: {post.rt}(წუთი)</h3>
              </div>
              <p className="post-text"><NotionRenderer blockMap={blocks} /></p>
          </div>
        </div>
    </div>
  );
};

export default BlogPost;
