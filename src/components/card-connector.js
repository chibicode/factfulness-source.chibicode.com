/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {ns} from './global-styles'

const CardConnector = () => (
  <section
    css={({colors}) => css`
      width: 1.25rem;
      height: 1rem;
      margin: 0 auto;
      background: ${colors.base100};
      ${ns} {
        height: 1.75rem;
      }
    `}
  />
)

export default CardConnector
