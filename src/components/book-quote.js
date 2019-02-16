/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import colors from '../lib/colors'

const BookQuote = ({children, pageNumber, pageNumbers, ...props}) => (
  <blockquote
    {...props}
    css={css`
      padding-left: 1em;
      margin-left: 0;
      margin-right: 0;
      border-left: 0.5em solid ${colors.blueGrey100};
    `}
  >
    {children(
      <span
        css={css`
          color: ${colors.grey500};
        `}
      >
        (P{pageNumber}
        {pageNumbers && pageNumbers.join('〜')}より)
      </span>
    )}
  </blockquote>
)

export default BookQuote
