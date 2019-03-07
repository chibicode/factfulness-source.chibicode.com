import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g31.png" />
    <p>
      2005年から2017年のデータは
      <H.A href="http://gapm.io/xituintern">ITU[2]</H.A>を世界人口あたり(
      <H.A href="https://esa.un.org/unpd/wpp">UN-Pop[1]</H.A>
      )で割ったもの。2005年以前は
      <H.A href="https://gapm.io/xwb1719">世界銀行のデータ</H.A>
      をわたしたちがまとめ直した
      <H.A href="http://gapm.io/dintus">(Gapminder[22])</H.A>。
    </p>
    <p>
      インターネットのホストサーバーの数を記録している
      <H.A href="https://gapm.io/xitho">ISC</H.A>(Internet Systems
      Consortium)によると、はじめて記録がつけられたのは1981年8月で、213のホストサーバーがあった。おそらくその1年前の1980年には、人口あたりでみるとネットの利用者はゼロ%に近かっただろう。
    </p>
    <H.GraphExplanation />
  </>
)
