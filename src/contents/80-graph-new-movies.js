import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g17.png" />
    <p>
      世界中の映画好きたちが情報を更新し続ける
      <H.A href="https://www.imdb.com/">IMDB</H.A>
      には、ほぼ全ての映画(約350万)のデータがある。19世紀終盤に多くの映画が撮られたが、ほとんどが短かったため、「長編映画」には数えていない。ここでは70分間の映画"The
      Story of the Kelly Gang"が公開された1906年を最初の年にしている。詳しくは
      <H.A href="https://en.wikipedia.org/wiki/Feature_film#History">
        Wikipedia[3]
      </H.A>
      を参考のこと。
    </p>
    <H.GraphExplanation />
  </>
)
