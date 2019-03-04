import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g29.png" />
    <p>
      Statistics showing the global increase of mobile penetration often uses
      <H.A href="http://gapm.io/xitumob">data from ITU</H.A> from the
      <H.A href="https://www.itu.int/en/Pages/default.aspx">
        International Telecommunication Union
      </H.A>
      , ITU[1], counting the number of subscriptions, not subscribers. In the
      world in 2015 there were 7.2 billion SIM cards and 7.5 billion people, but
      the rate is misleading since many people have multiple SIM cards. GSMA
      publishes estimates of the number of unique subscribers, and their data
      series start with the 2010 numbers. Gapminder has extended the series,
      combining these two measures by calculating the rate of subscriptions per
      subscriber for the overlapping year 2010, and then assume that the same
      rate is applicable from the beginning of the ITU[1] subscription series in
      1980 (when ITU reports 23,482 subscriptions worldwide). The ITU series
      beginning in 1980 is retrieved from
      <H.A href="http://gapm.io/xwb1718">the World Bank[18]</H.A>.
    </p>
    <H.GraphExplanation />
  </>
)
