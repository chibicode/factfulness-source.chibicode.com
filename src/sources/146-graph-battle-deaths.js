import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      戦争の犠牲者数は
      <H.A href="http://www.correlatesofwar.org/data-sets/COW-war.">
        Correlates of War Project
      </H.A>
      、<H.A href="http://gapm.io/xnpgfred">Gleditsch</H.A>、
      <H.A href="http://ucdp.uu.se/downloads">UCDP[1]</H.A>、
      <H.A href="http://gapm.io/xpriod">PRIO</H.A>を参考にした。
      <H.FB pageNumber={365}>
        これらの戦争の犠牲者数は、戦いで亡くなった兵士と一般人の死を含むが、餓死者など戦いの外で亡くなった人は含まれない。
      </H.FB>{' '}
      また、過去の戦争の犠牲者のデータを可視化した『
      <H.A href="http://ja.fallen.io/ww2/">Fallen</H.A>
      』というインタラクティブ・ドキュメンタリーもおすすめしたい。ほかにも、1990年以降の犠牲者を比較できるツールは
      <H.A href="http://ucdp.uu.se/">こちら</H.A>。
    </p>
    <p>
      戦争の犠牲者数を数えるのは難しい。戦場は、正確なデータを集めるのが最も大変な場所のひとつだ。上記の調査は公式発表とメディアの取材による数字を利用している。だが、これらの数字に異を唱える研究者もいる。
    </p>
    <p>
      <H.A href="https://www.bmj.com/content/336/7659/1482">
        ObermeyerとMurrayは2008年に発表した論文
      </H.A>
      で、計測方法を変えると、戦争の犠牲者数は増えていると論じた。その計測方法とは、戦争が起きた地域で調査を行い、家族のうち何人が戦争の犠牲になったかを数えるというもの(Sibling
      Methodと呼ばれる)。論文では、「ベトナム戦争以降、戦争の犠牲者数が減っているとは言えない」という結論が出された。
    </p>
    <p>
      しかし、戦争のような極端な出来事の統計を取る際、母集団から適切な標本を抽出するのは難しい。たくさんの人が犠牲になった家族ばかりを調査したり、その逆ばかりが調査対象になった場合、全体の犠牲者数の推定に大きな誤差が生まれる。過去の戦争に関する新しい一次情報が出てくることは少ないため、誤差がどれだけあるかも予想がつきにくい。
    </p>
    <p>
      <H.A href="https://journals.sagepub.com/doi/abs/10.1177/0022002709346253">
        Spagat
      </H.A>
      らが2009年に発表した論文によると、前述した調査にはやはりバイアスがかかっており、各年代ごとに犠牲者が過剰に、または過少に計上されていたことが判明した。また、
      <H.A href="https://journals.sagepub.com/doi/abs/10.1177/0022002712459709">
        LacinaとGleditschが2012年に発表した論文
      </H.A>
      によると、どんなに悪く見積もったとしても(たとえば、あえて過去の戦争の最も少ない犠牲者数の見積もりと、最近の戦争の最も多い犠牲者数の見積もりを使うなど)、戦争の犠牲者数は減っている。
    </p>
    <H.BlockAddition>
      <p>
        <H.BlockAdditionHeader />
        原文では最後の段落にて、Spagatによる主張をLacinaとGleditschによる主張と混同していたので、訳文では修正した。また、
        <H.A href="https://link.springer.com/chapter/10.1007/978-3-319-03820-9_10">
          Gleditschが2015年に書いたこちらの記事も参考になった
        </H.A>
        。
      </p>
    </H.BlockAddition>
  </>
)
