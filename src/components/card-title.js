/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const CardTitle = ({largeFont, smallMarginBottom, children}) => (
  <h3
    css={css`
      margin-top: 0;
      font-size: ${largeFont ? '1.5rem' : '1.25rem'};
      margin-bottom: ${smallMarginBottom ? '0.125rem' : '1rem'};
      line-height: 1.5;
    `}
  >
    {children}
  </h3>
)

export default CardTitle
