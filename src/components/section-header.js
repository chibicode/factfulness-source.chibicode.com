/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import colors from '../lib/colors'
import Card from './card'

const SectionHeader = ({children}) => (
  <Card background={colors.blueGrey400} foreground="#fff">
    <h2
      css={css`
        font-size: 1.75rem;
        text-align: center;
        margin: 0 0 1rem;
        letter-spacing: -1.5px;
      `}
    >
      {children}
    </h2>
  </Card>
)

export default SectionHeader
