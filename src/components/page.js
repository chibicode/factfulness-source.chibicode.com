import React from 'react'
import Router from 'next/router'
import {pageview} from '../lib/gtag'
import GlobalStyles from './global-styles'
import Head from './head'
import Container from './container'
import Main from './main'

Router.events.on('routeChangeComplete', url => pageview(url))

const Page = () => (
  <>
    <GlobalStyles />
    <Head />
    <Container>
      <Main />
    </Container>
  </>
)

export default Page
