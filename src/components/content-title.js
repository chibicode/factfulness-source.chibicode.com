/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import CardTitle from './card-title'

const ContentTitle = ({type, isModal, jpTitle, jpPage}) => (
  <CardTitle smallMarginBottom largeFont={isModal}>
    {jpTitle}
    {(Array.isArray(jpPage) || (jpPage > 0 && jpPage < 400)) &&
      (type === 'errata' ? (
        <>P{Array.isArray(jpPage) ? jpPage.join('/') : jpPage}</>
      ) : (
        <span
          css={({colors}) => css`
            color: ${colors.base400};
          `}
        >
          {' '}
          (P{Array.isArray(jpPage) ? jpPage.join('-') : jpPage})
        </span>
      ))}
  </CardTitle>
)

export default ContentTitle
