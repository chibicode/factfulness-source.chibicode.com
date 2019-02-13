/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {createContext} from 'react'
import colors from '../lib/colors'

export const AdditionContext = createContext({
  inAdditionContext: false
})

const Addition = ({children, hideParens, ...props}) => (
  <AdditionContext.Provider
    value={{
      inAdditionContext: true
    }}
  >
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
  </AdditionContext.Provider>
)

export default Addition
