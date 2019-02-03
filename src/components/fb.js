/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Tooltip from '@material-ui/core/Tooltip'
import PropTypes from 'prop-types'
import colors from '../lib/colors'

// FB = From Book
const FB = ({pageNumber, ...props}) => (
  <Tooltip
    title={`本の脚注${pageNumber ? `(${pageNumber}ページ)` : ''}からの引用`}
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

FB.proptypes = {
  pageNumber: PropTypes.number.isRequired
}

export default FB
