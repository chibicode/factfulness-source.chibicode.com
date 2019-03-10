/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {useState} from 'react'
import * as H from './h'
import LinkButton from './link-button'

const GraphExplanation = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <H.BlockAddition
      css={
        expanded
          ? css``
          : css`
              background: transparent;
              margin: 0;
              padding: 0;
              font-size: 0.85rem;
            `
      }
    >
      <p>
        <strong>32のグラフの横軸・縦軸についての訳者による補足:</strong>{' '}
        32のグラフの横軸の一番左には、それぞれの題材で信頼できるデータがある最も古い年号が使われている。だから、グラフごとに横軸は違う。このため、ふたつのグラフの形を比較することはできないし、本書でもそのような比較はしていない。
        {!expanded && (
          <LinkButton onClick={() => setExpanded(true)}>続きを読む</LinkButton>
        )}
      </p>
      {expanded && (
        <>
          <p>
            もし仮に、全てのグラフで横軸の一番左を1900年にしてしまうと、多くのグラフで1900年以前の信頼できるデータを隠すことになるので、これは恣意的だ。一方、全てのグラフで横軸の一番左を1665年にすると、全てのグラフで全てのデータを表示できるが、ほぼ全てのグラフに大きな空白部分ができてしまい、ただ見にくいだけになる。
          </p>
          <p>
            縦軸はどのグラフも一番下はゼロ、一番上は最大値になっている。割合のデータも同じく、一番上は100%ではなく最大値になっている。もちろん、グラフの一番左が最大値でない場合もある。
          </p>
        </>
      )}
    </H.BlockAddition>
  )
}

export default GraphExplanation
