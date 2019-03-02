import React from 'react'
import sourcesErrataObject from '../lib/sources-errata-object'
import InternalLink from './internal-link'
import Link from './link'

const OtherCardLink = ({permalink, children, useTitleAsChildren, ...props}) => (
  <Link LinkComponent={InternalLink} href={`?p=${permalink}`} {...props}>
    {useTitleAsChildren ? sourcesErrataObject[permalink].jpTitle : children}
  </Link>
)

export default OtherCardLink
