import React from 'react'
import InternalLink from './internal-link'

const OtherCardLink = ({permalink, ...props}) => (
  <InternalLink href={`?p=${permalink}`} {...props} />
)

export default OtherCardLink
