/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {createContext} from 'react'

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
      css={({colors}) => css`
        background: ${colors.secondary50};
      `}
      {...props}
    >
      {!hideParens && (
        <>
          (<strong>訳註:</strong>{' '}
        </>
      )}
      {children}
      {!hideParens && ')'}
    </span>
  </AdditionContext.Provider>
)

export default Addition
