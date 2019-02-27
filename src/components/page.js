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
import NavCloser from './nav-closer'

Router.events.on('routeChangeComplete', url => pageview(url))

const Page = ({type, router}) => (
  <>
    <GlobalStyles />
    <Head type={type} />
    <NavState>
      {router.query.p ? (
        <PermalinkModal permalink={router.query.p} />
      ) : (
        <Navbar type={type} />
      )}
      <NavCloser>
        <Container hasVerticalPadding>
          <Main type={type} />
        </Container>
      </NavCloser>
    </NavState>
  </>
)

export default withRouter(Page)
