import React from 'react'
import Head from 'next/head'

export function AppHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="stylesheet" href="https://use.typekit.net/kbe1tld.css" />
      <script src="https://apps.elfsight.com/p/platform.js" ></script>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
  )
}
