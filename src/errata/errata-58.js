import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>博士号も無料で取得した</>}
      after={
        <>
          <strong>医師の資格</strong>も無料で取得した
        </>
      }
    />
  </p>
)
