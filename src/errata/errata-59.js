import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>尋ねるようにしている</>}
      after={
        <>
          尋ねるようにしてい<strong>た</strong>
        </>
      }
    />
  </p>
)
