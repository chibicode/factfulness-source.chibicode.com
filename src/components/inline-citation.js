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
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: 1px solid ${colors.blueGrey400};
          text-decoration: none;
          cursor: pointer;
          &:hover {
            background-color: ${colors.blue100};
            border-bottom: 1px solid ${colors.grey900};
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
