/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Router, {withRouter} from 'next/router'
import {pageview} from '../lib/gtag'
import GlobalStyles from './global-styles'
import Head from './head'
import Container from './container'
import Main from './main'
import Navbar from './navbar'
import PermalinkModal from './permalink-modal'
import {ns} from './global-styles'

Router.events.on('routeChangeComplete', url => pageview(url))

const Page = ({router}) => (
  <>
    <GlobalStyles />
    <Head />
    {router.query.p ? (
      <PermalinkModal permalink={router.query.p} />
    ) : (
      <Navbar />
    )}
    <Container hasVerticalPadding>
      <Main />
    </Container>
  </>
)

export default withRouter(Page)
