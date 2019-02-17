import React from 'react'
import InternalLink from './internal-link'
import Link from './link'

const OtherCardLink = ({permalink, ...props}) => (
  <Link LinkComponent={InternalLink} href={`?p=${permalink}`} {...props} />
)

export default OtherCardLink
