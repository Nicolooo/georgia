import React from 'react'
import Head from 'next/dist/shared/lib/head'
const Title = ({title, meta}) => {
    return (
        <Head>
        <title>{title}</title>
        <meta name="description" content={meta} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
}

export default Title
