import React from 'react'
import {gql, GraphQLClient} from 'graphql-request' // GQL
import Link from 'next/link'
import SEO from '../../../comp/SEO/title'
import Menu from '../../../comp/Menu/Menu'
import Switcher from '../../../comp/LangSwitcher/Switcher'
function News({ posts }) {
  
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
       <Link href={`/en/news/${post.slug}`} key={post.slug}>
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
export const getStaticProps = async () => {
  const url = "https://api-eu-central-1.graphcms.com/v2/cl0ttpxnm045e01xt6bqihsko/master"
  const graphQLClient = new GraphQLClient(url, {
      headers: {
          "Authorization": `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDc0NTA4ODYsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NsMHR0cHhubTA0NWUwMXh0NmJxaWhza28vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMjAzMGFiNmItOWI3NS00MzMyLTliMDUtMTM1YTMzNTQ1N2VjIiwianRpIjoiY2thNWoyZW9iMDN0YzAxd2gwZGZkNjdyeSJ9.arzgWoD2d9cl0Qp96hbEXNG4WGncAnjKMaTeBZ9QnLT_xKKCmNv3jVD47KXDmwLt0LXaAdxC-z7TH3SH7IJi1SZF1uSyvZvtjurjRY2GSyyJbELhGfnqmdsicRBw6jjCKBaHVldIIUUd3GXHUjAEn_BGIt5JRfrSnBbnj0U6CJAOVFvP9-BCbGCVKqojg8OsobKlnY-1e0wmgctnDusnIoY4zGNXgTWd9de_B2-QXSkT8wGNGNq71aa8SXkdYZuXlFpBNeGRtTlduoASkNfrxTgikakphYDnvs8ow-hGbk3nEcMHQKT56eHw7c7PV_rwmhQG4NZ6rTBbHf-KDBIXUDR_7CsZFJo2MhE9NsJtstEcqiHcrw1TGrljCwJIQeAHX7lRuj3c_t8yiJ6n2DgsHeRZpwljFq6e_QMrabV3kSJZq2w5MzQAjAyOhsx3db4R-oSaImnvhR15xljsN5_rSSaj712d0ZKj7qCeGQCnuL9hZPJ1okYcSLc1TIL6YiBM5n8y3sUogvoBZZL8jW_xvt7qbt8gtvEVxoBf2OKLACMFCStaV36oaDiwEd4YyUaloJbdhuS9MzgNHhTS1oPPvFezk026Z2AV4eiPVR4-6ee1pZBnWgYr-kQoq5T2EEqihYFDe-M8QjUKYkNG7_2ukDfFzFclZZYbLIjEL5WdjiY`
      }
  })

  const videosQuery = gql`
  query{
    en{
      id,
      title,
      content{
        text
      }
      slug,
      tags
    }
  }
`
  const data = await graphQLClient.request(videosQuery)
  const posts = data.en
  return {
      props: {
          posts,
      }
  }
}

export default News