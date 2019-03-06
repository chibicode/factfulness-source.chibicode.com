import React from 'react'
import * as H from './h'

const IntroC2a = () => (
  <>
    <H.CardHeading>ブログ記事</H.CardHeading>
    <p>
      この脚注ページを広めるべく、ブログ記事を書きました → 「
      <H.A href="https://jp.chibicode.com/factfulness-notes/">
        7万字の○○が、たくさん読まれることはないけれど
      </H.A>
      」
    </p>
    <p>
      <H.A href="https://jp.chibicode.com/factfulness-notes/">
        <img
          src="/static/images/og.jpg"
          alt="7万字の○○が、たくさん読まれることはないけれど"
        />
      </H.A>
    </p>
  </>
)

export default IntroC2a
