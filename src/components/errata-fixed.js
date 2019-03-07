import React from 'react'
import * as H from './h'

const ErrataFixed = ({askingGapminder, fixedEdition, fixedInKindle}) => (
  <H.BlockAddition>
    <p>
      {askingGapminder ? (
        <>現在原著の著者にこれが間違いかどうか問い合わせ中です。</>
      ) : (
        <>
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
        </>
      )}
    </p>
  </H.BlockAddition>
)

export default ErrataFixed
