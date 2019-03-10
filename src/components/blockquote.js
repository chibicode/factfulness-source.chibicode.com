/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const Blockquote = props => (
  <blockquote
    {...props}
    css={({colors}) => css`
      padding-left: 1em;
      margin-left: 0;
      margin-right: 0;
      border-left: 0.5em solid ${colors.base100};
    `}
  />
)

export default Blockquote
