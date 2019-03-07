/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const ErrataHighlight = ({before, after, ...props}) => (
  <span
    css={
      before
        ? theme =>
            css`
              background: ${theme.colors.base50};
            `
        : after
        ? theme => css`
            background: ${theme.colors.green50};
          `
        : null
    }
    {...props}
  />
)

export default ErrataHighlight
