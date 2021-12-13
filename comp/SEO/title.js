import React from 'react'
import Head from 'next/dist/shared/lib/head'
const Title = ({title, meta}) => {
    return (
        <Head>
        <title>{title}</title>
        <meta name="description" content={meta} />
        <link rel="icon" href="https://www.georgianliberty.support/wp-content/uploads/2021/09/cropped-wqedqwd.png" />
      </Head>
    )
}

export default Title
