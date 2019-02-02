/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import colors from '../lib/colors'

const Addition = ({children, hideParens, ...props}) => (
  <span
    css={css`
      background: ${colors.pink50};
    `}
    {...props}
  >
    {!hideParens && '(訳注: '}
    {children}
    {!hideParens && ')'}
  </span>
)

export default Addition
