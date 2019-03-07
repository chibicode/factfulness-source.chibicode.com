import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.ErrataHighlightCombined
        before={<>世界保健機関</>}
        after={
          <>
            世界保健機<strong>構</strong>
          </>
        }
      />
    </p>
    <p>
      (どちらの名称も使われるが、
      <H.A href="https://www.unic.or.jp/info/un/unsystem/specialized_agencies/who/">
        国連は
      </H.A>
      「世界保健機関」としているので)
    </p>
  </>
)
