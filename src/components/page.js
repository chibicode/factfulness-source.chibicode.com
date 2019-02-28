import React, {createContext} from 'react'
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

export const PageContext = createContext({})

const Page = ({type, router}) => (
  <PageContext.Provider value={{type}}>
    <GlobalStyles />
    <Head />
    <NavState>
      {router.query.p ? (
        <PermalinkModal permalink={router.query.p} />
      ) : (
        <Navbar />
      )}
      <NavCloser>
        <Container hasVerticalPadding>
          <Main />
        </Container>
      </NavCloser>
    </NavState>
  </PageContext.Provider>
)

export default withRouter(Page)
