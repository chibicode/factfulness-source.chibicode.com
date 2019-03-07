/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const ListAfterHeading = ({children, ...props}) => (
  <ul
    css={css`
      margin-top: -0.75rem;
      margin-bottom: 1.5rem;
    `}
    {...props}
  >
    {children}
  </ul>
)

export default ListAfterHeading
