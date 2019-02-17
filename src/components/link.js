/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import colors from '../lib/colors'
import {AdditionContext} from './addition'
import {FBContext} from './fb'

const Link = ({transparentBackground, LinkComponent, ...props}) => (
  <FBContext.Consumer>
    {({inFBContext}) => (
      <AdditionContext.Consumer>
        {({inAdditionContext}) => (
          <LinkComponent
            {...props}
            css={css`
              text-decoration: ${transparentBackground ? 'underline' : 'none'};
              border-bottom: ${inFBContext || transparentBackground
                ? 'none'
                : `1px solid ${colors.blueGrey400}`};
              background-color: ${inAdditionContext || transparentBackground
                ? 'transparent'
                : colors.blue50};

              &:hover {
                border-bottom: ${inFBContext || transparentBackground
                  ? 'none'
                  : `1px solid ${colors.grey900}`};
              }
            `}
          />
        )}
      </AdditionContext.Consumer>
    )}
  </FBContext.Consumer>
)

Link.defaultProps = {
  LinkComponent: 'a'
}

export default Link
