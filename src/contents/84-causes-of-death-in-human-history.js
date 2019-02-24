import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      長い人類史の中で、人が命を落とす主な要因はあまり変わっていない。細菌、ウイルス、飢餓、暴力などだ。人々の衛生環境が近代化するまで、細菌はおそらく一定規模で人の命を奪い続けてきた。
    </p>
    <p>
      出産の際には、合併症や感染症などで1%の母親が亡くなっていた。昔は女性ひとりあたりの子供の数が約6人だったから、約6%の女性が出産で亡くなっていたということになる。
      <H.Addition>1 - 0.99^6 = 0.941なので、生き残るのは94%。</H.Addition>
      詳しくは、リヴィ‐バッチ『人口の世界史』、
      <H.A href="https://www.cambridge.org/core/books/paleodemography/linking-ageatdeath-distributions-and-ancient-population-dynamics-a-case-study/BFE97596BED2E91300F4DDB4DDEBFA90">
        Paine and Boldsen[1]
      </H.A>
      、<H.A href="https://gapm.io/dmamo">Gapminder[25]</H.A>を参照のこと。
    </p>
    <p>
      子供が無事生まれても、その子供は30%から50%の確率で1歳になるまでに亡くなっていた。無事1歳になっても、5歳になるまでにさらに10%が亡くなっていた(
      <H.A href="https://www.cambridge.org/core/books/bioarchaeology-of-children/AE18D0323BC1F49700ECC42DA79AF011">
        Lewis[1]
      </H.A>
      )。ほとんどの子供は下痢か、肺炎か、麻疹か、マラリアか、細菌による感染で亡くなっていた。無事5歳になっても、大人になるまでに多くの子供が亡くなっていた。
    </p>
    <p>
      昔は暴力や事故で亡くなる確率は常に高かった。一方、戦争、感染症、飢餓で亡くなる確率は場所と時期によって大幅に違っていた。大半の期間は、食べ物もある程度あり、そこそこ平和で、人々は比較的健康だった。しかし、だいたい50年ごとにコレラ、
      天然痘、麻疹、マラリアが流行ったり、不作になったり、戦争が起きたりして、大人人口の10%以上が失われた。(
      <H.A href="https://www.cambridge.org/core/books/paleodemography/linking-ageatdeath-distributions-and-ancient-population-dynamics-a-case-study/BFE97596BED2E91300F4DDB4DDEBFA90">
        Paine and Boldsen p. 176
      </H.A>
      ).
    </p>
  </>
)
