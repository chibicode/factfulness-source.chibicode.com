import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g26.png" />
    <p>
      グラフのデータはユネスコ(
      <H.A href="http://www.gapm.io/xuisoutsf">UNESCO[3]</H.A>
      )によるもの。実際に初等教育を受けている女子の数を、初等教育を受ける典型的な年齢(地域ごとに違うが、だいたい6歳〜11歳)の女子人口で割った数だ。初等教育を受ける年齢になってもそれ以前の段階の教育を受けている子達の数は、学校に通っていないとみなしている。ユネスコ(
      <H.A href="http://www.gapm.io/xoos">UNESCO[4]</H.A>
      )は「学校に通ってない子」の割合を出しているが、ここではその逆の「学校に通う子」の割合を出している。また、
      <H.OtherCardLink
        useTitleAsChildren
        permalink="9-fact-question-1-girls-in-school-in-low-income-countries"
      />
      も参考のこと。
    </p>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.gapm.io/xuisoutsf">
            UNESCO[3] (United Nations Educational, Scientific and Cultural
            Organization) "Education: Out-of-school rate for children of primary
            school age, female." 2017/11/26閲覧。
          </H.A>
        </li>
        <li>
          <H.A href="http://www.gapm.io/xoos">
            UNESCO[4] "Rate of out-of-school children." 2017/11/29閲覧。
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
    <H.GraphExplanation />
  </>
)
