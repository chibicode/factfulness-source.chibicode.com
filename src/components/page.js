import React, {createContext} from 'react'
import Router from 'next/router'
import withPageRouter from '../lib/with-page-router'
import {pageview} from '../lib/gtag'
import GlobalStyles from './global-styles'
import Head from './head'
import Container from './container'
import Main from './main'
import Navbar from './navbar'
import NavState from './nav-state'
import PermalinkModal from './permalink-modal'
import NavCloser from './nav-closer'
import ScreenshotContent from './screenshot-content'

Router.events.on('routeChangeComplete', path => pageview(path))

export const PageContext = createContext({})

const Page = ({type, router, embedSingle, embedMultiple}) => (
  <PageContext.Provider value={{type}}>
    <GlobalStyles />
    <Head />
    {router.query.s || embedSingle ? (
      <ScreenshotContent permalink={router.query.s || embedSingle} />
    ) : router.query.ss || embedMultiple ? (
      <ScreenshotContent
        permalinks={
          embedMultiple ? embedMultiple.split(',') : router.query.ss.split(',')
        }
      />
    ) : (
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
    )}
  </PageContext.Provider>
)

export default withPageRouter(Page)
