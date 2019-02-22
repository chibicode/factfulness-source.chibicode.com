import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.A href="https://www.emdat.be">国際災害データベースによると</H.A>
      、2015年のネパール地震では9034人が亡くなり、20万人が負傷し、災害の影響は560万人にも及んだ。一方、
      <H.A href="https://gapm.io/xnep">
        ネパール政府は1万人の死亡者が出たと発表している
      </H.A>
      。被害を過小評価しないように、本書ではネパール政府の推計を使った。
    </p>
    <p>
      <H.FB pageNumber={365}>
        2003年のヨーロッパの熱波についてのデータはUNISDRによるもの。
      </H.FB>
      西ヨーロッパの死亡者数は4万6730人とされている。
      その他の災害のデータはEM-DATによるもの。
    </p>
    <p>
      <H.FB pageNumber={365}>
        現在バングラデシュで洪水対策に使われている、すばらしいデジタル監視システムは
        <H.A href="http://www.ffwc.gov.bd">こちら</H.A>。
      </H.FB>
    </p>
  </>
)
