import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>ニカラグア</>}
      after={
        <>
          <strong>ナイジェリア</strong>
        </>
      }
    />
  </p>
)
