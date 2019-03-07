import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.ErrataHighlightCombined
        before={<>インフルエンザ菌</>}
        after={
          <>
            インフルエンザ<strong>ウイルス</strong>
          </>
        }
      />
    </p>
  </>
)
