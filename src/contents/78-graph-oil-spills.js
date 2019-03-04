import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g2.png" />
    <p>
      タンカーから流出した石油の量だけでなく、石油流出事故の数も減っている.1970年代は1年あたり24.5件だったが、2010年から2016年の間は1年あたり1.7件に減った。
      <H.A href="http://www.gapm.io/xitopf">
        データはITOPF (International Tanker Owners Pollution
        Federation)によるもの
      </H.A>
      。
    </p>
  </>
)
