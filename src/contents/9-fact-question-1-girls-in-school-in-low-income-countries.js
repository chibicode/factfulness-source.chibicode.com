import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={1} />

    <H.P>
      <H.FB pageNumber={372}>
        正解はC。低所得国の女子の60%は初等教育を終えることができる。厳密には63.2%だが(2015年のデータ。詳しくは
        <H.A href="http://www.gapm.io/xwb173">World Bank[3]</H.A>
        を参照)、誇張を避けるため60%に切り捨てた。
      </H.FB>
    </H.P>

    <H.P>
      ここでは意図的に「低所得国」を定義していない。第1章で書いたように、「低所得国」という言葉を人々がどのように受け取るかを調べるためだ。初等教育の修了率、または初等教育最終学年への総進学率は以下のように計算する。まず、初等教育最終学年に新しく進学する子の数を数える(年齢は関係ない。留年生は除く)。この数を、その学年の子の典型的な年齢(およそ11歳)の人口で割ればよい。
      <H.Addition>
        ちなみにこれは
        <H.A href="http://uis.unesco.org/en/glossary-term/expected-gross-intake-ratio-last-grade-primary-education">
          ユネスコによる定義だ。
        </H.A>
      </H.Addition>
    </H.P>

    <p>
      世界銀行(<a href="http://gapm.io/xwb172">World Bank[2] </a>
      )によると、2017年に「低所得国」と分類されたのは31カ国。データは米国国際開発庁(
      <a href="https://dhsprogram.com/">USAID-DHS[1]</a>)とユニセフ(
      <a href="http://mics.unicef.org/">UNICEF-MICS</a>
      )による世帯調査を、ユネスコ(
      <a href="http://gapm.io/xuisoutsf">UNESCO[3]</a>)がまとめたもの。
    </p>

    <p>
      この質問についてさらに<a href="http://gapm.io/q1">詳しくはこちら</a>。
    </p>

    <p>2017年にこの質問を14カ国1万2000人に行ったところ、正解率は7%だった。</p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <a href="http://www.gapm.io/xwb172">
          World Bank[2] &quot;World Bank Country and Lending Groups.&quot;
        </a>
      </li>
      <li>
        <a href="http://www.gapm.io/xwb173">
          World Bank[3] &quot;Primary completion rate, female (% of relevant age
          group).&quot;
        </a>
      </li>
      <li>
        <a href="http://www.gapm.io/xuisoutsf">
          UNESCO[3] (United Nations Educational, Scientific and Cultural
          Organization) &quot;Education: Out-of-school rate for children of
          primary school age, female.&quot;
        </a>
      </li>
      <li>
        <a href="http://www.mics.unicef.org/">
          UNICEF-MICS Multiple Indicator Cluster Surveys. Funded by the United
          Nations Children's Fund.
        </a>
      </li>
      <li>
        <a href="http://www.dhsprogram.com/">
          USAID-DHS[1] Demographic and Health Surveys (DHS), funded by USAID.
        </a>
      </li>
    </ul>
  </>
)
