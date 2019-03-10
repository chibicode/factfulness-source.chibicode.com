/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const GraphThumbnail = ({src}) => (
  <>
    <p>
      <img
        src={src}
        alt=""
        css={css`
          max-width: 450px;
          width: 100%;
          margin: 0 auto;
        `}
      />
    </p>
  </>
)

export default GraphThumbnail
