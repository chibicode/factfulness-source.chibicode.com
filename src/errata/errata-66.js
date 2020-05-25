import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>2人がつくった動くバブルチャートは、はからずも革命的だった。</>}
      after={
        <>
          <strong>2人の手から思いがけず生まれた動くバブルチャートは</strong>
          革命的だった。
        </>
      }
    />
  </p>
)
