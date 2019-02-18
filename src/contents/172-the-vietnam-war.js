import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      1965年から1975年の間にベトナム戦争で亡くなった人の数はこちらを参考にした:
    </p>
    <ul>
      <li>
        <H.A href="https://fas.org/sgp/crs/natsec/RL32492.pdf">
          American War and Military Operations Casualties: Lists and Statistics
        </H.A>
      </li>
      <li>
        Necrometrics:{' '}
        <H.A href="http://necrometrics.com/20c1m.htm#Vietnam">
          American Phase (unstarred)
        </H.A>{' '}
        - 約130万人から170万人が亡くなったとの推定
      </li>
      <li>
        Charles Lewis Taylor著 “The World Handbook of Political and Social
        Indicators” - 約152万453人のベトナム人が亡くなったとの推定
      </li>
    </ul>
  </>
)
