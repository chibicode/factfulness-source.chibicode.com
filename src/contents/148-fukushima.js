import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={364}>
        東日本大震災のデータは
        <H.A href="https://gapm.io/xjapan">
          警視庁(National Police Agency of Japan)
        </H.A>
        と<H.A href="https://gapm.io/xjap">Ichiseki(2013)</H.A>によるもの。
        警視庁によれば、2017年12月時点での東日本大震災の死亡者数は1万5894人で、行方不明者数は2546人。
        <H.A href="https://gapm.io/xfuk">Tanigawa et al.(2012)</H.A>
        によると、
        特に病状が重かった61人の後期高齢者は避難中か避難直後に亡くなった。さらに
        Ichisekiによると、高齢者を多く含む約1600人が避難生活中に亡くなった。
      </H.FB>
    </p>
    <p>
      放射線被ばくで亡くなった人はいない。世界保健機関は「死亡率の微増はあるかもしれないが、それは非常に少数の人々に限られるだろう」と結論づけた。
    </p>
    <p>
      <H.FB pageNumber={364}>
        Pew[1]が2012年に行った調査によると、日本人の76%が福島産の食べ物は危険だと答えた。
      </H.FB>
      John Shroder著
      <H.A href="https://www.elsevier.com/books/hazards-risks-and-disasters-in-society/shroder/978-0-12-396451-9">
        "Hazards, Risks, and Disasters in Society" (2014)
      </H.A>
      には、「福島」という単語自体にまつわる風評被害について書かれている。
    </p>
  </>
)
