import React from 'react'
import {pagedSources, finalNoteSources} from '../lib/sources'
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
    <Card>
      <Content {...finalNoteSources} />
    </Card>
  </>
)

export default Main
