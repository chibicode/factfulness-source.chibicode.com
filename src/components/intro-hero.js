/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {useContext} from 'react'
import {titleArray} from '../lib/meta'
import Book from './book'
import {PageContext} from './page'
import * as H from './h'
import AmazonLink from './amazon-link'
import Link from './link'

const IntroHero = () => {
  const {type} = useContext(PageContext)
  return (
    <>
      <h1
        css={css`
          margin: 0 0 0.5rem;
          text-align: center;
          font-size: 2rem;
          line-height: 1.35;
          letter-spacing: -1.5px;
        `}
      >
        {titleArray[type][0]}
        <br />
        {titleArray[type][1]}
      </h1>
      <p
        css={({colors}) => css`
          text-align: center;
          font-size: 0.825rem;
          color: ${colors.base400};
        `}
      >
        『ファクトフルネス』共訳者(上杉)作成
      </p>
      <p
        css={css`
          text-align: center;
        `}
      >
        <Book />
      </p>
      <p>
        これは、2019年1月に日経BPから発売された訳書『
        <Link LinkComponent={AmazonLink}>ファクトフルネス</Link>
        』の著者が公開している
        <H.A href="https://www.gapminder.org/factfulness-book/notes/">
          ウェブ脚注
        </H.A>
        の日本語訳だ。本のp353〜p373にも21ページの脚注があるが、それの拡張版だ。文字数にすると、本の脚注は約2万5000文字なのに対し、このウェブ脚注は7万文字以上ある。
      </p>
      <p>本の脚注からの引用</p>
      <p>GitHub</p>
    </>
  )
}

export default IntroHero
