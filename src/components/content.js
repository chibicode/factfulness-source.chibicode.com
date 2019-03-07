/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {useState, useContext} from 'react'
import contentBundles from '../lib/content-bundles'
import Link from './link'
import InternalLink from './internal-link'
import ContentTitle from './content-title'
import LinkButton from './link-button'
import BlockAddition from './block-addition'
import FeedbackText from './feedback-text'
import {PageContext} from './page'
import ErrataFixed from './errata-fixed'

const Content = ({
  jpPage,
  permalink,
  chapter,
  jpTitle,
  fixedEdition,
  fixedInKindle,
  isModal,
  hideFooter,
  constructionId,
  askingGapminder
}) => {
  const {type} = useContext(PageContext)
  const Component = contentBundles[permalink]
  const [feedbackVisible, setFeedbackVisible] = useState(false)
  return (
    <>
      <ContentTitle {...{type, isModal, jpTitle, jpPage}} />
      {jpPage && chapter && (
        <p
          css={({colors}) => css`
            color: ${colors.base400};
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
      <div className="content">
        <Component />
      </div>
      {type === 'errata' && (
        <ErrataFixed {...{askingGapminder, fixedEdition, fixedInKindle}} />
      )}
      {!hideFooter && (
        <>
          <p
            css={({colors}) => css`
              color: ${colors.base400};
              font-size: 0.85rem;
              display: flex;
              justify-content: space-between;
            `}
          >
            <span>
              {type === 'index' && (
                <>
                  <LinkButton
                    type="button"
                    onClick={() => setFeedbackVisible(!feedbackVisible)}
                  >
                    フィードバック
                  </LinkButton>{' '}
                  &middot;{' '}
                </>
              )}
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
              css={({colors}) => css`
                background: ${colors.green50};
                font-size: 0.85em;
                margin-bottom: -1rem;
              `}
            >
              <p>
                <FeedbackText />
              </p>
              <p>
                また、本書の正誤表は
                <InternalLink href="/errata">
                  こちらからご覧になれます
                </InternalLink>
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
                prefetch
                href={type === 'errata' ? '/errata' : '/'}
                css={({colors}) => css`
                  display: inline-block;
                  background: ${colors.base50};
                  text-decoration: none;
                  border: 2px solid ${colors.base400};
                  color: ${colors.base500};
                  font-weight: bold;
                  font-size: 0.85rem;
                  padding: 0.5rem 1rem;
                  border-radius: 0.25rem;

                  &:hover {
                    background: ${colors.accent50};
                  }
                `}
              >
                全ての脚注を見る
              </InternalLink>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Content
