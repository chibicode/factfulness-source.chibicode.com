import React from 'react'
import GlobalStyles from './global-styles'
import Head from './head'
import Container from './container'
import Main from './main'

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
