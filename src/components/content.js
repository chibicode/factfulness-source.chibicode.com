/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import contentBundles from '../lib/content-bundles'

const Content = ({jpPage, permalink, jpTitle}) => {
  const Component = contentBundles[permalink]
  return (
    <>
      <h3
        css={css`
          margin-top: 0;
          font-size: 1rem;
          margin-bottom: 1rem;
        `}
      >
        <span
          css={css`
            color: #777;
          `}
        >
          P{Array.isArray(jpPage) ? jpPage.join('〜') : jpPage}
        </span>
        . {jpTitle}
      </h3>
      <Component />
    </>
  )
}

export default Content
