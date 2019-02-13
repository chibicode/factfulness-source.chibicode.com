import FinalNote from '../components/final-note'
import pagedSources from './paged-sources'

export const finalNoteSources = {
  jpTitle: 'グローバルな開発に関する無料データ',
  permalink: 'final-note',
  CustomComponent: FinalNote
}

export const pagedSourcesObject = Object.assign(
  {},
  pagedSources.reduce((obj, item) => {
    obj[item.permalink] = item
    return obj
  }, {}),
  {[finalNoteSources.permalink]: finalNoteSources}
)
