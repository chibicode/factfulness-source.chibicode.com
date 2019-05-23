import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    <H.ErrataHighlightCombined
      before={<>(見出し)はじめに</>}
      after={
        <>
          <strong>イントロダクション</strong>
        </>
      }
    />
  </p>
)
