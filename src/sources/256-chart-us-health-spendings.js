import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      他のレベル4の資本主義国(EU諸国、日本、韓国など)に比べ、アメリカは医療費に対する支出が遥かに多い。医療費のデータは世界保健機関の
      <H.A href="http://apps.who.int/nha/database">
        Global Health Expenditure Database (World Bank[24])
      </H.A>
      を参考にした。
      <H.FB pageNumber={359}>
        アメリカの医療費と、そのほかのレベル4にいる資本主義国の医療費の比較は、経済協力開発機構による報告書
        <H.A href="https://www.oecd.org/unitedstates/49084355.pdf">
          “Why Is Health Spending in the United States So High?”
        </H.A>
        を参考にした(OECD[1])
      </H.FB>
    </p>
    <p>
      他のOECD諸国に比べ、アメリカはほとんどの医療分野における支出が多い。病院、外来受診、薬剤、公衆衛生など、どの分野でもそうだ。医者・医療専門家・歯医者に対する支出と、公衆衛生に対する支出がOECD諸国に比べて遥かに多い(公衆衛生に対してはOECD平均の1.6倍)。
    </p>
    <p>
      報告書は、アメリカは医療におカネを使いすぎなのか？という質問をしている。これは一部の基本的な医療においては完全に正しい。アメリカとフランスの基本的な診療費用を比べると、アメリカのほうが50%ほど高い。必要のない診療や高い機械、検査のしすぎなどが理由だ。わたしたちに言わせれば、医者に頻繁にかかったり、緊急を要しない医療介入は、平均寿命を伸ばすことにつながらない。むしろ逆のことが起きる。他の国では、医者は本当に治療が必要な患者に時間を割き、それは公的保険で支払われる。アメリカでは、最も治療が必要な患者に医師が時間を割くインセンティブがない。
    </p>
    <p>
      ただ、アメリカでも一部では良い結果が出ている。患者の満足度は高く、32のグラフに載っていたように、治療さえ受けられれば癌の予後はとても良い。
    </p>
    <p>
      ちなみに、小国のマーシャル諸島とモルディブは比較から省いている。両方ともひとりあたりの医療費がアメリカ並だが、人口が少なすぎて比較対象として妥当ではない。
    </p>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.gapm.io/x-ushealth">
            OECD[1] (Organisation for Economic Co-operation and Development).
            "Why is Health Spending in the United States so High?" Chart 4:
            Health spending per capita by category of care, US and selected OECD
            countries, 2009. Health at a Glance 2011: OECD Indicators.
          </H.A>
          .
        </li>
        <li>
          <H.A href="http://www.gapm.io/xwb1724">
            World Bank[24] "Health expenditure, total (% of GDP)." World Health
            Organization Global Health Expenditure Database, 2017.
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
