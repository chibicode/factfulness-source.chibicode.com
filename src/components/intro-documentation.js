import React from 'react'
import * as H from './h'

const IntroDocumentation = () => (
  <>
    <H.CardHeading>その他のデータ</H.CardHeading>
    <p>
      ギャップマインダーのサイトには、本書で使われているデータについてさらに詳しい説明が書かれています。どちらかというと一般向けではなく、研究者向けの内容です。これらは訳せていませんが、以下にリンクを貼っておきます。
    </p>
    <p>
      たくさんありますが、訳者(上杉)がどれかひとつおすすめするとしたら、
      <H.A href="https://www.gapminder.org/data/documentation/income-mountains-dataset/">
        所得レベルのデータ
      </H.A>
      についてのページです。所得レベルごとの人口がどのように計算されているかが書かれています。
    </p>
    <ul>
      <li>
        <H.A href="https://www.gapminder.org/tools/">
          ギャップマインダーツール
        </H.A>
        で使われている
        <H.A href="https://www.gapminder.org/data/">データについて</H.A>
      </li>
      <li>
        <H.A href="https://www.gapminder.org/data/documentation/gd008/">
          出生率のデータについて
        </H.A>
      </li>
      <li>
        <H.A href="https://www.gapminder.org/data/documentation/gd005/">
          乳幼児死亡率のデータについて
        </H.A>{' '}
        (
        <H.A href="https://www.gapminder.org/data/documentation/gd002/">
          乳児死亡率についてのデータ
        </H.A>
        もあるが、やや古い)
      </li>
      <li>
        <H.A href="https://www.gapminder.org/data/documentation/gd001/">
          ひとりあたりGDP(購買力平価、国際ドル)のデータについて
        </H.A>
      </li>
      <li>
        <H.A href="https://www.gapminder.org/data/documentation/gd004/">
          平均寿命のデータについて
        </H.A>
      </li>
      <li>
        <H.A href="https://www.gapminder.org/data/documentation/gd003/">
          世界人口のデータについて
        </H.A>
      </li>
      <li>
        <H.A href="https://www.gapminder.org/data/documentation/gd009/">
          女性の平均初婚年齢のデータについて
        </H.A>
      </li>
      <li>
        <H.A href="https://www.gapminder.org/data/documentation/gini/">
          ジニ係数のデータについて
        </H.A>
      </li>
      <li>
        <H.A href="https://www.gapminder.org/data/documentation/gd006/">
          HIV/AIDSのデータについて
        </H.A>
      </li>
      <li>
        <H.A href="https://www.gapminder.org/data/documentation/legal-slavery/">
          強制労働のデータについて
        </H.A>
      </li>
      <li>
        <H.A href="https://www.gapminder.org/data/documentation/gd010/">
          妊産婦死亡率のデータについて
        </H.A>
      </li>
      <li>
        <H.A href="https://www.gapminder.org/data/documentation/income-mountains-dataset/">
          所得レベルのデータについて
        </H.A>
      </li>
      <li>
        <H.A href="https://www.gapminder.org/data/documentation/gd000/">
          世界保健チャートで使われているデータについて
        </H.A>
      </li>
    </ul>
  </>
)

export default IntroDocumentation
