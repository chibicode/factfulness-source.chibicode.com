import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    Data for 2005 to 2017 is taken from{' '}
    <H.A href="http://gapm.io/xituintern">ITU[2]</H.A> divided by{' '}
    <H.A href="https://esa.un.org/unpd/wpp">UN-Pop[1]</H.A>. Data before 2005
    comes from previous editions of the ITU report via World Bank[19]. These are
    combined in <H.A href="http://gapm.io/dintus">Gapminder[22]</H.A>. The first
    data point, zero internet users in 1980, is based on the Internet System
    Consortium (ISC), which count internet hosts historically. The first record
    is from August 1981 with 213 hosting servers, why we assume that the year
    before, the number of users was practically zero.
  </p>
)
