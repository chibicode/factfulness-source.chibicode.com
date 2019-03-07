/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const ErrataHighlight = ({before, ...props}) => (
  <span
    css={
      before
        ? theme =>
            css`
              background: ${theme.colors.base50};
            `
        : theme => css`
            background: ${theme.colors.green50};
          `
    }
    {...props}
  />
)

export default ErrataHighlight
