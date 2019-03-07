import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g21.png" />
    <p>
      このグラフの最後の数字(約260万本)は
      <H.A href="http://www.gapm.io/xelsevier">
        Elsevier Publishingによる推定
      </H.A>
      。Elsevier
      Publishingは2015年に40万の査読付き論文を出している。これには世界中の780万人の科学者コミュニティーのうち70万人が関わった。
    </p>
    <p>
      世界初の査読付き科学ジャーナルはthe Royal Society in
      LondonによるPhilosophical
      Transactions。第一号は1665年3月に公開され、1年間に119の科学記事が掲載された。この数は書評などを除き、現在の科学記事と似たような形式の記事だけを数えたもの。ちなみに同じ年にフランスでJournal
      des Sçavansという科学雑誌が出たが、査読はなかった。
    </p>
    <H.GraphExplanation />
  </>
)
