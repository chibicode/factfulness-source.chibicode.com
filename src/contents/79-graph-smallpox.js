import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      Smallpox had been one of the major killers of humans. In 18th century
      Europe, for example, it caused
      <a href="https://www.ourworldindata.org/eradication-of-diseases/#smallpox">
        about 7% of all deaths
      </a>
      , according to Max Roser (2018). Vaccines were
      <a href="http://www.who.int/csr/disease/smallpox/vaccines/en/">
        invented already in 1796
      </a>
      , but not until 1980 was the nasty viruses defeated thanks to massive
      global vaccination campaigns lead by the World Health Organization. The
      last known case was recorded in
      <a href="http://www.who.int/csr/disease/smallpox/en/">Somalia in 1977</a>.
      Smallpox was the first (and so far the only) disease eradicated by global
      vaccination programs. The graph shows the years when the last case was
      recorded in each country, based on data that was kindly shared with us by
      Katie Hampson, at Wellcome Trust Boyd Orr Centre for Population and
      Ecosystem at University of Glasgow, Medical, Veterinary &amp; Life
      Sciences. The data was published in the paper
      <a href="http://rstb.royalsocietypublishing.org/content/368/1623/20120137">
        Towards the endgame and beyond: complexities and challenges for the
        elimination of infectious diseases
      </a>
       by Klepac, et al (2013).
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <a href="https://www.ourworldindata.org/eradication-of-diseases">
          Max Roser (2018) &quot;Eradication of Diseases&quot; Smallpox.
        </a>
      </li>
      <li>
        <a href="http://www.rstb.royalsocietypublishing.org/content/368/1623/20120137">
          Klepac, Petra, et al &quot;Towards the endgame and beyond:
          complexities and challenges for the elimination of infectious
          diseases.&quot; Figure 1. Phil. Trans. R. Soc. B June 24, 2013.
        </a>{' '}
        DOI: 10.1098/rstb.2012.0137
      </li>
    </ul>
  </>
)
