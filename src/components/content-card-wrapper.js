import React, {useContext, useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import Card from './card'
import Content from './content'
import {NavContext} from './nav-state'

const ContentCardWrapper = ({data, isLast}) => {
  const [ref, inView] = useInView()
  const {visibility, setVisibility} = useContext(NavContext)
  useEffect(() => {
    setVisibility({...visibility, [data.index]: inView})
  }, [inView])
  return (
    <div ref={ref}>
      <Card isLast={isLast}>
        <Content {...data} />
      </Card>
    </div>
  )
}

export default ContentCardWrapper
