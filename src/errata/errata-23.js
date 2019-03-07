import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>十羽ひとからげ</>}
      after={
        <>
          十<strong>把</strong>ひとからげ
        </>
      }
    />
  </p>
)
