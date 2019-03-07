import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    上のグラフの右下部分、“Source”という言葉が訳されていませんでした。{' '}
    <H.ErrataHighlight before>Source</H.ErrataHighlight> →{' '}
    <H.ErrataHighlight after>
      <strong>出典</strong>
    </H.ErrataHighlight>
    が正しいです。
  </p>
)
