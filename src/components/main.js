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
    {pagedSources.map(data => (
      <Card key={data.permalink}>
        <Content {...data} />
      </Card>
    ))}
  </>
)

export default Main
