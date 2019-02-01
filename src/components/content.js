/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import contentBundles from '../lib/content-bundles'
import colors from '../lib/colors'

const Content = ({jpPage, permalink, jpTitle, inBook}) => {
  const Component = contentBundles[permalink]
  return (
    <>
      <h3
        css={css`
          margin-top: 0;
          font-size: 1.25rem;
          margin-bottom: 1rem;
          line-height: 1.5;
        `}
      >
        <span
          css={css`
            color: ${colors.grey500};
          `}
        >
          P{Array.isArray(jpPage) ? jpPage.join('〜') : jpPage}
        </span>
        . {jpTitle}
      </h3>
      <p>{inBook ? 'ある' : ''}</p>
      <Component />
    </>
  )
}

export default Content
