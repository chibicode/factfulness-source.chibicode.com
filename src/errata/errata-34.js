import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>家事</>}
      after={
        <>
          <strong>火</strong>事
        </>
      }
    />
  </p>
)
