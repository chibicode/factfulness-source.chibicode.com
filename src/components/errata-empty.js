import React from 'react'
import Link from './link'
import InternalLink from './internal-link'

const ErrataEmpty = () => (
  <p>
    この章にはまだ修正箇所はありません。もし間違いがありましたら、共訳者の上杉(
    <Link href="mailto:shu@chibicode.com">shu@chibicode.com</Link>
    )までご連絡ください。また、
    <Link LinkComponent={InternalLink} href="/">
      脚注
    </Link>
    もあわせてご覧ください。
  </p>
)

export default ErrataEmpty
