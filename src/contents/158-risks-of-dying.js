import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    The percentages we quote take the death tolls on Level 4 for the past ten
    years divided by the number of all deaths on Level 4 over that period, and
    are based on the following data sources:
    <a href="http://www.emdat.be/">EM-DAT</a> for natural disasters, IATA for
    plane crashes, [IHME<a href="http://ihmeuw.org/49pc">10</a>] for murders,
    <a href="http://gapm.io/xgalvac17">UCDP[1]</a> for wars, and
    <a href="http://www.gapm.io/xgtdb17">GTD</a> for terrorism. A more relevant
    risk calculation should not just divide by the number of all deaths, but
    rather should take into account exposure to the situations in which these
    kinds of deaths can occur. See
    <a href="http://www.gapm.io/ffear">www.gapm.io/ffear</a>.
  </p>
)
