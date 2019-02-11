import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    These 14 graphs of differently shaped lines are all derived from plotting
    two indicators against each other and then drawing a line in the
    middle---just like the World Health Chart you see in the beginning of the
    book. We removed the background bubbles in the small images, because it got
    too cluttered.
    <H.FB pageNumber={365}>
      これらのグラフの多くは国ごとの所得データを基に作成している(
      <H.A href="http://gapm.io/elev">Gapminder[3]</H.A>
      )。趣味への支出を表した直線のグラフ、
      予防接種や冷蔵庫を表したS字カーブのグラフ、女性ひとりあたりの子供の数を表したすべり台のグラフは家庭ごとのデータを基に作成している。
    </H.FB>
    Our estimates of typical families on different income levels are not based
    on country averages, because that would severely underestimate the number of
    the poorest and mask the wide range of differences for countries on levels
    1--3.
    <H.FB pageNumber={365}>
      また、一つひとつ国のレベル
      が上がるにつれて、グラフとまったく同じ方向に数字が変化することはほとんどない。
      しかし、すべての国の数十年間の変化を平均すると、グラフの形はだいたい当てはまる。どのグラフでも、同じ所
      得レベルに属する国のあいだにはとても大きな差がある。
    </H.FB>
  </p>
)
