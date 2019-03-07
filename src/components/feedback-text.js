import React from 'react'
import Link from './link'

const FeedbackText = () => (
  <>
    この脚注に誤字脱字がございましたら、共訳者の上杉(
    <Link href="mailto:shu@chibicode.com">shu@chibicode.com</Link>)
    までご連絡ください。この脚注、あるいは本書で該当する部分のファクトに間違いがあった場合も、ぜひご連絡ください。
    それぞれ吟味したのち、必要に応じて原著の著者に転送させていただきます。原著の著者に直接英語でフィードバックを送るには、こちらから:{' '}
    <Link href="mailto:factfulness-book@gapminder.org">
      factfulness-book@gapminder.org
    </Link>
    。
  </>
)

export default FeedbackText
