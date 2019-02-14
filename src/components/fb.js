/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {createContext} from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import PropTypes from 'prop-types'
import colors from '../lib/colors'

export const FBContext = createContext({
  inFBContext: false
})

// FB = From Book
const FB = ({pageNumber, ...props}) => (
  <FBContext.Provider
    value={{
      inFBContext: true
    }}
  >
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
  </FBContext.Provider>
)

FB.propTypes = {
  pageNumber: PropTypes.number.isRequired
}

export default FB
