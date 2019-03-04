import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g29.png" />
    <p>
      世界の携帯電話の数について語られるとき、よく
      <H.A href="https://www.itu.int/en/Pages/default.aspx">
        国際電気通信連合
      </H.A>
      <H.A href="http://gapm.io/xitumob">(ITU)のデータ</H.A>
      が使われる。だが、ここには契約数は書かれているが、契約「者」数は書かれていない。世界には75億人いるが、SIMカードの数は72億枚もある。多くの人はたくさんのSIMカードを保有しているからだ。
    </p>
    <p>
      <H.A href="https://gapm.io/xgsmame">GSMA</H.A>
      は2010年以降の契約「者」数の推定を公開している。ギャップマインダーはITUとGSMAのふたつのデータをもとに、過去の契約「者」数データを推定している。まず両方のデータがある2010年の「契約者ひとりあたりの契約数」を算出し、それをもとに1980年の契約者数を算出した。ちなみにITUは1980年には世界中で2万3482の契約数があったとしている。ITUのデータは
      <H.A href="http://gapm.io/xwb1718">世界銀行のサイト(World Bank[18])</H.A>
      でも公開されている。
    </p>
    <H.GraphExplanation />
  </>
)
