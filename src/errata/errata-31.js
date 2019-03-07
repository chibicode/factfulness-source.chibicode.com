import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>クールチェーン</>}
      after={
        <>
          <strong>コールドチェーン</strong>
        </>
      }
    />
  </p>
)
