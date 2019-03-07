import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>フェニミスト</>}
      after={
        <>
          フェ<strong>ミニ</strong>スト
        </>
      }
    />
  </p>
)
