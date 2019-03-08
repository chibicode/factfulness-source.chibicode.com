import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.ErrataHighlightCombined
        before={
          <>
            2015年から2030年のあいだに新しく生まれる、15歳未満の子供たちは20億人いる。そして2015年に子供だった20億人は、2030年には30歳から45歳になっている。2015年には、30歳から45歳の人が10億人しかいなかったわけだから、単純計算で大人の数は10億人増えるはずだ。
          </>
        }
        after={
          <>
            <strong>2015年以降に生まれた</strong>
            、15歳未満の子供たちは20億人いる。2015年に子供だった20億人は、2030年には
            <strong>15歳から30歳になり</strong>、
            <strong>15歳から30歳だった20億人は</strong>
            30歳から45歳になっている。2015年には、30歳から45歳の人が10億人しかいなかったわけだから、
            <strong>大人の数は</strong>
            10億人増えるはずだ。
          </>
        }
      />
    </p>
    <p>
      <H.ErrataHighlightCombined
        before={<>子供か、若者だったということだ。</>}
        after={
          <>
            <strong>若者だった</strong>ということだ。
          </>
        }
      />
    </p>
    <p>
      (修正前は説明が図と噛み合いませんでした。また最後は原文にも「子供か、若者だった」とありますが、新しく出現する30〜45歳は以前は15〜30歳だったため、「若者だった」が正しく、原文が間違いだったと思います。現在原著の著者に問い合わせ中です)
    </p>
  </>
)