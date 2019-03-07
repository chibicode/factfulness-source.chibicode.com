import Link from 'next/link'
import React from 'react'

const InternalLink = ({href, prefetch, ...props}) => (
  <Link passHref href={href} scroll={false} prefetch={prefetch}>
    <a {...props} />
  </Link>
)

export default InternalLink
