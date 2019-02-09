/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import contentBundles from '../lib/content-bundles'
import colors from '../lib/colors'
import ExternalLink from './external-link'
import InternalLink from './internal-link'

const Content = ({
  jpPage,
  CustomComponent,
  permalink,
  chapter,
  jpTitle,
  isModal,
  constructionId
}) => {
  const Component = CustomComponent || contentBundles[permalink]
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
              color: ${colors.green400};
              flex: 1;
            `}
          >
            『ファクトフルネス』脚注
          </h1>
          <InternalLink
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

      <h3
        css={css`
          margin-top: 0;
          font-size: ${isModal ? '1.5rem' : '1.25rem'};
          margin-bottom: ${jpPage && chapter ? '0.125rem' : '1rem'};
          line-height: 1.5;
        `}
      >
        {jpTitle}{' '}
      </h3>
      {jpPage && chapter && (
        <p
          css={css`
            color: ${colors.grey500};
            font-weight: normal;
            margin-bottom: 1rem;
            font-size: 0.85rem;
          `}
        >
          {typeof chapter === 'number' ? `第${chapter}章` : chapter} (P
          {Array.isArray(jpPage) ? jpPage.join('〜') : jpPage})
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
            css={css`
              display: inline-block;
              background: ${colors.grey100};
              text-decoration: none;
              border: 2px solid ${colors.grey300};
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
          <InternalLink>固定リンク</InternalLink>
          {constructionId && (
            <>
              <ExternalLink href={`https://gapm.io/${constructionId}`}>
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
