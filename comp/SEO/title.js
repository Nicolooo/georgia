import React from 'react'
import Head from 'next/dist/shared/lib/head'
const Title = ({title, meta}) => {
    return (
        <Head>
        <title>{title}</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content={meta} />
        <link rel="icon" href="https://raw.githubusercontent.com/Nicolooo/Georgianlibertycontent/main/wqedqwd.png" />
      </Head>
    )
}

export default Title
