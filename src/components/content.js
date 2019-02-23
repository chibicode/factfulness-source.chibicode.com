/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import contentBundles from '../lib/content-bundles'
import colors from '../lib/colors'
import Link from './link'
import InternalLink from './internal-link'
import CardTitle from './card-title'

const Content = ({
  jpPage,
  permalink,
  chapter,
  jpTitle,
  isModal,
  constructionId
}) => {
  const Component = contentBundles[permalink]
  return (
    <>
      {isModal && (
        <div
          css={css`
            position: relative;
          `}
        >
          <h1
            css={css`
              margin-top: 0;
              font-size: 1rem;
              margin-right: 3rem;
              margin-bottom: 0rem;
              color: ${colors.blueGrey500};
              flex: 1;
            `}
          >
            『ファクトフルネス』ウェブ脚注
          </h1>
          <p
            css={css`
              color: ${colors.blueGrey400};
              font-size: 0.85rem;
            `}
          >
            原著の公式サイトで公開されている、本の脚注の増補版です。
          </p>
          <InternalLink
            href="/"
            css={css`
              position: absolute;
              right: -0.5rem;
              top: -0.5rem;
              width: 2rem;
              height: 2rem;
              color: ${colors.blueGrey400};
              font-size: 1.5rem;
              line-height: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              border-radius: 0.25rem;

              &:hover {
                background: ${colors.blue50};
              }
            `}
          >
            {' '}
            &times;
          </InternalLink>
        </div>
      )}
      <CardTitle smallMarginBottom largeFont={isModal}>
        {jpTitle}
        {(Array.isArray(jpPage) || (jpPage > 0 && jpPage < 400)) && (
          <span
            css={css`
              color: ${colors.blueGrey400};
            `}
          >
            {' '}
            (P{Array.isArray(jpPage) ? jpPage.join('-') : jpPage})
          </span>
        )}
      </CardTitle>
      {jpPage && chapter && (
        <p
          css={css`
            color: ${colors.blueGrey400};
            font-weight: normal;
            margin-bottom: 1rem;
            font-size: 0.85rem;
          `}
        >
          {chapter}
        </p>
      )}
      <Component />
      <p
        css={css`
          color: ${colors.blueGrey400};
          font-size: 0.85rem;
          display: flex;
          justify-content: space-between;
        `}
      >
        <span>
          <InternalLink href={`?p=${permalink}`}>固定リンク</InternalLink>{' '}
          &middot;{' '}
          <Link
            transparentBackground
            href={`https://github.com/chibicode/factfulness-source.chibicode.com/commits/master/src/contents/${permalink}.js`}
          >
            変更履歴
          </Link>
        </span>
        {constructionId && (
          <span>
            <Link
              transparentBackground
              href={`https://gapm.io/${constructionId}`}
            >
              詳細(準備中)
            </Link>
          </span>
        )}
      </p>
      {isModal && (
        <div
          css={css`
            padding: 2rem 0 1rem;
            text-align: center;
          `}
        >
          <InternalLink
            href="/"
            css={css`
              display: inline-block;
              background: ${colors.blueGrey50};
              text-decoration: none;
              border: 2px solid ${colors.blueGrey400};
              color: ${colors.blueGrey500};
              font-weight: bold;
              font-size: 0.85rem;
              padding: 0.5rem 1rem;
              border-radius: 0.25rem;

              &:hover {
                background: ${colors.blue50};
              }
            `}
          >
            全ての脚注を見る
          </InternalLink>
        </div>
      )}
    </>
  )
}

export default Content
