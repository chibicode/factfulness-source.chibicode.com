import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      レベル4の国では、毎年約1000人あたり1冊の新刊が発売される。
      <H.A href="https://en.wikipedia.org/wiki/Books_published_per_country_per_year#cite_note-publishingtechnology.com-2">
        Wikipedia[1]
      </H.A>
      と<H.A href="https://esa.un.org/unpd/wpp">UN-Pop[1]</H.A>
      によれば、これはレベル3の5倍の水準だ。
    </p>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.gapm.io/x-icpp">
            ICP[1] (International Comparison Program) "Purchasing Power Parity $
            2011."
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
