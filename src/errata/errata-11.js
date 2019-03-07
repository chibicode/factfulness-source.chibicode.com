import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.ErrataHighlightCombined
        before={<>絶滅の危険度が計測されている種の数</>}
        after={
          <>
            絶滅の危険度<strong>を計測して保全に務めている</strong>種の数
          </>
        }
      />
    </p>
    <p>
      (絶滅危惧種のリストの種が増える、というと悪いことに思えますが、実際は「絶滅しないように計測している＝いいこと」なので。
      <H.OtherCardLink toSource permalink="81-graph-monitored-species">
        こちらの脚注
      </H.OtherCardLink>
      も参考に)
    </p>
  </>
)
