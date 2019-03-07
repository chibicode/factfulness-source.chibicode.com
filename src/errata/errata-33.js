import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.ErrataHighlightCombined
        before={<>初等教育を受ける</>}
        after={
          <>
            初等教育を<strong>終える</strong>
          </>
        }
      />
    </p>
    <p>(質問は「終えることができる？」なので)</p>
  </>
)
