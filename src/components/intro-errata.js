import React from 'react'
import * as H from './h'
import InternalLink from './internal-link'
import Link from './link'

const IntroErrata = () => (
  <>
    <H.CardHeading>正誤表</H.CardHeading>
    <p>
      本書の正誤表も公開しています。
      <Link LinkComponent={InternalLink} href="/errata">
        こちらからご覧ください
      </Link>
      。
    </p>
  </>
)

export default IntroErrata
