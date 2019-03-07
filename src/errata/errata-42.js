import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.ErrataHighlightCombined
        before={<>空気感染</>}
        after={
          <>
            <strong>飛沫</strong>感染
          </>
        }
      />
    </p>
    <p>(インフルエンザは空気感染しないので)</p>
  </>
)
