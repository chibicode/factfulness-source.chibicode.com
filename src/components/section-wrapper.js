import React, {useContext, useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import {NavContext} from './nav-state'

const SectionWrapper = ({index, children}) => {
  const [ref, inView] = useInView()
  const {visibility, setVisibility} = useContext(NavContext)
  useEffect(() => {
    setVisibility({...visibility, [index]: inView})
  }, [inView])
  return (
    <div ref={ref} id={`section-${index}`}>
      {children}
    </div>
  )
}

export default SectionWrapper
