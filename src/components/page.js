import React from 'react'
import Router, {withRouter} from 'next/router'
import {pageview} from '../lib/gtag'
import GlobalStyles from './global-styles'
import Head from './head'
import Container from './container'
import Main from './main'
import PermalinkModal from './permalink-modal'

Router.events.on('routeChangeComplete', url => pageview(url))

const Page = ({router}) => (
  <>
    <GlobalStyles />
    <Head />
    {router.query.p && <PermalinkModal permalink={router.query.p} />}
    <Container>
      <Main />
    </Container>
  </>
)

export default withRouter(Page)
