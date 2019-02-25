import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={9} />

    <p>
      <H.FB pageNumber={371}>
        正解はC。世界中の1歳児の88%がなんらかの病気に対して予防接種を受けている(
        <H.A href="http://gapm.io/xwhoim">WHO[1]</H.A>
        )。誇張を避けるため80%に切り捨てた。
      </H.FB>
    </p>

    <p>
      2016年の世界中の1歳児のワクチン接種率は以下の通り(
      <H.A href="http://gapm.io/xwhoim">ソース</H.A>)。
    </p>
    <ul>
      <li>BCGワクチン(結核): 88%</li>
      <li>三種混合ワクチン(ジフテリア、百日咳、破傷風): 86%</li>
      <li>麻疹ワクチンの初回接種: 85%</li>
      <li>ポリオワクチン: 85%</li>
      <li>B型肝炎ワクチン: 84%</li>
      <li>破傷風ワクチン: 84%</li>
      <li>ヘモフィルスインフルエンザ菌B型ワクチン: 70%</li>
      <li>麻疹ワクチンの2回目接種: 64%</li>
      <li>肺炎球菌ワクチン: 42%</li>
      <li>ロタウイルスワクチン: 15%</li>
    </ul>
    <p>
      結核の予防ワクチンの普及についてはWHO[10]の
      <H.A href="http://www.who.int/gho/tb/en/">
        Global Health Observatory data
      </H.A>
      も参考のこと。
    </p>
  </>
)
