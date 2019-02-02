import React from 'react'
import Router from 'next/router'
import {MDXProvider} from '@mdx-js/tag'
import {withRouter} from 'next/router'
import {pageview} from '../lib/gtag'
import GlobalStyles from './global-styles'
import Head from './head'
import Container from './container'
import Main from './main'
import ExternalLink from './external-link'
import PermalinkModal from './permalink-modal'

Router.events.on('routeChangeComplete', url => pageview(url))

const Page = ({router}) => (
  <MDXProvider
    components={{
      a: ExternalLink
    }}
  >
    <GlobalStyles />
    <Head />
    {router.query.permalink && (
      <PermalinkModal permalink={router.query.permalink} />
    )}
    <Container>
      <Main />
    </Container>
  </MDXProvider>
)

export default withRouter(Page)
