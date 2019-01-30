/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import contentBundles from '../lib/content-bundles'

const Content = ({permalink, jpTitle}) => {
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
        {jpTitle}
      </h3>
      <Component />
    </>
  )
}

export default Content
