import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.ErrataHighlightCombined
        before={<>化学物質への恐怖が暴走し、化学物質よりも</>}
        after={
          <>
            <strong>物質</strong>への恐怖が暴走し、<strong>物質そのもの</strong>
            よりも
          </>
        }
      />
    </p>
    <p>(放射線は化学物質ではないので)</p>
  </>
)
