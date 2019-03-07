/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const BookQuote = ({children, pageNumber, pageNumbers, ...props}) => (
  <blockquote
    {...props}
    css={({colors}) => css`
      padding-left: 1em;
      margin-left: 0;
      margin-right: 0;
      border-left: 0.5em solid ${colors.base100};
    `}
  >
    {children(
      <span
        css={({colors}) => css`
          color: ${colors.base400};
        `}
      >
        (P{pageNumber}
        {pageNumbers && pageNumbers.join('〜')}より)
      </span>
    )}
  </blockquote>
)

export default BookQuote
