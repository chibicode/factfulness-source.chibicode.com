/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Paragraph from './paragraph'

const QuizMap = () => (
  <Paragraph>
    <img
      src="/static/images/quiz/map-a.png"
      css={css`
        height: 180px;
      `}
    />
  </Paragraph>
)

export default QuizMap
