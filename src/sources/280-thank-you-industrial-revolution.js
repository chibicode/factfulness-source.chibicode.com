import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={357}>
        奇跡の洗濯機が動いている様子はこちらの
        <H.A href="https://www.ted.com/talks/hans_rosling_and_the_magic_washing_machine?language=ja">
          TEDトーク
        </H.A>
        で見ることができる。
      </H.FB>
    </p>
    <p>
      <H.OtherCardLink permalink="12-fact-question-12-electricity">
        質問12: 電気について
      </H.OtherCardLink>
      の解説もあわせてご覧いただきたい。
    </p>
  </>
)
