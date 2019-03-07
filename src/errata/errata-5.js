import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>わたしたちかかっている</>}
      after={
        <>
          わたしたち<strong>に</strong>かかっている
        </>
      }
    />
  </p>
)
