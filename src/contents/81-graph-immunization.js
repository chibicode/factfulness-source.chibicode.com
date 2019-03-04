import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g32.png" />
    <p>
      世界保健機関(<H.A href="http://gapm.io/xwhoim">WHO[1]</H.A>
      )は主なワクチンの接種率を公開している。ここでは、少なくとも1種類のワクチンを接種した1歳児の割合をグラフにしている
      （<H.A href="https://gapm.io/dsvacc">Gapminder[23]</H.A>
      )。こうすることで、近代的な薬や保険サービスにアクセスできる人々の割合がわかる。
    </p>
    <H.BlockAddition>
      <p>
        <H.BlockAdditionHeader />
        ちなみに、
        <H.A href="http://gapm.io/xwhoim">世界保健機関が公開している</H.A>
        2016年の世界中の1歳児のワクチン接種率 は以下の通り。
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
    </H.BlockAddition>
    <H.GraphExplanation />
  </>
)
