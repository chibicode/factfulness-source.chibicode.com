/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {useContext} from 'react'
import {titleArray} from '../lib/meta'
import Book from './book'
import {PageContext} from './page'

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
    </>
  )
}

export default IntroHero
