import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      本書では、アフリカの平均寿命は約65歳と説明している。国連の推定だと66歳。
      <H.A href="http://www.gapm.io/xihlex">IHME</H.A>
      はアフリカ全体の平均寿命を公開していないが、
      <H.A href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(17)31833-0/fulltext">
        国ごとのデータ
      </H.A>
      を人口に照らし合わせた結果、アフリカ全体では65.5歳となった。この手法だと大きく見積もりがちなので、切り捨てて65歳とした。ヨーロッパの平均寿命は78歳、EU諸国の平均寿命は82歳。ここではEU諸国の平均寿命を用いている。
    </p>
    <p>
      1970年のスウェーデンの平均寿命は74.5歳だった。北アフリカと中東(アフガニスタンを含む)の平均寿命はIHMEの2016年の推定によると73.16歳、
      <H.A href="http://www.esa.un.org/unpd/wpp">国連の推定</H.A>
      によると71.8歳だ。昔のスウェーデンと現在の北アフリカの平均寿命を比べるにあたっては、
      <H.A href="https://gapm.io/xihlex">IHM GBD 2016</H.A>
      のデータを使った。これによると、スウェーデンの平均寿命は1970年に74.5歳、1980年に75.9歳で、1970年代の平均は75.2歳だった。一方、現在の北アフリカの平均寿命は以下の通り。どれも世界平均の72歳より上だ。
    </p>
    <ul>
      <li>アルジェリア: 77.4歳</li>
      <li>エジプト: 72.1歳</li>
      <li>リビア: 75.05歳</li>
      <li>モロッコ: 75歳</li>
      <li>チュニジア: 77.46歳</li>
    </ul>
    <p>
      世界保健チャートを見ると、これらの国の現在の所得は、当時のスウェーデンより低い
      (<H.A href="https://bit.ly/2IxvIAI">グラフのリンクはこちら</H.A>)。
    </p>
    <p>
      <img
        src="/static/images/sources/sweden-north-africa.jpg"
        alt="Sweden and North Africa"
      />
    </p>
    <p>
      サハラ以南のアフリカを見ると、現在の平均寿命はIHMEによると62.87歳、国連によると59.7歳だ。IHMEの数字が高くなる理由は
      <H.A href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(17)31833-0/fulltext">
        Lancetの記事
      </H.A>
      を参考に。平均寿命について詳しくは
      <H.A href="http://gapm.io/ilex">Gapminder[4]</H.A>を参考のこと。
    </p>
  </>
)
