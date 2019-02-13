import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={364}>
        東日本大震災のデータは警視庁(National Police Agency of
        Japan)とIchiseki(2013)によるもの。
        警視庁によれば、2017年12月時点での東日本大震災の死亡者数は1万5894人で、行方不明者数は2546人。Tanigawa
        et al.(2012)によると、
        特に病状が重かった61人の後期高齢者は避難中か避難直後に亡くなった。さらに
        Ichisekiによると、高齢者を多く含む約1600人が避難生活中に亡くなった。
      </H.FB>
      Nobody was reported dying from the nuclear leak, and WHO concludes that it
      might be possible to detect a small increase of mortality, but that it is
      expected to occur in a very limited group of people.
    </p>
    <p>
      <H.FB pageNumber={364}>
        Pew[1]が2012年に行った調査によると、日本人の76%が福島産の食べ物は危険だと答えた。
      </H.FB>{' '}
      The contamination of the very word Fukushima is discussed in the book
      <H.A href="https://www.elsevier.com/books/hazards-risks-and-disasters-in-society/shroder/978-0-12-396451-9">
        &quot;Hazards, Risks, and Disasters in Society&quot;
      </H.A>
      by John Shroder (2014).
    </p>
  </>
)
