import React from 'react'
import Router, {withRouter} from 'next/router'
import {pageview} from '../lib/gtag'
import GlobalStyles from './global-styles'
import Head from './head'
import Container from './container'
import Main from './main'
import Navbar from './navbar'
import NavState from './nav-state'
import PermalinkModal from './permalink-modal'

Router.events.on('routeChangeComplete', url => pageview(url))

const Page = ({router}) => (
  <>
    <GlobalStyles />
    <Head />
    <NavState>
      {router.query.p ? (
        <PermalinkModal permalink={router.query.p} />
      ) : (
        <Navbar />
      )}
      <Container hasVerticalPadding>
        <Main />
      </Container>
    </NavState>
  </>
)

export default withRouter(Page)
