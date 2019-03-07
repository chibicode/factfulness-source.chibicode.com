import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g20.png" />
    <p>
      歴史上はじめて音楽が録音されたのは
      <H.A href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A9%E3%83%8E%E3%83%88%E3%82%B0%E3%83%A9%E3%83%95">
        1857年のこと
      </H.A>
      。それ以来、音楽は量と質ともに向上してきた。このグラフはSpotifyに登録されている曲の数を表している。Spotifyの曲データにはレコーディングの日付が入っているが、これは
      <H.A href="http://isrc.ifpi.org/en/faq">ISRC</H.A> (International Standard
      Recording
      Code)という、国際的な楽曲データベースによるもの。すべての曲がSpotifyに登録されているわけではないが、それにしてもこのグラフの形はすごい。表現活動と、文化の消費活動が最近になってどれだけ増えたかがわかる。
    </p>
    <H.BlockAddition>
      <p>
        <H.BlockAdditionHeader />
        Spotifyのデータについての訳者の追記は
        <H.A href="https://twitter.com/chibicode/status/1086669170597457920">
          こちら
        </H.A>
        。<H.A href="https://barubora3.net/?p=632">こちらの記事</H.A>と
        <H.A href="https://barubora3.net/?p=600">こちらの記事</H.A>も参考になる
        。
      </p>
    </H.BlockAddition>
    <H.GraphExplanation />
  </>
)
