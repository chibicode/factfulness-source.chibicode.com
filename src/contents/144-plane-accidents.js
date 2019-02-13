import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={365}>
        最近の飛行機事故の死亡者数は国際航空運送協会のデータを利用した(
        <H.A href="http://gapm.io/xiatas">IATA</H.A>
        )。旅客機の飛行距離のデータは、飛行機事故を減らす目的でつくられた国連の
        専門機関である、国際民間航空機関のデータを利用した(
        <H.A href="https://www.icao.int/sustainability/Pages/Air-Traffic-Monitor.aspx">
          ICAO[1,2,3]
        </H.A>
        )
      </H.FB>{' '}
      Gapminder[16] on airplane fatalities---v1 is based on
      <H.A href="https://www.icao.int/sustainability/Pages/Air-Traffic-Monitor.aspx">
        ICAO[3]
      </H.A>
      , <H.A href="http://www.gapm.io/xbtsafat">US Air Carrier Safety Data</H.A>
      and <H.A href="http://www.gapm.io/xbtspass">Revenue Passenger-Miles</H.A>
      from BTS[1,2] and The Annual Reports of the U.S. Scheduled Airline
      Industryfrom <H.A href="http://airlines.org/">ATAA</H.A>. See
      <H.A href="http://www.gapm.io/ttranspa">www.gapm.io/ttranspa</H.A> and
      <H.A href="http://www.gapm.io/dpland">www.gapm.io/dpland</H.A>.
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <H.A href="http://airlines.org/">
          ATAA, Air Transport Association of America
        </H.A>
      </li>
      <li>
        <H.A href="http://www.gapm.io/dpland">
          Gapminder[16] Air plane fatalities---v1. Indicator
          Population---v5---all countries---1800--2100, based on IATA, ICAO[3],
          BTS[1,2] &amp; ATAA.
        </H.A>
      </li>
      <li>
        <H.A href="http://gapm.io/xiatas">IATA Accident Overview</H.A>
      </li>
      <li>
        ICAO[1,2,3]
        <H.A href="http://gapm.io/xchicc">
          Convention on International Civil Aviation
        </H.A>
        , <H.A href="http://www.gapm.io/xchi13">Annex 13</H.A> in 1955, and the
        <H.A href="https://www.icao.int/sustainability/Pages/Air-Traffic-Monitor.aspx">
          Air Transport Monitor
        </H.A>
      </li>
    </ul>
  </>
)
