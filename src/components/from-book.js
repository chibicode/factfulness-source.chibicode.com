/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Tooltip from '@material-ui/core/Tooltip'
import colors from '../lib/colors'

const FromBook = ({pageNumber, ...props}) => (
  <Tooltip
    title={`本の脚注${pageNumber && `(${pageNumber}ページ)`}からの引用`}
    enterDelay={600}
    placement="top"
  >
    <span
      css={css`
        border-bottom: 1px dashed ${colors.green400};
      `}
      {...props}
    />
  </Tooltip>
)

export default FromBook
