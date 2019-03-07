import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.ErrataHighlightCombined
        before={<>2つのグループは重なっている</>}
        after={
          <>
            2つのグループ<strong>には重なりがある</strong>
          </>
        }
      />
    </p>
    <p>(完全に重なっているわけではないので)</p>
  </>
)
