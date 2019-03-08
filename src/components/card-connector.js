/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {ns} from './global-styles'

const CardConnector = () => (
  <div
    css={({colors}) => css`
      width: 1.25rem;
      height: 1rem;
      ${ns} {
        height: 1.75rem;
      }
      margin: 0 auto;
      background: ${colors.base100};
    `}
  />
)

export default CardConnector
