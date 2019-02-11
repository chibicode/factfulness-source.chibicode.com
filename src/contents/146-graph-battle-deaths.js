import React from 'react'
import * as H from '../components/h'

export default () => (
  <p>
    戦争の犠牲者数は
    <H.A href="http://www.correlatesofwar.org/data-sets/COW-war.">
      Correlates of War Project
    </H.A>
    、<H.A href="http://gapm.io/xnpgfred">Gleditsch</H.A>、
    <H.A href="http://ucdp.uu.se/downloads">UCDP[1]</H.A>、
    <H.A href="http://gapm.io/xpriod">PRIO</H.A>を参考にした。
    <H.FB pageNumber={365}>
      これらの戦争の犠牲者数は、戦いで亡くなった兵士と一般人の死を含むが、餓死者など戦いの外で亡くなった人は含まれない。
    </H.FB>{' '}
    また、過去の戦争の犠牲者のデータを可視化した『
    <H.A href="http://ja.fallen.io/ww2/">Fallen</H.A>
    』というインタラクティブ・ドキュメンタリーもおすすめしたい。ほかにも、1990年以降の犠牲者を比較できるツールは
    <H.A href="http://ucdp.uu.se/">こちら</H.A>。Measuring battle deaths is not
    trivial, as a war zone is no place for careful data collection. These
    studies publish numbers estimated by combining official sources and media
    reports from conflicts. But this method of estimating conflict fatalities
    has been disputed by several other researchers. Obermeyer and Murray showed
    in 2008 (<a href="http://gapm.io/xobewar08">www.gapm.io/xobewar08</a>) that
    the number of battle deaths in recent wars seems much higher if estimated
    with a different method, based on sample surveys of the local population in
    war-torn areas, who report how many family members they lost in conflict,
    with the so called sibling method. These authors claim explicitly that
    &quot;there's no evidence to support a recent decline in war deaths&quot;
    since the Vietnam War. But the representativeness of the sample is not a
    trivial problem in these extreme events, and the number easily gets
    exaggerated when a local death toll is multiplied to a broader population.
    As there is little chance that new primary data will show up about past
    conflicts, the chances of new reliable estimates from other sources are
    small. The methodological discussion seems to have ended with a response in
    2012 by Lacina &amp; Gleditsch (see
    <a href="http://www.gapm.io/xgledwar12">www.gapm.io/xgledwar12</a>), making
    the case that their data-sources are indeed bias in an unknown way and that
    the bias may not be the same over the decades. Maybe the tendency is to
    under-report in some wars in some decade and then over-report in others. But
    still, even if they take into account the experts highest levels of doubts
    and use the widest reasonable uncertainty estimates and they try their
    hardest to generate an increasing impression of fatalities, by drawing a
    trendline from the lowest estimates of past conflicts to the highest
    estimates of the recent conflicts, even such line would be steadily falling.
  </p>
)
