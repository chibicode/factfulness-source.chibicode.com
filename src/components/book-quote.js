/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Blockquote from './blockquote'

const BookQuote = ({children, pageNumber, pageNumbers, ...props}) => (
  <Blockquote {...props}>
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
  </Blockquote>
)

export default BookQuote
