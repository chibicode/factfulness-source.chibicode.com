import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={11} />

    <p>
      <H.FB pageNumber={371}>
        正解はC。国際自然保護連合が作成したレッドリストによれば、3つの動物のうち、1996年よりさらに絶滅の危機に瀕している動物はひとつもない。
      </H.FB>
    </p>

    <p>
      The data is based on the IUCN Red List of Threatened Species; see IUCN Red
      List[4] below, with tables on the numbers of threatened species between
      1996 and 2017.
    </p>
    <p>
      The tiger (Panthera tigris) was classified as Endangered (EN) in 1996, and
      it still is; see <a href="http://www.gapm.io/xiucnr1">IUCN Red List[1]</a>
      . According to a statement from <a href="http://gapm.io/xwwftiger">WWF</a>
      in 2016, the number of wild tigers are increasing: &quot;After a century
      of decline, tiger numbers are on the rise. At least 3,890 tigers remain in
      the wild, but much more work is needed to protect this species that's
      still vulnerable to extinction.&quot; See also Platt (2016) in Scientific
      American
      <a href="https://blogs.scientificamerican.com/extinction-countdown/tiger-populations-increasing/">
        reporting on the rising tiger numbers
      </a>
      .
    </p>
    <p>
      According to <a href="http://www.gapm.io/xiucn2">IUCN Red List[2]</a>, the
      giant panda was classified as Endangered (EN) in 1996, but in 2015, new
      assessments of increasing wild populations resulted in a change of
      classification to the less critical status of Vulnerable (VU).
    </p>
    <p>
      The black rhino was classified as Critically Endangered (CR) and still is;
      see IUCN <a href="http://www.gapm.io/xiucn3">Red List[3]</a>. The
      International Rhino Foundation states that wild populations are slowly
      increasing, estimating the population at 5,042--5,455 in their
      <a href="https://rhinos.org/newsroom/annual-report-financials/">
        annual report for 2016
      </a>
      . And the slow increase remains in March 2018, according to updates from
      the <a href="https://rhinos.org/state-of-the-rhino/">Rhino foundation</a>.
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <a href="http://www.gapm.io/xiucnr1">
          IUCN Red List[1] Goodrich, J., et al. &quot;Panthera tigris
          (Tiger).&quot; (2015) e.T15955A50659951.
        </a>
      </li>
      <li>
        <a href="http://www.gapm.io/xiucn2">
          IUCN Red List[2] Swaisgood, R., et al. &quot;Ailuropoda melanoleuca
          (Giant Panda).&quot; (2016) e.T712A121745669.
        </a>
      </li>
      <li>
        <a href="http://www.gapm.io/xiucn3">
          IUCN Red List[3] Emslie, R. &quot;Diceros bicornis (Black Rhinoceros,
          Hook-lipped Rhinoceros).&quot; (2012) e.T6557A16980917.
        </a>
      </li>
      <li>
        <a href="http://www.gapm.io/xiucnr4">
          IUCN Red List[4] Table 1: Numbers of threatened species by major
          groups of organisms (1996--2017).
        </a>
      </li>
    </ul>
  </>
)
