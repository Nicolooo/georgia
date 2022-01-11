import React from 'react'
import Head from 'next/dist/shared/lib/head'
const Title = ({title, meta}) => {
    return (
        <Head>
        <title>{title}</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content={meta} />
        <link rel="icon" href="https://i1.wp.com/www.georgianliberty.support/wp-content/uploads/2021/09/cropped-wqedqwd.png?fit=32%2C32&ssl=1" />
      </Head>
    )
}

export default Title
