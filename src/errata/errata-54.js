import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>バナシー</>}
      after={
        <>
          バナ<strong>ジ</strong>ー
        </>
      }
    />
  </p>
)
