import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g25.png" />
    <p>
      「最高水準の治療を行った場合」とある通り、これは世界の平均データではなく、アメリカで治療を行った場合のデータだ。アメリカの癌治療のデータは、ヨーロッパや日本など、他のレベル4の国の治療データと近くなる。
    </p>
    <p>
      癌の研究は進んでおり、5年生存率も高くなってきているが、世界のほとんどの人はこういった治療を受けられないことを忘れてはいけない。データはアメリカ国立がん研究所(NCI)によるもの。前半のデータは
      <H.A href="http://www.gapm.io/xccs17">NCI[1]</H.A>
      を参考に。2010年の数値は<H.A href="http://www.gapm.io/xccs10">NCI[2]</H.A>
      を参考に。
    </p>
    <H.GraphExplanation />
  </>
)
