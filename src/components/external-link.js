/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import colors from '../lib/colors'
import {AdditionContext} from './addition'
import {FBContext} from './fb'

const ExternalLink = ({transparentBackground, ...props}) => (
  <FBContext.Consumer>
    {({inFBContext}) => (
      <AdditionContext.Consumer>
        {({inAdditionContext}) => (
          <a
            {...props}
            css={css`
              text-decoration: ${inFBContext ? 'none' : 'underline'};
              background-color: ${inAdditionContext || transparentBackground
                ? 'transparent'
                : colors.green50};
            `}
          />
        )}
      </AdditionContext.Consumer>
    )}
  </FBContext.Consumer>
)

export default ExternalLink
