/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {useState} from 'react'
import colors from '../lib/colors'
import SmallHeading from './small-heading'

const InlineCitation = ({children}) => {
  const [expanded, setExpanded] = useState(false)
  return expanded ? (
    <>
      <SmallHeading>出典</SmallHeading>
      {children}
    </>
  ) : (
    <p>
      <button
        type="button"
        css={css`
          padding: 0;
          background: transparent;
          border: none;
          text-decoration: underline;
          cursor: pointer;
          &:hover {
            background-color: ${colors.blue100};
          }
        `}
        onClick={() => setExpanded(true)}
      >
        出典についてはこちら。
      </button>
    </p>
  )
}

export default InlineCitation
