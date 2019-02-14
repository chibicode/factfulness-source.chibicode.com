/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const BeginNotes = ({children}) => (
  <h2
    css={css`
      font-size: 1.75rem;
      text-align: center;
      margin: 0 0 1rem;
    `}
  >
    {children}
  </h2>
)

export default BeginNotes
