import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      When you open the book, you see a colorful chart: the World Health Chart
      2017. This chart shows 182 states recognized by the UN, only excluding
      those with the smallest populations (such as the Vatican). Each bubble is
      a country. The size of the bubble represents the country&rsquo;s
      population, and the color of the bubble its geographical region.
    </p>
    <p>
      Gapminder has defined four regions, and color coded each of them: green
      for the Americas, blue for Africa, red for Asia and Australia, and yellow
      for Europe, including Greenland, Russia, and some parts of Central Asia.
      Read more about the&nbsp;
      <a href="http://www.gapm.io/ireg">
        four regions we use in our global graphs
      </a>
      .
    </p>
    <p>
      The x-axis shows GDP per capita (PPP in constant 2011 international $) on
      a logarithmic scale, which&nbsp;
      <a href="http://gapm.io/elev">Gapminder[3]</a>&nbsp;has divided into four
      income levels. The population data comes from&nbsp;
      <a href="https://esa.un.org/unpd/wpp">UN-POP[1]</a>. The GDP data comes
      from&nbsp;<a href="http://gapm.io/xwb171">World Bank[1]</a>&nbsp;and has
      been extended to 2017 by&nbsp;
      <a href="http://gapm.io/dgdppc">Gapminder[2]</a>&nbsp;with forecasts
      from&nbsp;<a href="http://gapm.io/ximfw">IMF[1]</a>. The y-axis shows life
      expectancy at birth, based on data for 2016 from&nbsp;
      <a href="http://gapm.io/xihlex">IHME[1]&nbsp;</a>and extended to 2017
      by&nbsp;<a href="http://gapm.io/ilex">Gapminder[4]</a>.
    </p>
    <p>
      For the animated version of this chart, together with more information,
      visit&nbsp;<a href="https://www.gapminder.org/whc/">gapminder.org/whc</a>.
    </p>
  </>
)
