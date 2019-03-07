import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.ErrataHighlightCombined
        before={<>戦死者数</>}
        after={
          <>
            <strong>戦争や紛争による犠牲者</strong>数
          </>
        }
      />
    </p>
    <p>
      (
      <H.A href="https://ja.wikipedia.org/wiki/%E6%88%A6%E6%AD%BB">
        「戦死者」は民間人を含まない
      </H.A>
      が、数字には民間人も含まれるので)
    </p>
  </>
)
