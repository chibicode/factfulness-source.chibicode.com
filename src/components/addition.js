/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import colors from '../lib/colors'

const Addition = ({children, ...props}) => (
  <span
    css={css`
      background: ${colors.pink50};
    `}
    {...props}
  >
    (訳注: {children})
  </span>
)

export default Addition
