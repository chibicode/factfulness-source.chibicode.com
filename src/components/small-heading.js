/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const SmallHeading = ({children, ...props}) => (
  <h3
    css={css`
      margin-top: 0;
      font-size: 1rem;
      margin-bottom: 1rem;
    `}
    {...props}
  >
    {children}:
  </h3>
)

export default SmallHeading
