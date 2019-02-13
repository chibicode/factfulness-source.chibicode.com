import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      Roughly half a billion people in Africa today live in extreme poverty, as
      cited in Factfullness, p. 171. The more precise estimate from Gapminder[9]
      is 0.41 billion people, based on PovalCal[1] and IMF[1]. Keep in mind that
      there are huge uncertainties in extreme poverty, as described in the note
      Fact Question 3: Extreme Poverty.
    </p>
    <p>
      <H.FB pageNumber={361}>
        ポール・コリアーは、『最底辺の10億人─最も貧しい人のために本当になすべきことは何か』(2008年6月、中谷和夫訳、日経BP社)の中で、痩せ細った土地に縛られたり、紛争地帯に暮らしている、世界で最も貧しい人たちの未来を描いている。
      </H.FB>
      To see where these people are, the thing to measure is child mortality,
      which is the most reliable indication of extreme poverty. By combining
      these four detailed maps, we can locate the poorest on earth with the most
      unfortunate future. Our rough estimate of people in extreme poverty close
      to conflicts is based on ODI (Overseas Development Institute) from 2015,
      preliminary results by Andreas Forø Tollefsen and Gudrun Østby of the
      number of people who live close to conflict worldwide (743 millions in
      2016); download PDF
      <H.A href="http://www.gapm.io/xodi">here</H.A>. Data on where most people live
      is from United Nations Population Division; where there are high rates of
      child mortality from <H.A href="http://gapm.io/xih5mr">IHME[6]</H.A>; where
      soils give low yield from FAO[4]; and where there are conflicts from
      UCDP[2]. As long as there's conflict, most people stuck in poverty will
      have a hard time getting out.
    </p>
  </>
)
