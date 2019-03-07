import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={362}>
        このデータは国連人口基金と国連人口部のデータベースを基にしている(
        <H.A href="http://www.unfpa.org/sexual-reproductive-health">UNFPA</H.A>
        と<H.A href="https://gapm.io/xcontr">UN-Pop[9]</H.A>)。
      </H.FB>
      ちなみに国連人口基金は性と生殖に関する健康を推進する国連の団体だ。
    </p>
    <p>
      ここでは国連の
      <H.A href="http://www.un.org/en/development/desa/population/publications/dataset/contraception/wcu2017.shtml">
        World Contraceptive Use 2017
      </H.A>
      という、家族計画に必要なものが手に入るかについてのデータセットを用いている。対象は子供を産む年齢(15〜49歳)で配偶者がいる女性だ。ちなみに本書では避妊具が「手に入る」女性の割合を書いているが、国連は避妊具が「手に入らない」女性の割合を公開している。これは妊娠したくない、または妊娠を遅らせたいと考える女性のうち、避妊具を使っていない女性が占める割合だ。
    </p>
    <p>
      また、国ごとの
      <H.A href="https://data.worldbank.org/indicator/SP.DYN.CONM.ZS?locations=XN-XT-XD-XM">
        避妊具の普及率はこちらから見れる
      </H.A>
      。こちらの
      <H.A href="https://www.unfpa.org/sexual-reproductive-health">
        動くチャート
      </H.A>
      も参考のこと。
    </p>
  </>
)
