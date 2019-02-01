/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Tooltip from '@material-ui/core/Tooltip'
import colors from '../lib/colors'

const FromBook = props => (
  <Tooltip title="本の脚注にもあります" enterDelay={600}>
    <span
      css={css`
        border-bottom: 1px dashed ${colors.green400};
      `}
      {...props}
    />
  </Tooltip>
)

export default FromBook
