import React from 'react'
import {finalNoteSources} from '../lib/sources'
import pagedSources from '../lib/paged-sources'
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
