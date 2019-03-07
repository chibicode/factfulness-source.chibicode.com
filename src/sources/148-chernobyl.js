import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      2016年に、世界保健機関は
      <H.A href="http://gapm.io/xwhoc30">
        "1986-2016: Chernobyl at 30 -- an update"
      </H.A>
      という報告書を公開した。報告書によると、人々の恐れとは裏腹に、甲状腺癌の発生率の増加は見られなかった。一方、チェルノブイリの最も大きな被害は、人々の心理的・社会的な被害だったという。不安症を発症する確率が事故と無関係の人に比べ倍になったり、原因不明の身体の不調が起きる人が多くなったという。
    </p>
    <p>
      <H.FB pageNumber={364}>
        核弾頭の数については
        <H.A href="http://www.gapm.io/xnuno">Nuclear Notebook</H.A>
        を参考にした。
      </H.FB>
    </p>
  </>
)
