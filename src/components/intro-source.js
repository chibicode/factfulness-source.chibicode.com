import React from 'react'
import * as H from './h'
import AmazonLink from './amazon-link'
import Link from './link'

const IntroSource = () => (
  <>
    <p>
      これは、2019年1月に日経BPから発売された訳書『
      <Link LinkComponent={AmazonLink}>ファクトフルネス</Link>
      』の
      <H.A href="https://www.gapminder.org/factfulness-book/notes/">
        ウェブ脚注(バージョン4)
      </H.A>
      の日本語訳です。
    </p>
    <p>
      本のp353〜p373にも21ページの脚注がありますが、こちらは拡張版です。文字数にすると、本の脚注は約2万5000文字なのに対し、このウェブ脚注は7万文字以上あります。
    </p>
  </>
)

export default IntroSource
