import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.ErrataHighlightCombined
        before={<>それを許さない体制の進歩が見えないのだろうか</>}
        after={
          <>
            それを許さない<strong>イランのような</strong>
            体制の進歩が見えないのだろうか
          </>
        }
      />
    </p>
    <p>
      (
      <H.A href="https://en.wikipedia.org/wiki/Human_rights_in_the_Islamic_Republic_of_Iran#Freedom_of_expression">
        イランでは表現の自由が制限されている
      </H.A>
      ことを知らない人のために分かりやすくしました)
    </p>
  </>
)
