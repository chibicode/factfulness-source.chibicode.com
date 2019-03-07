import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={369}>
        ギャップマインダーは、アメリカとスウェーデンの人々を対象に調査を行い、「低所得国、途上国の生活はどんなものだと思うか?」と尋ねてみた。返ってきた答えは、決まって「30〜40年前なら正しい答え」ばかりだった。
      </H.FB>
    </p>
    <H.SmallHeading>
      <strong>質問:</strong> 低所得国の平均寿命は何歳？
    </H.SmallHeading>
    <H.ListAfterHeading>
      <li>回答の平均: 45歳</li>
      <li>
        <H.A href="http://gapm.io/xwb177">世界銀行</H.A>による推定: 62歳
      </li>
    </H.ListAfterHeading>
    <H.SmallHeading>
      <strong>質問:</strong> 低所得国で、安全な水にアクセスできる人の割合は？
    </H.SmallHeading>
    <H.ListAfterHeading>
      <li>回答の平均: 20%</li>
      <li>
        <H.A href="http://gapm.io/xwb178">世界銀行</H.A>
        による推定: 66%
      </li>
    </H.ListAfterHeading>
    <H.SmallHeading>
      <strong>質問:</strong>{' '}
      低所得国で、何らかの予防接種を受けている子供の割合は？
    </H.SmallHeading>
    <H.ListAfterHeading>
      <li>回答の平均: 40%</li>
      <li>
        <H.A href="http://gapm.io/xwhoim">WHO[1]</H.A>を基にした
        <H.A href="http://gapm.io/xwb179">世界銀行</H.A>による推定: 78%
      </li>
    </H.ListAfterHeading>
    <H.SmallHeading>
      <strong>質問:</strong> 低所得国で、栄養失調に陥っている人の割合は？
    </H.SmallHeading>
    <H.ListAfterHeading>
      <li>回答の平均: 70%</li>
      <li>
        <H.A href="http://gapm.io/faoh2006">FAO[1]</H.A>を基にした
        <H.A href="http://gapm.io/xwb1710">世界銀行</H.A>による推定: 26%
      </li>
    </H.ListAfterHeading>
    <p>
      低所得国のデータには誤差がつきものだが、どれほど誤差があっても、人々の想像ほど悪い数字にはならない。
    </p>
  </>
)
