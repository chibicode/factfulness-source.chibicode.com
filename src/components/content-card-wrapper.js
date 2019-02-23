import React from 'react'
import Card from './card'
import Content from './content'

const ContentCardWrapper = ({data, isLast}) => {
  return (
    <Card isLast={isLast}>
      <Content {...data} />
    </Card>
  )
}

export default ContentCardWrapper
