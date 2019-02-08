import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.FB pageNumber={369}>
      本書では、人々の所得レベルや国の平均所得を比べるときは、グラフの軸に倍増する目盛を利用している。
    </H.FB>
    1ドルの価値は、所得レベルによって大きく異なるからだ。地震の強さを表すマグニチュード、音量を表すデシベル、酸性やアルカリ性を表すpHなど、
    <H.FB pageNumber={369}>
      小さい数字同士の小さな差と、大きい数字同士の大きな差が同じくらい重要なとき、倍増する目盛(対数目盛)は役に立つ。
    </H.FB>
    It's not a mistake, it's not cheating. It's representing the world as it
    really is: in this case, a world where it is not size of the pay rise that
    matters, but the size of the pay rise in relation to what you had before.
    Logarithmic scales are based on the theory of diminishing marginal value,
    first proposed by Daniel Bernoulli in 1738, as Kahneman (2011) describes in
    his book Thinking, Fast and Slow (p. 274). Doubling scales are explained
    with more examples in Factfulness on page 98.
  </p>
)
