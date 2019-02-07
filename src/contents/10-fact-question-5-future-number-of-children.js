import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={5} />

    <p>
      正解はC。The UN experts (i.e. the demographers of the UN Population
      Division) publish new official population forecasts every second year in
      their publication World Population Prospect. They work with multiple
      alternative scenarios. The one they think is most probable is called the
      'medium fertility variant', which falls between the highest and lowest
      predictions of fertility and mortality decline worldwide.{' '}
      <H.FB pageNumber={372}>
        過去10年間、国連は「2100年の子供の数は現在より多くならない」という見方を貫いてきた。
      </H.FB>
      In their latest revision published in 2017, the UN Population Division
      estimates that there are 1.975 billion children (aged 0 to 14) in 2017 and
      forecast that the number will be 1.957 billion in 2100 (having peaked at
      2.094 in the year 2057); see{' '}
      <H.A href="http://www.esa.un.org/unpd/wpp">UN-Pop[2]</H.A>. Nobody can
      know for sure, but the question is only asking which forecast is the most
      likely. <H.A href="http://www.gapm.io/q5">詳しくはこちら</H.A>。
    </p>
  </>
)
