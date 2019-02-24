/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import colors from '../lib/colors'
import chapterTitles from '../lib/chapter-titles'
import Card from './card'
import {ns} from './global-styles'

const SectionHeader = ({children}) => (
  <Card background={colors.blueGrey400} foreground="#fff">
    <h2
      css={css`
        font-size: 1.5rem;
        letter-spacing: -1px;
        text-align: center;
        margin: 0 0 1rem;
        font-weight: normal;
        ${ns} {
          font-size: 1.75rem;
          letter-spacing: -1.5px;
        }
      `}
    >
      {children}
      {chapterTitles[children] && (
        <>
          : <strong>{chapterTitles[children]}</strong>
        </>
      )}
    </h2>
  </Card>
)

export default SectionHeader
