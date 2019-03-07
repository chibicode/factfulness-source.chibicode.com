import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.ErrataHighlightCombined
        before={<>起きている。</>}
        after={<>起きている」。</>}
      />
    </p>
    <p>(括弧が抜けていました)</p>
  </>
)
