import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={364}>
        この章の最後で紹介している死因ごとの割合は、レベル4の過去10年間のデータを基にしている。どの割合も、それぞれの原因で亡くなった人の数を総死亡者数で割ったものだ。自然災害は
        <H.A href="http://www.emdat.be/">EM-DAT</H.A>
        のデータを、飛行機事故はIATAのデータを、殺人は
        <H.A href="http://ihmeuw.org/49pc">IHME[10]</H.A>
        のデータを、戦争のデータは
        <H.A href="http://gapm.io/xgalvac17">UCDP[1]</H.A>を、テロは
        <H.A href="http://www.gapm.io/xgtdb17">GTD</H.A>
        のデータを利用している。
      </H.FB>
    </p>
    <p>
      <H.FB pageNumber={364}>
        わたしたちが用いた計算方法は完璧ではない。たとえば飛行機事故であれば、飛行機事故の死亡者数を全死亡者数で割るよりも、飛行機の利用者数で割ったほうが、リスクの計算には役に立つかもしれない。
      </H.FB>
    </p>
  </>
)
