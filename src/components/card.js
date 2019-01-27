/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {ns} from './global-styles'

const Card = ({children, isLast}) => (
  <>
    <section
      css={css`
        background: #fff;
        border-radius: 0.5rem;
        padding: 1.25rem 0.875rem 0.25rem;
        ${ns} {
          padding: 2rem 2rem 1rem;
        }
      `}
    >
      {children}
    </section>
    {!isLast && (
      <div
        css={css`
          width: 1.25rem;
          height: 1rem;
          ${ns} {
            height: 1.75rem;
          }
          margin: 0 auto;
          background: #a7b5c7;
        `}
      />
    )}
  </>
)

Card.defaultProps = {
  isLast: false
}

export default Card
