import React from 'react'
import Link from './link'

const FeedbackText = () => (
  <>
    この脚注、または本書で該当する部分のファクトに間違いがございましたら、
    共訳者の上杉(
    <Link href="mailto:shu@chibicode.com">shu@chibicode.com</Link>)
    までご連絡ください。それぞれ吟味したのち、必要に応じて原著の著者に転送させていただきます。原著の著者に直接英語でフィードバックを送るには、こちらから:{' '}
    <Link href="mailto:factfulness-book@gapminder.org">
      factfulness-book@gapminder.org
    </Link>
  </>
)

export default FeedbackText
