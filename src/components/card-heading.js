/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const CardHeading = props => (
  <h3
    css={css`
      margin-top: 0;
      margin-bottom: 1rem;
      text-align: center;
    `}
    {...props}
  />
)

export default CardHeading
