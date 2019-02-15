/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const SectionHeader = ({children}) => (
  <h2
    css={css`
      font-size: 1.75rem;
      text-align: center;
      margin: 0 0 1rem;
      letter-spacing: -1.5px;
    `}
  >
    {children}
  </h2>
)

export default SectionHeader
