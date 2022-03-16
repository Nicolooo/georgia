import React from 'react'
import { gql, GraphQLClient } from 'graphql-request'
import Menu from '../../../comp/Menu/Menu'
import SEO from '../../../comp/SEO/title'
import Back from '../../../comp/LangSwitcher/Back'
import Switcher from '../../../comp/LangSwitcher/Switcher'
import Image from 'next/image'
function Post({ post }) {
  const linka = '/ge/news/' + post.slug
    return (
      <>
      <SEO title={post.title} />
      <Menu LANG="En" />
      <Back title="Back" link="en/news"/>
      <Switcher title="Ge" link={linka}/>
      <div className="post-page">
          <div className="news-single">
              <h2>{post.title}</h2>
              <p>{post.content.text}</p>
              <Image src={post.coverImage.url} alt={post.title} height="500" width="1000"/>
          </div>
        </div>
        </>
      )
  }

  export const getServerSideProps = async (pageContext) => {
  const url = "https://api-eu-central-1.graphcms.com/v2/cl0ttpxnm045e01xt6bqihsko/master"
    const graphQLClient = new GraphQLClient(url, {
      headers: {
        "Authorization": `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDc0NTA4ODYsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NsMHR0cHhubTA0NWUwMXh0NmJxaWhza28vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMjAzMGFiNmItOWI3NS00MzMyLTliMDUtMTM1YTMzNTQ1N2VjIiwianRpIjoiY2thNWoyZW9iMDN0YzAxd2gwZGZkNjdyeSJ9.arzgWoD2d9cl0Qp96hbEXNG4WGncAnjKMaTeBZ9QnLT_xKKCmNv3jVD47KXDmwLt0LXaAdxC-z7TH3SH7IJi1SZF1uSyvZvtjurjRY2GSyyJbELhGfnqmdsicRBw6jjCKBaHVldIIUUd3GXHUjAEn_BGIt5JRfrSnBbnj0U6CJAOVFvP9-BCbGCVKqojg8OsobKlnY-1e0wmgctnDusnIoY4zGNXgTWd9de_B2-QXSkT8wGNGNq71aa8SXkdYZuXlFpBNeGRtTlduoASkNfrxTgikakphYDnvs8ow-hGbk3nEcMHQKT56eHw7c7PV_rwmhQG4NZ6rTBbHf-KDBIXUDR_7CsZFJo2MhE9NsJtstEcqiHcrw1TGrljCwJIQeAHX7lRuj3c_t8yiJ6n2DgsHeRZpwljFq6e_QMrabV3kSJZq2w5MzQAjAyOhsx3db4R-oSaImnvhR15xljsN5_rSSaj712d0ZKj7qCeGQCnuL9hZPJ1okYcSLc1TIL6YiBM5n8y3sUogvoBZZL8jW_xvt7qbt8gtvEVxoBf2OKLACMFCStaV36oaDiwEd4YyUaloJbdhuS9MzgNHhTS1oPPvFezk026Z2AV4eiPVR4-6ee1pZBnWgYr-kQoq5T2EEqihYFDe-M8QjUKYkNG7_2ukDfFzFclZZYbLIjEL5WdjiY`
    }
    })
    const pageSlug = pageContext.query.slug

    const query = gql`
    query($pageSlug: String!) {
      eN(where: {
        slug: $pageSlug
      }) {
        id,
        title,
        content{
          text
        },
        slug,
        tags,
        coverImage{
          url
        }
      }
    }
    `

    const variables = {
        pageSlug,
    }

    const data = await graphQLClient.request(query, variables)
    const post = data.eN

    return {
        props: {
            post
        }
    }
}
export default Post