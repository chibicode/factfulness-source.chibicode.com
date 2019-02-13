import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={363}>
        OurWorldInData[8]のサイトから“
        <H.A href="https://ourworldindata.org/how-many-deaths-make-a-natural-disaster-newsworthy.">
          Not All Deaths Are Equal: How Many Deaths Make a Natural Disaster
          Newsworthy?
        </H.A>
        ”を閲覧すれば、災害による死を比べることができる。ギャップマインダーは現在、さまざまな死亡事故や環境問題を取り上げるメディアが、いかに偏った報道をしているかについて調べている。調査が終わり次第、
        <H.A href="https://gapm.io/fndr">こちらで公開する予定だ</H.A>。
      </H.FB>
    </p>

    <H.SmallHeading>出典</H.SmallHeading>

    <ul>
      <li>
        <H.A href="http://www.emdat.be/">
          EM-DAT Centre for Research on the Epidemiology of Disasters (CRED) The
          International Disaster Database. Debarati Guha-Sapir. 2017/11/5閲覧。
        </H.A>
      </li>
      <li>
        <H.A href="http://www.gapm.io/xiata">
          IATA (International Air Transport Association) &quot;Accident
          Overview.&quot; Table. Fact Sheet Safety. December 2017.
        </H.A>
      </li>
      <li>
        <H.A href="http://www.gapm.io/xgtdb17">
          GTD (Global Terrorism Database) (2017) 2017/12/7閲覧。
        </H.A>
      </li>
      <li>
        <H.A href="http://www.gapm.io/xowd8">
          OurWorldInData[8] Tzvetkova, Sandra &quot;Not All Deaths Are Equal:
          How Many Deaths Make a Natural Disaster Newsworthy?&quot;
          2017/7/19閲覧。
        </H.A>
      </li>
      <li>
        <H.A href="http://www.ucdp.uu.se/downloads">
          UCDP[1] (Uppsala Conflict Data Program) Battle-Related Deaths Dataset,
          1989 to 2016, dyadic, version 17.1. Allansson et alも (2017)も参考に。
        </H.A>
      </li>
    </ul>
  </>
)
