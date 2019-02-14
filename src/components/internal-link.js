import Link from 'next/link'
import React from 'react'

const InternalLink = ({href, ...props}) => (
  <Link passHref href={href} scroll={false}>
    <a {...props} />
  </Link>
)

export default InternalLink
