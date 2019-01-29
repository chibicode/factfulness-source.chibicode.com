import React from 'react'
import {pagedSources} from '../lib/sources'
import Card from './card'
import Content from './content'
import Intro from './intro'

const Main = () => (
  <>
    <Card>
      <Intro />
    </Card>
    {pagedSources.map(({permalink, jpTitle}) => (
      <Card key={permalink}>
        <Content permalink={permalink} jpTitle={jpTitle} />
      </Card>
    ))}
  </>
)

export default Main
