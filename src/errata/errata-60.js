import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>紙とペンを用意して</>}
      after={
        <>
          紙と<strong>鉛筆</strong>を用意して
        </>
      }
    />
  </p>
)
