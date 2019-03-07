import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>ひとりあたりのギターの本数</>}
      after={
        <>
          <strong>100万人</strong>あたりのギターの本数
        </>
      }
    />
  </p>
)
