import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.ErrataHighlightCombined
        before={<>約1メートル</>}
        after={<>1メートル弱ほど</>}
      />
    </p>
    <p>
      (原文は3フィートなのですが、これは75cm~80cmを繰り上げた可能性があり、そうすると「約1メートル」とすると過剰すぎる、高位予測を使ったものと誤解される可能性があるので)
    </p>
  </>
)
