/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {ns} from './global-styles'

const Container = ({children, hasVerticalPadding, ...props}) => (
  <main
    {...props}
    css={[
      css`
        max-width: 700px;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        margin: 0 auto;
      `,
      hasVerticalPadding &&
        css`
          padding-top: 1rem;
          padding-bottom: 3rem;
          ${ns} {
            padding-top: 3rem;
          }
        `
    ]}
  >
    {children}
  </main>
)

export default Container
