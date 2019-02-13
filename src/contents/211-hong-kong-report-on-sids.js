import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      The number of sudden infant deaths fell during the 1990s due to successful
      intervention campaigns telling mothers not to leave their babies in the
      prone position. But these campaigns only helped bring down the rates of
      sudden infant deaths to the same low levels where they used to be, before
      the prone position was promoted. The same pattern evolved in the US,
      Norway and Sweden.
      <H.FB pageNumber={362}>
        スウェーデンで乳幼児突然死症候群(SIDS)が増えた原因がうつぶせ寝だったということは、Gilbert
        の論文(2005)とHögbergとBergströmによる1997年の論文“Läkarråd ökade risken
        för plötslig spädbarnsdöd”に書かれている。
      </H.FB>
    </p>
    <p>
      <H.FB pageNumber={362}>香港の論文はDavies(1985)のもの。</H.FB> The study
      was the first to suggest that the practice of placing babies in prone
      position could be the cause of sudden infant deaths; see
      <H.A href="https://www.ncbi.nlm.nih.gov/pubmed/2866397?dopt=Abstract">
        Cot death in Hong Kong: a rare problem?
      </H.A>
      and
      <H.A href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1835990/">
        this follow-up report
      </H.A>
      from N.N. Lee (1989). For historical data on sudden infant deaths in
      Norway, see, for example, Irgens et. al (1995), available to download as
      <H.A href="http://pubmedcentralcanada.ca/pmcc/articles/PMC1511132/pdf/archdisch00624-0014.pdf">
        PDF here
      </H.A>
      . For more about
      <H.A href="https://www.ispid.org/fileadmin/user_upload/textfiles/articles/CPR17_Hauck_SIDS_Trends.pdf">
        international trends in SIDS
      </H.A>
      .
    </p>
  </>
)
