import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={8} />

    <p>正解はA。</p>

    <H.QuizMap />

    <H.P>
      <H.FB pageNumber={371}>
        国連によれば、2017年の人口は75億5000万人だった(
        <H.A href="https://esa.un.org/unpd/wpp">UN-Pop[1]</H.A>
        )。本来なら80億人と数字を繰り上げるべきだが、70億人としているのは地域ごとの人口で四捨五入しているため。ギャップマインダー(Gapminder[1])は
        <H.A href="http://gapm.io/ireg">4つの地域</H.A>
        の人口を国連の国ごとのデータ(UN-Pop[1])を基に次のように推定している。アメリカ大陸は10億人、ヨーロッパは8億4000万人、アフリカは13億人、アジアは44億人。
        <H.A href="http://www.gapm.io/q8">詳しくはこちら</H.A>。
      </H.FB>
    </H.P>
  </>
)
