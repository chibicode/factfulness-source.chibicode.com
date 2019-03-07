import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={11} />

    <p>
      <H.FB pageNumber={371}>
        正解はC。
        <H.A href="https://www.iucnredlist.org/">
          国際自然保護連合が作成したレッドリスト
        </H.A>
        によれば、3つの動物のうち、1996年よりさらに絶滅の危機に瀕している動物はひとつもない。
      </H.FB>
    </p>

    <p>
      <H.A href="http://www.gapm.io/xiucnr4">
        レッドリストのこちらのページには
      </H.A>
      、1996年から2017年の間に、絶滅の危機に瀕している動物の数がどのように変わったかを表すチャートが載っている。
    </p>
    <p>
      <strong>トラ</strong> (Panthera tigris): レッドリストによると、
      <H.A href="http://www.gapm.io/xiucnr1">
        1996年にEN(絶滅危惧)と指定された
      </H.A>
      。現在もそのままだ。
      <H.A href="http://gapm.io/xwwftiger">世界自然保護基金(WWF)</H.A>
      は、野生のトラの数は増え続けているという声明を2016年に発表した:「以前、野生のトラの数は100年にわたって減り続けていたが、最近は増え続けている。現在、野生のトラの数は最低3890頭。だが、トラはいまだに絶滅危惧種であり、さらなる保護の努力が求められる」。トラの数が増えていることは、Scientific
      Americanに掲載された
      <H.A href="https://blogs.scientificamerican.com/extinction-countdown/tiger-populations-increasing/">
        Platt (2016)
      </H.A>
      の記事も参考のこと。
    </p>
    <p>
      <strong>ジャイアントパンダ:</strong> レッドリストによると、
      <H.A href="http://www.gapm.io/xiucn2">
        1996年にEN(絶滅危惧)と指定された
      </H.A>
      。だが、以来野生の数は増え、2015年には保全状況がVU(危急)に改善した。
    </p>
    <p>
      <strong>クロサイ:</strong> レッドリストによると、
      <H.A href="http://www.gapm.io/xiucn3">1996年にCR(絶滅寸前)</H.A>
      とされていて、現在も変わらない。ただ、国際サイ財団によれば、野生のクロサイの数は
      <H.A href="https://rhinos.org/newsroom/annual-report-financials/">
        2016年には5042〜5455頭だった
      </H.A>
      。その数はゆっくりと増えており、
      <H.A href="https://rhinos.org/state-of-the-rhino/">
        2018年3月の段階でもまだ増え続けている
      </H.A>
      。
    </p>
    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.gapm.io/xiucnr1">
            IUCN Red List[1] Goodrich, J., et al. "Panthera tigris (Tiger)."
            (2015) e.T15955A50659951.
          </H.A>
        </li>
        <li>
          <H.A href="http://www.gapm.io/xiucn2">
            IUCN Red List[2] Swaisgood, R., et al. "Ailuropoda melanoleuca
            (Giant Panda)." (2016) e.T712A121745669.
          </H.A>
        </li>
        <li>
          <H.A href="http://www.gapm.io/xiucn3">
            IUCN Red List[3] Emslie, R. "Diceros bicornis (Black Rhinoceros,
            Hook-lipped Rhinoceros)." (2012) e.T6557A16980917.
          </H.A>
        </li>
        <li>
          <H.A href="http://www.gapm.io/xiucnr4">
            IUCN Red List[4] Table 1: Numbers of threatened species by major
            groups of organisms (1996--2017).
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
