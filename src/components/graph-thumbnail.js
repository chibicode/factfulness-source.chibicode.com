/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import * as H from './h'

const GraphThumbnail = ({src}) => (
  <>
    <p>
      <img
        src={src}
        alt=""
        css={css`
          max-width: 400px;
          margin: 0 auto;
        `}
      />
    </p>
  </>
)

export default GraphThumbnail
