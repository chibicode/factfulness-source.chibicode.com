import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/sources/brazil-graph.png" />
    <p>
      ブラジル全体の所得のうち、上位10%が占める割合のデータは
      <H.A href="http://www.gapm.io/xwb1716">世界銀行 (World Bank[16])</H.A>
      から来ている。ブラジルの所得の分布のグラフは
      <H.A href="http://iresearch.worldbank.org/PovcalNet">PovcalNet</H.A>
      のデータが基となっており、{' '}
      <H.A href="http://www.gapm.io/xbra17">CETAD</H.A>を参考に微調整している。
    </p>
    <H.BlockAddition>
      <p>
        <H.BlockAdditionHeader />
        本書の折れ線グラフは、基本的に縦軸の範囲が「ゼロから最大値」または「ゼロから100%」となっている。一方、このグラフは数少ない「縦軸の範囲が最小値から最大値」のグラフのひとつだ。
      </p>
      <p>
        下限をゼロにすべきかは、棒グラフと折れ線グラフで話が変わってくる。棒グラフは、複数の項目の大きさを、グラフの長さという視覚的なもので比べやすくするためのグラフだから、下限はゼロでなければ恣意的だ。一方、折れ線グラフは変化を見やすくするためのグラフだから、下限がゼロである必要はないが、グラフの説明によっては恣意的にもなりうる。
      </p>
      <p>
        このグラフの説明を見てみると、「たしかに41%は不公平なほど高い。とはいえ、41%という数字はここ数十年で最も低い数字なのだ。グラフを見れば一目瞭然だ」と書かれている。ここ数十年の変化を見やすくするため、下限を最小値にしたと考えればうなずける。もし説明が仮に「ブラジルの格差はとんでもなく減っている」だったとしたらグラフは恣意的だと言えるかもしれない。
      </p>
      <p>
        (ちなみに、p52の折れ線グラフも下限が最小値だが、これは縦軸が違うp53のグラフと比べるため。またp108のグラフなど出生率を表しているものは、出生率が0になることはないから、棒グラフならまだしも折れ線グラフで0を下限にするのは意味がない。)
      </p>
      <p />
    </H.BlockAddition>

    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.gapm.io/xbra17">
            CETAD (Centro de Estudos Tributários e Aduaneiros). "Distribuição da
            Renda por Centis Ano MARÇO 2017." Ministério da Fazenda, Brazil,
            2017.
          </H.A>
        </li>
        <li>
          <H.A href="http://iresearch.worldbank.org/PovcalNet">
            PovcalNet "An Online Analysis Tool for Global Poverty Monitoring."
            Founded by Martin Ravallion, at the World Bank. 2017/11/30閲覧。
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
