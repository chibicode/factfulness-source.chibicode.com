import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      This poll was initially conducted by YouGov. The results were so
      extraordinary that Gapminder decided to see if they could be replicated
      with a different polling company. In 2017, the same question was asked
      with Ipsos-MORI and the results were similar: This barchart mixes the
      results from the two online polls.
      <a href="http://www.gapm.io/xyougov15">
        YouGov polled 18,000 people in 17 countries
      </a>
      . The two countries where most people were
      <a href="http://www.yougov.co.uk/news/2016/01/05/chinese-people-are-most-optimistic-word">
        optimistic about the world
      </a>
       were China and Indonesia in which 41% and 23% said the world is getting
      better. But we have decided to remove these two outliers because the
      proportion of people with access to the internet is not large enough to
      represent the whole population. It's quite likely that people with
      internet access have a different perception of the world than the rest of
      the population. This is not to discard the plausible and interesting
      hypothesis that Asians may be more positive than westerners. See
      <a href="http://www.gapm.io/rbetter">www.gapm.io/rbetter</a>.
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <a href="https://d25d2506sfb94s.cloudfront.net/cumulus_uploads/document/z2knhgzguv/GB_Website.pdf">
          YouGov[1] November--December 2015. Poll results.
        </a>
      </li>
    </ul>
  </>
)
