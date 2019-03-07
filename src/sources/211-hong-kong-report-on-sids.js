import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      「赤ちゃんをうつぶせに寝かせてはいけない」という情報が母親の間で広まった結果、乳児の突然死は1990年代に減った。ただ、うつぶせ寝が広まる前の水準に戻っただけとも言える。この現象はアメリカ、ノルウェー、スウェーデンで起きた。
    </p>
    <p>
      <H.FB pageNumber={362}>
        スウェーデンで乳幼児突然死症候群(SIDS)が増えた原因がうつぶせ寝だったということは、
        <H.A href="https://academic.oup.com/ije/article/34/4/874/692905">
          Gilbert の論文(2005)
        </H.A>
        とHögbergとBergströmによる1997年の論文“Läkarråd ökade risken för
        plötslig spädbarnsdöd”に書かれている。
      </H.FB>
    </p>
    <p>
      <H.FB pageNumber={362}>
        香港のグループによる調査は
        <H.A href="https://www.ncbi.nlm.nih.gov/pubmed/2866397">
          Davies(1985)
        </H.A>
        のもの。
      </H.FB>
      子供をうつぶせ寝させることが突然死を招くことに言及したはじめての調査だった。
      <H.A href="https://www.ncbi.nlm.nih.gov/pubmed/2866397?dopt=Abstract">
        こちらの記事
      </H.A>
      と、N.N. Lee (1989)による
      <H.A href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1835990/">
        こちらの記事
      </H.A>
      を参考のこと。
    </p>
    <p>
      ノルウェーにおける乳児の突然死については
      <H.A href="http://pubmedcentralcanada.ca/pmcc/articles/PMC1511132/pdf/archdisch00624-0014.pdf">
        Irgens et. al (1995)
      </H.A>
      に詳しい。乳幼児突然死症候群の傾向についての国際的な報告書は
      <H.A href="https://www.ispid.org/fileadmin/user_upload/textfiles/articles/CPR17_Hauck_SIDS_Trends.pdf">
        こちら
      </H.A>
      。
    </p>
  </>
)
