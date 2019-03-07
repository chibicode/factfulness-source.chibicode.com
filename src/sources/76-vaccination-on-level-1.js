import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      2016年のアフガニスタンでは、1歳児の60%以上が世界保健機関が推奨する予防接種を受けている。接種率は以下の通り。ソースは
      <H.A href="http://gapm.io/xwhoim">WHO[1]</H.A>。
    </p>
    <ul>
      <li>BCGワクチン(結核): 74%</li>
      <li>三種混合ワクチン(ジフテリア、百日咳、破傷風): 65%</li>
      <li>B型肝炎ワクチン: 65%</li>
      <li>ヘモフィルスインフルエンザ菌B型ワクチン: 65%</li>
      <li>麻疹ワクチンの初回接種: 62%</li>
      <li>破傷風ワクチン: 65%</li>
      <li>肺炎球菌ワクチン: 65%</li>
      <li>ポリオワクチン: 60%</li>
    </ul>
    <p>
      レベル1の多くの国と同じく、麻疹ワクチンの2回目の接種率のみ60%を下回り、39%だった。ちなみにこれは麻疹の抗体の保有率を95%から99.99%に上げるワクチンだ。
    </p>
    <p>
      <H.FB pageNumber={367}>
        これらのワクチンは、スウェーデンがレベル1や2だった頃には開発されていなかった。これは、当時のスウェーデンの平均寿命がいまのアフガニスタンより短かった理由のひとつだ。
        <H.Addition>2016年のアフガニスタンの平均寿命は約63歳。</H.Addition>
      </H.FB>
    </p>
    <H.BlockAddition>
      <p>
        <H.BlockAdditionHeader />
        アフガニスタンは、2019/2/17時点で外務省が国全体に退避勧告を出している7カ国に含まれている。その7カ国とはリビア、南スーダン、中央アフリカ共和国、ソマリア、イエメン、シリア、アフガニスタンのみ。そんな国でも、1歳児の60%以上が予防接種を受けている。
      </p>
    </H.BlockAddition>
  </>
)