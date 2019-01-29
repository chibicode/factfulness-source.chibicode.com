/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import dynamic from 'next/dynamic'

const Content = ({permalink, jpTitle}) => {
  const Component = dynamic(
    () =>
      import(`../contents/${permalink}.mdx`).catch(() => {
        console.error(`Missing '${permalink}'`)
        return <p>…</p>
      }),
    {loading: () => <p>…</p>}
  )
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
