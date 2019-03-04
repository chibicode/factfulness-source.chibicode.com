import React from 'react'
import sourcesObject from '../lib/sources-errata-object'
import Container from './container'
import Content from './content'
import Card from './card'

const ScreenshotContent = ({permalink}) => (
  <Container>
    <Card isLast>
      <Content hideFooter {...sourcesObject[permalink]} />
    </Card>
  </Container>
)

export default ScreenshotContent
