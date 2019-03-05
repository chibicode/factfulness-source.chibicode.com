import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={12} />

    <p>
      <H.FB pageNumber={371}>
        正解はC。<H.A href="http://www.gapm.io/xgtf">GTF</H.A>
        によれば、世界の人口の85.3%が、いくらかでも電気を使うことができる。誇張を避けるため80%に切り捨てた。「電気を使える」の基準がどれくらいかは、調査によってさまざまだ。極端な例をあげると、1週間に平均60回停電しても「電気を使える家庭」に分類されることもある。だから、質問は「いくらかでも電気を使うことができる」とした。
      </H.FB>
    </p>

    <p>
      ちなみにGTF(The Global Tracking
      Framework)は世界銀行と国際エネルギー機関との合同の取り組みだ。
    </p>

    <H.BlockAddition>
      <p>
        <H.BlockAdditionHeader />
        GTFによると、サハラ以南アフリカではいくらかでも電気を使える人口の割合が低い。たとえば2016年のデータを見ると、アフリカで最も人口が多いナイジェリアでは59%しかない。しかし、現時点でアフリカ全土より人口の多い中国では100%、インドでは84%の人口がいくらかでも電気を使える。現在人口が世界4位のインドネシアにおいては97%だ。だから世界合計が80%以上となるのも頷ける。ちなみにインドでは、
        <H.A href="https://www.cnn.co.jp/business/35118694.html">
          国土全体の電力化が最近の大きな政策目標だった
        </H.A>
        。
      </p>
      <p>
        GTFは世界銀行の世界電力供給データベース(GED)を使っている。これは、それぞれの国が行っている調査と、Socio-Economic
        Database for Latin America and the Caribbean (SEDLAC)やthe Europe and
        Central Asia Poverty Database
        (ECAPOV)などの他のデータをまとめたものだ。1990年から2017年の間の、高所得国を除いた144カ国における950もの調査が含まれている。ちなみに、世界銀行が高所得国としている国では電力供給が100%と仮定している。(
        <H.A href="http://trackingsdg7.esmap.org/methodology">ソース</H.A>)
      </p>
      <p>
        ちなみに、いくらかでも電気が使える人の割合は
        <H.A href="http://trackingsdg7.esmap.org/results">
          1990年時点ですでに70%だった
        </H.A>
        。
      </p>
    </H.BlockAddition>
  </>
)
