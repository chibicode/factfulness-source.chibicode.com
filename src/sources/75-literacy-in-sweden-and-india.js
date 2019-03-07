import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={368}>
        100年前のスウェーデンでも、現在のインドでも、簡単な字を認識でき、文章をゆっくりと読めれば「識字」ができるということになる。つまり「識字率」は、難しい文章を読むことができる人の割合ではない。スウェーデンの過去の識字率は
        <H.A href="http://gapm.io/xriwe">van Zanden[2]</H.A>と
        <H.A href="https://ourworldindata.org/literacy">OurWorldInData[2]</H.A>
        を参考にした。インドの識字率はIndia Census 2011を参考にした。
      </H.FB>
    </p>
    <p>
      インドの最新の国勢調査によると、7歳以上の識字率は74%。ビハール州では64%、ケーララ州では94%と差はあるものの、10年前の国勢調査に比べて全体の識字率は10%増えている。このままいけば、2017年にはインドのほとんどの地域で識字率が80%を超えることになる。
    </p>
    <p>
      一方スウェーデンでは、1765年頃から識字率がゆっくりと向上しはじめた。教会の関係者が家に押しかけ、教理問答を受けさせ、読み書きができずに答えられなかった人たちを罰しはじめたからだ(
      <H.A href="https://researchingswedishroots.blogspot.se/2014/02/husforhor.html">
        その様子の絵はこちら
      </H.A>
      )。ただ、多くのスウェーデン人が読み書きができるようになったのはそれから1世紀後だった。1842年にスウェーデンは教育改革を行い、子ども達は強制的に学校に行かされるようになり、識字率はさらに向上した。1900年にはスウェーデンの識字率は87%になった。
    </p>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="https://www.ourworldindata.org/literacy">
            OurWorldInData[2] Roser, Max, and Esteban Ortiz-Ospina. "When did
            literacy start growing in Europe?" 2017/11/20閲覧。
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
