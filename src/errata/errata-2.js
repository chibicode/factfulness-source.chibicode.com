import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.ErrataHighlightCombined
        before={<>Source</>}
        after={
          <>
            <strong>出典</strong>
          </>
        }
      />
    </p>
    <p>(上のグラフの右下部分、“Source”という言葉が訳されていませんでした)</p>
  </>
)
