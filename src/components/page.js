import React from 'react'
import Router from 'next/router'
import {MDXProvider} from '@mdx-js/tag'
import {pageview} from '../lib/gtag'
import GlobalStyles from './global-styles'
import Head from './head'
import Container from './container'
import Main from './main'
import ExternalLink from './external-link'

Router.events.on('routeChangeComplete', url => pageview(url))

const Page = () => (
  <MDXProvider
    components={{
      a: ExternalLink
    }}
  >
    <GlobalStyles />
    <Head />
    <Container>
      <Main />
    </Container>
  </MDXProvider>
)

export default Page
