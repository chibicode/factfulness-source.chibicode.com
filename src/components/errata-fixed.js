import React from 'react'
import * as H from './h'

const ErrataFixed = ({fixedEdition, fixedInKindle}) => (
  <H.BlockAddition>
    <p>
      <strong>第{fixedEdition}刷</strong>にて修正。電子版
      {fixedInKindle ? (
        <>
          も<strong>修正済み</strong>
        </>
      ) : (
        <>
          は<strong>未修正</strong>
        </>
      )}
      。
    </p>
  </H.BlockAddition>
)

export default ErrataFixed
