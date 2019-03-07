/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {ns} from './global-styles'

const Container = ({
  children,
  hasHorizontalPadding,
  hasVerticalPadding,
  ...props
}) => (
  <main
    {...props}
    css={[
      css`
        max-width: 700px;
        margin: 0 auto;
      `,
      hasHorizontalPadding &&
        css`
          padding-left: 0.5rem;
          padding-right: 0.5rem;
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

Container.defaultProps = {
  hasHorizontalPadding: true
}

export default Container
