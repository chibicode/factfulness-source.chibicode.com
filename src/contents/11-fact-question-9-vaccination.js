import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={9} />

    <H.P>
      <H.FB pageNumber={371}>
        正解はC。世界中の1歳児の88%がなんらかの病気に対して予防接種を受けている(
        <H.A href="http://gapm.io/xwhoim">WHO[1]</H.A>
        )。誇張を避けるため80%に切り捨てた。
      </H.FB>
    </H.P>

    <p>
      The common vaccines that reached most 1-year-olds worldwide in 2016,
      sorted by coverage level, are as follows:
    </p>
    <ul>
      <li>BCG (Tuberculosis): 88%</li>
      <li>DTP3 (Diphtheria tetanus toxoid and pertussis): 86%</li>
      <li>MCV1 (Measles, 1st dose): 85%</li>
      <li>Pol3 (Polio): 85%</li>
      <li>HepB3 (Hepatitis B): 84%</li>
      <li>PAB (Neonatal tetanus): 84%</li>
      <li>Hib3 (Haemophilus influenzae type b): 70%</li>
      <li>MCV2 (Measles, 2nd dose): 64%</li>
      <li>PCV3 (Pneumococcal conjugate): 42%</li>
      <li>RotaC (Rotavirus): 15%</li>
    </ul>
    <p>
      The estimate for immunization coverage of the vaccine against TB is based
      on 
      <a href="http://www.who.int/gho/tb/en/">Global Health Observatory data</a>
       from WHO[10]. For vaccination data by category, see
      <a href="http://www.gapm.io/xwhoim"> WHO[1]</a>. See 
      <a href="http://www.gapm.io/q9">www.gapm.io/q9</a>.
    </p>
  </>
)
