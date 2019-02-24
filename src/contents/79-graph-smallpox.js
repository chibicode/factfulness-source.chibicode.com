import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      Smallpox had been one of the major killers of humans. In 18th century
      Europe, for example, it caused
      <H.A href="https://www.ourworldindata.org/eradication-of-diseases/#smallpox">
        about 7% of all deaths
      </H.A>
      , according to Max Roser (2018). Vaccines were
      <H.A href="http://www.who.int/csr/disease/smallpox/vaccines/en/">
        invented already in 1796
      </H.A>
      , but not until 1980 was the nasty viruses defeated thanks to massive
      global vaccination campaigns lead by the World Health Organization. The
      last known case was recorded in
      <H.A href="http://www.who.int/csr/disease/smallpox/en/">
        Somalia in 1977
      </H.A>
      . Smallpox was the first (and so far the only) disease eradicated by
      global vaccination programs. The graph shows the years when the last case
      was recorded in each country, based on data that was kindly shared with us
      by Katie Hampson, at Wellcome Trust Boyd Orr Centre for Population and
      Ecosystem at University of Glasgow, Medical, Veterinary & Life
      Sciences. The data was published in the paper
      <H.A href="http://rstb.royalsocietypublishing.org/content/368/1623/20120137">
        Towards the endgame and beyond: complexities and challenges for the
        elimination of infectious diseases
      </H.A>
      by Klepac, et al (2013).
    </p>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="https://www.ourworldindata.org/eradication-of-diseases">
            Max Roser (2018) "Eradication of Diseases" Smallpox.
          </H.A>
        </li>
        <li>
          <H.A href="http://www.rstb.royalsocietypublishing.org/content/368/1623/20120137">
            Klepac, Petra, et al "Towards the endgame and beyond: complexities
            and challenges for the elimination of infectious diseases." Figure
            1. Phil. Trans. R. Soc. B June 24, 2013.
          </H.A>{' '}
          DOI: 10.1098/rstb.2012.0137
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
