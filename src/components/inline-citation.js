/** @jsx jsx */
import {jsx} from '@emotion/core'
import {useState} from 'react'
import SmallHeading from './small-heading'
import LinkButton from './link-button'

const InlineCitation = ({children}) => {
  const [expanded, setExpanded] = useState(false)
  return expanded ? (
    <>
      <SmallHeading>出典</SmallHeading>
      {children}
    </>
  ) : (
    <p>
      <LinkButton bordered type="button" onClick={() => setExpanded(true)}>
        出典についてはこちら。
      </LinkButton>
    </p>
  )
}

export default InlineCitation
