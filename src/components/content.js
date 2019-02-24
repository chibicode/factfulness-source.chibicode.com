/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {useState} from 'react'
import contentBundles from '../lib/content-bundles'
import colors from '../lib/colors'
import Link from './link'
import InternalLink from './internal-link'
import CardTitle from './card-title'
import LinkButton from './link-button'
import BlockAddition from './block-addition'

const Content = ({
  jpPage,
  permalink,
  chapter,
  jpTitle,
  isModal,
  constructionId
}) => {
  const Component = contentBundles[permalink]
  const [feedbackVisible, setFeedbackVisible] = useState(false)
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
            display: flex;
            justify-content: space-between;
          `}
        >
          {chapter}
          <span>
            <InternalLink href={`?p=${permalink}`}>固定リンク</InternalLink>
          </span>
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
          <LinkButton
            type="button"
            onClick={() => setFeedbackVisible(!feedbackVisible)}
          >
            フィードバック
          </LinkButton>{' '}
          &middot;{' '}
          <Link
            transparentBackground
            href={`https://github.com/chibicode/factfulness-source.chibicode.com/commits/master/src/contents/${permalink}.js`}
          >
            変更履歴
          </Link>
        </span>
        <span>
          {constructionId && (
            <Link
              transparentBackground
              href={`https://gapm.io/${constructionId}`}
            >
              詳細(準備中)
            </Link>
          )}
        </span>
      </p>
      {feedbackVisible && (
        <BlockAddition
          css={css`
            background: ${colors.green50};
            font-size: 0.85em;
            margin-bottom: -1rem;
          `}
        >
          <p>
            この脚注、または本書で該当する部分のファクトに間違いがございましたら、
            共訳者の上杉(
            <Link href="mailto:shu@chibicode.com">shu@chibicode.com</Link>)
            までご連絡ください。それぞれ吟味したのち、必要に応じて原著の著者に転送させていただきます。原著の著者に直接英語でフィードバックを送るには、こちらから:{' '}
            <Link href="mailto:factfulness-book@gapminder.org">
              factfulness-book@gapminder.org
            </Link>
          </p>
          <p>
            また、本書の正誤表(日本語版)は
            <InternalLink href="/errata">こちらからご覧になれます</InternalLink>
            。
          </p>
        </BlockAddition>
      )}
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
