import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g13.png" />
    <p>
      天然痘は多くの人の命を奪ってきた。たとえば、18世紀のヨーロッパでは、全死亡者の
      <H.A href="https://www.ourworldindata.org/eradication-of-diseases/#smallpox">
        7%
      </H.A>
      が天然痘で亡くなっていた(Max Roser 2018)。ワクチンは
      <H.A href="http://www.who.int/csr/disease/smallpox/vaccines/en/">
        1796年にすでに開発されていた
      </H.A>
      が、1980年になるまで天然痘は撲滅されなかった。撲滅できたのは、世界保健機関が世界的なワクチン活動を行ったおかげだ。最後の感染者が出たのは
      <H.A href="http://www.who.int/csr/disease/smallpox/en/">
        1977年のソマリア
      </H.A>
      だった。現在、天然痘はワクチンのおかげで撲滅できた唯一の病気だ。
    </p>
    <p>
      グラフの数字は、それぞれの国の最後の感染者がいた日付をもとに算出している。このデータは、グラスゴー大学医学・獣医学・生命科学カレッジのWellcome
      Trust Boyd Orr Centre for Population and EcosystemでKatie
      Hampsonが行った講義でも使われた。また、論文としても公開されている:{' '}
      <H.A href="http://rstb.royalsocietypublishing.org/content/368/1623/20120137">
        Towards the endgame and beyond: complexities and challenges for the
        elimination of infectious diseases
      </H.A>{' '}
      by Klepac, et al (2013)を参考のこと。
    </p>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="https://www.ourworldindata.org/eradication-of-diseases">
            Max Roser (2018) "Eradication of Diseases" Smallpox.
          </H.A>
        </li>
        <li>
          <H.A href="http://www.rstb.royalsocietypublishing.org/content/368/1623/20120137">
            Klepac, Petra, et al "Towards the endgame and beyond: complexities
            and challenges for the elimination of infectious diseases." Figure
            1. Phil. Trans. R. Soc. B June 24, 2013.
          </H.A>{' '}
          DOI: 10.1098/rstb.2012.0137
        </li>
      </ul>
    </H.InlineCitation>
    <H.GraphExplanation />
  </>
)
