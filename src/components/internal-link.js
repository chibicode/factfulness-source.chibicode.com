import Link from 'next/link'
import React from 'react'

const InternalLink = props => (
  <Link passHref href="/" scroll={false}>
    <a {...props} />
  </Link>
)

export default InternalLink
