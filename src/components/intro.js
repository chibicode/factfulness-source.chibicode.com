/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {titleArray, description} from '../lib/meta'
import Book from './book'

const Intro = () => (
  <>
    <h1
      css={css`
        margin: 0 0 0.5rem;
        text-align: center;
        font-size: 1.5rem;
        line-height: 1.35;
        letter-spacing: -1.5px;
      `}
    >
      {titleArray[0]}
      <br />
      {titleArray[1]}
      <br />
      {titleArray[2]}
    </h1>
    <p
      css={css`
        text-align: center;
        font-size: 0.825rem;
        color: #777;
      `}
    >
      {description}
    </p>
    <p>
      <Book />
    </p>
  </>
)

export default Intro
