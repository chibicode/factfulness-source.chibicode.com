import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={
        <>
          毎日ニュースで流れていることから頭を切り離して、世界には可能性があふれていることに気づいてもらうのは難しい
        </>
      }
      after={
        <>
          毎日ニュースで流れていること
          <strong>
            とはまったく違った、世界にあふれている可能性について興味を持ってもらうのは難しい
          </strong>
        </>
      }
    />
  </p>
)
