import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.ErrataHighlightCombined
        before={<>それは制度が複雑だからだ</>}
        after={<>それは複雑だからだ</>}
      />
    </p>
    <p>(天気は制度ではないので)</p>
  </>
)
