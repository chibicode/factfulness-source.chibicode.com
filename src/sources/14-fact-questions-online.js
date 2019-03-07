import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      ギャップマインダーのオンラインクイズは2017年に公開された(全13問・3択)。
      <H.A href="http://forms.gapminder.org/s3/test-2018">
        2018年版のクイズはこちら
      </H.A>
      。
      <H.Addition>
        質問自体は2017年版も2018年版も同じだが、それぞれの年ごとの正解率を測るため、2017年版と2018年版のページを分けているようだ。
      </H.Addition>
    </p>
    <H.BlockAddition>
      <p>
        <H.BlockAdditionHeader />
        <H.A href="https://factquiz.chibicode.com/">
          日本語版のチンパンジークイズはこちらから受けられる
        </H.A>
        。
      </p>
    </H.BlockAddition>
  </>
)
