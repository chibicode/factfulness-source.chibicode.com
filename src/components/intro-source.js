import React from 'react'
import * as H from './h'
import AmazonLink from './amazon-link'
import Link from './link'
import Blockquote from './blockquote'

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
    <p>原文の冒頭には、以下のように書かれています:</p>
    <Blockquote>
      <p>
        『ファクトフルネス』の巻末には、本書の事実に関する脚注を載せていますが、さらにこのページへのリンクも貼っています。こちらのページのほうが詳細や参考文献が充実しています。
      </p>
      <p>
        『ファクトフルネス』に書いてあることは、最も信頼できるデータが基になっているべきです。しかし、わたしたちはすべての分野に精通しているわけではありません。本書で使われている参考文献より正確な文献や、違う立場の文献を、あなたはおそらくご存知だと思います。『ファクトフルネス』のファクトを改善し、将来の改訂に役立てるために、こちらからフィードバックを送ってくださると嬉しいです:{' '}
        <H.A href="http://www.gapm.io/feedback">gapm.io/feedback</H.A>
      </p>
    </Blockquote>
  </>
)

export default IntroSource
