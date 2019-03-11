/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import * as H from './h'

const IntroC2a = () => (
  <>
    <H.CardHeading>ブログ記事</H.CardHeading>
    <p>
      この脚注ページを広めるべく、ブログ記事を書きました → 「
      <H.A href="https://jp.chibicode.com/factfulness-notes/">
        『ファクトフルネス』と知的誠実さ:
        7万字の脚注が、たくさん読まれることはないけれど
      </H.A>
      」
    </p>
    <p>
      <H.A href="https://jp.chibicode.com/factfulness-notes/">
        <img
          css={css`
            border-radius: 0.5rem;
          `}
          src="/static/images/og-v3@0.5x.jpg"
          alt="『ファクトフルネス』と知的誠実さ: 7万字の○○が、たくさん読まれることはないけれど"
        />
      </H.A>
    </p>
  </>
)

export default IntroC2a
