import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      The data on fatalities in recent years is from IATA. The data on passenger
      miles is from the UN agency that managed to reduce the number of
      accidents, based on ICAO[1,2,3]. Gapminder[16] on airplane fatalities---v1
      is based on<a href="http://gapm.io/xiatas"> IATA</a>,
      <a href="https://www.icao.int/sustainability/Pages/Air-Traffic-Monitor.aspx">
        ICAO[3]
      </a>
      , <a href="http://www.gapm.io/xbtsafat">US Air Carrier Safety Data</a>
       and <a href="http://www.gapm.io/xbtspass">Revenue Passenger-Miles</a>
       from BTS[1,2] and The Annual Reports of the U.S. Scheduled Airline
      Industryfrom <a href="http://airlines.org/">ATAA</a>. See
      <a href="http://www.gapm.io/ttranspa">www.gapm.io/ttranspa</a> and
      <a href="http://www.gapm.io/dpland">www.gapm.io/dpland</a>.
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <a href="http://airlines.org/">
          ATAA, Air Transport Association of America
        </a>
      </li>
      <li>
        <a href="http://www.gapm.io/dpland">
          Gapminder[16] Air plane fatalities---v1. Indicator
          Population---v5---all countries---1800--2100, based on IATA, ICAO[3],
          BTS[1,2] &amp; ATAA.
        </a>
      </li>
      <li>
        <a href="http://gapm.io/xiatas">IATA Accident Overview</a>
      </li>
      <li>
        ICAO[1,2,3]
        <a href="http://gapm.io/xchicc">
          Convention on International Civil Aviation
        </a>
        , <a href="http://www.gapm.io/xchi13">Annex 13</a> in 1955, and the
        <a href="https://www.icao.int/sustainability/Pages/Air-Traffic-Monitor.aspx">
          Air Transport Monitor
        </a>
      </li>
    </ul>
  </>
)
