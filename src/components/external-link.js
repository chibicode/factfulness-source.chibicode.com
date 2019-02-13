/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import colors from '../lib/colors'
import {AdditionContext} from './addition'

const ExternalLink = ({transparentBackground, ...props}) => (
  <AdditionContext.Consumer>
    {({inAdditionContext}) => (
      <a
        {...props}
        css={css`
          background-color: ${inAdditionContext || transparentBackground
            ? 'transparent'
            : colors.green50};
        `}
      />
    )}
  </AdditionContext.Consumer>
)

export default ExternalLink
