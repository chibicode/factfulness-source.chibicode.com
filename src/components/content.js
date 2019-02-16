/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import contentBundles from '../lib/content-bundles'
import colors from '../lib/colors'
import ExternalLink from './external-link'
import InternalLink from './internal-link'
import OtherCardLink from './other-card-link'
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
              margin-bottom: 1rem;
              color: ${colors.blue400};
              flex: 1;
            `}
          >
            『ファクトフルネス』脚注
          </h1>
          <InternalLink
            href="/"
            css={css`
              position: absolute;
              right: -0.5rem;
              top: -0.5rem;
              width: 2rem;
              height: 2rem;
              color: ${colors.grey500};
              font-size: 1.5rem;
              line-height: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              border-radius: 0.25rem;

              &:hover {
                background: ${colors.grey200};
              }
            `}
          >
            {' '}
            &times;
          </InternalLink>
        </div>
      )}
      <CardTitle largeFont={isModal} smallMarginBottom>
        {jpTitle}
      </CardTitle>
      {jpPage && chapter && (
        <p
          css={css`
            color: ${colors.grey500};
            font-weight: normal;
            margin-bottom: 1rem;
            font-size: 0.85rem;
          `}
        >
          {typeof chapter === 'number' ? `第${chapter}章` : chapter}
          {jpPage > 0 &&
            jpPage < 400 &&
            ` (P${Array.isArray(jpPage) ? jpPage.join('〜') : jpPage})`}
        </p>
      )}
      <Component />
      {isModal ? (
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
              background: ${colors.grey100};
              text-decoration: none;
              border: 2px solid ${colors.grey500};
              color: ${colors.grey700};
              font-weight: bold;
              font-size: 0.85rem;
              padding: 0.5rem 1rem;
              border-radius: 0.25rem;

              &:hover {
                background: ${colors.grey200};
              }
            `}
          >
            全ての脚注を見る
          </InternalLink>
        </div>
      ) : (
        <p
          css={css`
            color: ${colors.grey500};
            font-size: 0.85rem;
            display: flex;
            justify-content: space-between;
          `}
        >
          <OtherCardLink permalink={permalink}>固定リンク</OtherCardLink>
          {constructionId && (
            <>
              <ExternalLink
                transparentBackground
                href={`https://gapm.io/${constructionId}`}
              >
                詳細ページ(準備中)
              </ExternalLink>
            </>
          )}
        </p>
      )}
    </>
  )
}

export default Content
