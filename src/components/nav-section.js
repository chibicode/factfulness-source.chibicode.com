/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {useContext} from 'react'
import pagedSources from '../lib/paged-sources'
import {NavContext} from './nav-state'

const NavChapterNumber = () => {
  const {minVisibleIndex} = useContext(NavContext)
  return (
    <div>
      {minVisibleIndex >= 0
        ? pagedSources[minVisibleIndex].section ||
          pagedSources[minVisibleIndex].chapter
        : 'ウェブ脚注'}
    </div>
  )
}

export default NavChapterNumber
