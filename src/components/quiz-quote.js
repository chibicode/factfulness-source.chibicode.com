/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import problems from '../lib/problems'
import BookQuote from './book-quote'

const QuizQuote = ({quizNumber}) => {
  const {text, choices, pageNumber} = problems[quizNumber - 1]

  return (
    <BookQuote pageNumber={pageNumber}>
      {x => (
        <>
          <p>
            <strong>質問{quizNumber}</strong> {text}
            {x}
          </p>
          <ul
            css={css`
              padding-left: 0;
              list-style-type: none;
            `}
          >
            <li>
              <span
                css={css`
                  margin-right: 1em;
                `}
              >
                A
              </span>
              {choices.a}
            </li>
            <li>
              <span
                css={css`
                  margin-right: 1em;
                `}
              >
                B
              </span>
              {choices.b}
            </li>
            <li>
              <span
                css={css`
                  margin-right: 1em;
                `}
              >
                C
              </span>
              {choices.c}
            </li>
          </ul>
        </>
      )}
    </BookQuote>
  )
}

export default QuizQuote
