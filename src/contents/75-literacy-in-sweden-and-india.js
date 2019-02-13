import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={368}>
        100年前のスウェーデンでも、現在のインドでも、簡単な字を認識でき、文章をゆっくりと読めれば「識字」ができるということになる。つまり「識字率」は、難しい文章を読むことができる人の割合ではない。スウェーデンの過去の識字率は
        <H.A href="http://gapm.io/xriwe">van Zanden[2]</H.A>と
        <H.A href="https://ourworldindata.org/literacy">OurWorldInData[2]</H.A>
        を参考にした。インドの識字率はIndia Census 2011を参考にした。
      </H.FB>
    </p>
    <p>
      The most recent census data on literacy in India puts the overall literacy
      rate at 74 percent of the population aged 7 and above. While literacy
      differed between states---for example, 64 percent in Bihar and 94 percent
      in Kerala---the numbers show a 10 percent increase since the last census
      that was published 10 years earlier. Assuming that the literacy rate
      continues to increase, it is probable that the majority of India has a
      literacy rate of at least 80 percent in 2017.
    </p>
    <p>
      Literacy in Sweden began to slowly increase in 1765, as the church decided
      to penalize those who didn't participate in the catechetical exams,
      conducted in households to measure people's ability to read and write (
      <H.A href="https://researchingswedishroots.blogspot.se/2014/02/husforhor.html">
        these paintings
      </H.A>
      depict the so called &quot;house interrogations&quot; or
      &quot;husförhör&quot; in Swedish). Despite increasing rates of literacy,
      many Swedes still couldn't read and write a century later. Not until 1842,
      with the Swedish school reform making it obligatory for children to attend
      school, literacy numbers climbed further. By 1900, the literacy rate was
      at about 87 percent.
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <H.A href="https://www.ourworldindata.org/literacy">
          OurWorldInData[2] Roser, Max, and Esteban Ortiz-Ospina. &quot;When did
          literacy start growing in Europe?&quot; 2017/11/20閲覧。
        </H.A>
      </li>
    </ul>
  </>
)
