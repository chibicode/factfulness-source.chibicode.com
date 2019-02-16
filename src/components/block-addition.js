/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import colors from '../lib/colors'
import {AdditionContext} from './addition'
import {ns} from './global-styles'

const BlockAddition = ({children, ...props}) => (
  <AdditionContext.Provider
    value={{
      inAdditionContext: true
    }}
  >
    <div
      css={css`
        background: ${colors.orange50};
        margin: 1.5rem -0.875rem;
        padding: 1.25rem 0.875rem 0.25rem;
        ${ns} {
          margin-left: -2rem;
          margin-right: -2rem;
          padding-left: 2rem;
          padding-right: 2rem;
        }
      `}
      {...props}
    >
      {children}
    </div>
  </AdditionContext.Provider>
)

export default BlockAddition
