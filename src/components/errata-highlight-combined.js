import React from 'react'
import ErrataHighlight from './errata-highlight'

const ErrataHighlightCombined = ({before, after}) => (
  <>
    <ErrataHighlight before>{before}</ErrataHighlight> →{' '}
    <ErrataHighlight after>{after}</ErrataHighlight>
  </>
)

export default ErrataHighlightCombined
