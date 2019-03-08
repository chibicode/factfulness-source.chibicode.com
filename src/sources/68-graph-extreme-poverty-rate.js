import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      過去の極度の貧困率を正確に知ることは不可能だ。物価、通貨、食べ物、仕事、技術の変遷をすべて考慮するのは難しい。本書で用いている数字は
      <H.A href="http://gapm.io/depov">Gapminder[9]</H.A>
      が算出したもの。1980年以前のデータは、以下のふたつの資料に基づいている。第一に、Bourguignon
      and Morrisson (2002)の推定によると、
      <H.A href="https://ourworldindata.org/grapher/declining-global-poverty-share-1820-2015">
        1820年に1日2ドル以下(購買力平価をもとに調整、1985年国際ドル)で暮らしていた人の割合は94.4%、1ドル以下の割合は83.9%だった
      </H.A>
      。これを2011年の国際ドルで表すのは容易ではない。
    </p>
    <p>
      <H.A href="https://ourworldindata.org/grapher/world-population-in-extreme-poverty-absolute">
        Max RoserはOurWorldInData[1]にて
      </H.A>
      Bourguignon and
      Morrissonによる高めの推定を使っているが、わたしたちは低めの推定を使っている。理由は、ふたつめの資料である
      <H.A href="http://www.basvanleeuwen.net/bestanden/WorldIncomeInequality.pdf">
        van Zanden[1]
      </H.A>
      が、Bourguignon and Morrissonより低い推定を出しているからだ。
    </p>
    <p>
      van
      Zanden[1]は、Maddison[1]による過去のひとりあたりGDPを用いて、人々の所得を算出している。所得分布を調べる際には、人々の身長の分布に注目した(これには軍の資料をあたった)。子供の頃に食べ物が足りないと、大人になっても身長が低いままだ。このように身長に注目することによって、食糧不足、すなわち極度の貧困にある人口の割合を編み出した。この調査によると、1820年に1日2ドル以下(<H.OtherCardLink permalink="ppp-extreme-poverty">購買力平価</H.OtherCardLink>をもとに調整、1990年国際ドル)で暮らしていた人の割合は73%、1ドル以下の割合は39%だった。
    </p>
    <p>
      しかし、身長とGDPのデータをすべての国で見つけることはできず、人類の約25%はこの推定には含まれていなかった。軍の資料も無いのだから、含まれていなかったのはおそらく世界で最も貧しい人々だろう。この25%を極度の貧困層に加えた場合、1820年に極度の貧困で暮らしていたのは82%になる。
    </p>
    <p>
      1800年はおそらくもっと多くの人が貧しかっただろうから、わたしたちは「1800年には全人口の85%がレベル1にいた」とした。
    </p>
    <p>
      1980年以降のデータはPovcalNetによるもの。詳しくはこちらの項目を参考に:{' '}
      <H.OtherCardLink
        permalink="9-fact-question-3-extreme-poverty"
        useTitleAsChildren
      />
      。世界銀行による2013年における極度の貧困率の推定は10.7%。ギャップマインダーはこの数字と、
      <H.A href="https://gapm.io/ximfw">IMF[1]</H.A>
      によるひとりあたりGDPの予測を基に2017年の極度の貧困率を推定した(
      <H.A href="http://gapm.io/depov">Gapminder[9]</H.A>
      )。ひとりあたりのGDPが所得と連動していることと、所得分布が現在と変わらないことを前提としている。
    </p>
    <H.ExtremePoverty />
    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="https://www.ourworldindata.org/extreme-poverty">
            OurWorldInData[1] Roser, Max, and Esteban Ortiz-Ospina. "Declining
            global poverty: share of people living in extreme poverty,
            1820--2015, Global Extreme Poverty." 2017/11/20閲覧。
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
