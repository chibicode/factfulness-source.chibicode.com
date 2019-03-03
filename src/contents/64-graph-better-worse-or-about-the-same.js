import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      この調査はもともと
      <H.A href="https://d25d2506sfb94s.cloudfront.net/cumulus_uploads/document/z2knhgzguv/GB_Website.pdf">
        YouGov
      </H.A>
      が17カ国1万8000人を対象に行ったものだった。その結果にとても驚いたわたしたちは、他の調査会社でも同じ結果になるか試してみた。2017年に調査会社のIspos-MORIが同じ質問をしてみたところ、かなり近い結果になった。本書のグラフはYouGovとIspos-MORIの結果を合わせたもの。
    </p>
    <p>
      比較的多くの人が「世界は良くなっている」と答えたのは
      <H.A href="https://today.yougov.com/topics/international/articles-reports/2016/01/05/chinese-optimism">
        中国(41%)とインドネシア(23%)だった。
      </H.A>
      ただ、この2国ではインターネットを使える人口が国の全人口に比べて少ないので本書からは除外した。インターネットが使える人たちは、そうでない人たちに比べて世界の見方が違うからだ。ここでは中国とインドネシアは除外したが、「アジア人のほうが世界に対して前向きかもしれない」という仮説は検討に値する。
    </p>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="https://d25d2506sfb94s.cloudfront.net/cumulus_uploads/document/z2knhgzguv/GB_Website.pdf">
            YouGov[1] November--December 2015. Poll results.
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
