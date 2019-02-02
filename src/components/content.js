/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Link from 'next/link'
import contentBundles from '../lib/content-bundles'
import colors from '../lib/colors'

const Content = ({jpPage, permalink, jpTitle, isModal}) => {
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
              color: ${colors.grey500};
              flex: 1;
            `}
          >
            『ファクトフルネス』脚注
          </h1>
          <Link passHref href="/" scroll={false}>
            <a
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
              &times;
            </a>
          </Link>
        </div>
      )}
      <h3
        css={css`
          margin-top: 0;
          font-size: ${isModal ? '1.5rem' : '1.25rem'};
          margin-bottom: 1rem;
          line-height: 1.5;
        `}
      >
        <span
          css={css`
            color: ${colors.grey500};
          `}
        >
          P{Array.isArray(jpPage) ? jpPage.join('〜') : jpPage}.
        </span>{' '}
        {jpTitle}
      </h3>
      <Component />
      {isModal ? (
        <div
          css={css`
            padding: 2rem 0 1rem;
            text-align: center;
          `}
        >
          <Link passHref href="/" scroll={false}>
            <a
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
            </a>
          </Link>
        </div>
      ) : (
        <p
          css={css`
            color: ${colors.grey500};
            font-size: 0.85rem;
          `}
        >
          <Link passHref href={`?p=${permalink}`} scroll={false}>
            <a>固定リンク</a>
          </Link>
        </p>
      )}
    </>
  )
}

export default Content
