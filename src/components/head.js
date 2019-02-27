import React from 'react'
import NextHead from 'next/head'
import {titleArray, description} from '../lib/meta'
import {GA_TRACKING_ID} from '../lib/gtag'

const Head = ({type}) => {
  const title = titleArray[type].join('')
  const imageUrl = `https://factfulness-source.chibicode.com/static/images/og-${type}.png`
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/images/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/images/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/images/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/images/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:locale" content="ja_JP" />
      <link rel="canonical" href="https://factfulness-source.chibicode.com/" />
      <meta
        property="og:url"
        content="https://factfulness-source.chibicode.com/"
      />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chibicode" />
      <meta name="twitter:creator" content="@chibicode" />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"name":"${title}","@type":"WebSite","url":"https://factfulness-source.chibicode.com/","image":"${imageUrl}","headline":"${title}","@context":"http://schema.org"}`
        }}
      />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_TRACKING_ID}', { 'anonymize_ip': true });`
        }}
      />
    </NextHead>
  )
}

export default Head
