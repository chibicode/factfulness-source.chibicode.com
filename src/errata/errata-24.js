import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>バッハマイ病院</>}
      after={<>バックマイ病院</>}
    />
  </p>
)
