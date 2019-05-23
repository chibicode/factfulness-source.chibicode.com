import React from 'react'
import dynamic from 'next/dynamic'

const DynamicLoading = () => '…'

export default {
  'errata-11': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-11' */ '../errata/errata-11.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-12': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-12' */ '../errata/errata-12.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-14': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-14' */ '../errata/errata-14.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-17': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-17' */ '../errata/errata-17.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-2': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-2' */ '../errata/errata-2.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-20': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-20' */ '../errata/errata-20.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-21': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-21' */ '../errata/errata-21.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-22': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-22' */ '../errata/errata-22.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-23': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-23' */ '../errata/errata-23.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-24': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-24' */ '../errata/errata-24.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-27': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-27' */ '../errata/errata-27.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-28': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-28' */ '../errata/errata-28.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-29': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-29' */ '../errata/errata-29.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-30': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-30' */ '../errata/errata-30.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-31': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-31' */ '../errata/errata-31.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-33': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-33' */ '../errata/errata-33.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-34': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-34' */ '../errata/errata-34.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-35': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-35' */ '../errata/errata-35.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-36': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-36' */ '../errata/errata-36.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-37': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-37' */ '../errata/errata-37.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-38': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-38' */ '../errata/errata-38.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-40': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-40' */ '../errata/errata-40.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-42': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-42' */ '../errata/errata-42.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-43': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-43' */ '../errata/errata-43.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-44': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-44' */ '../errata/errata-44.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-45': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-45' */ '../errata/errata-45.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-5': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-5' */ '../errata/errata-5.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-54': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-54' */ '../errata/errata-54.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-55': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-55' */ '../errata/errata-55.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-56': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-56' */ '../errata/errata-56.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-57': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-57' */ '../errata/errata-57.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-6': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-6' */ '../errata/errata-6.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-7': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-7' */ '../errata/errata-7.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-9': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-9' */ '../errata/errata-9.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-temp-1': dynamic(
    () =>
      import(/* webpackChunkName: 'errata/errata-temp-1' */ '../errata/errata-temp-1.js'),
    {loading: () => <DynamicLoading />}
  ),
  '10-fact-question-4-life-expectancy': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/10-fact-question-4-life-expectancy' */ '../sources/10-fact-question-4-life-expectancy.js'),
    {loading: () => <DynamicLoading />}
  ),
  '10-fact-question-5-future-number-of-children': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/10-fact-question-5-future-number-of-children' */ '../sources/10-fact-question-5-future-number-of-children.js'),
    {loading: () => <DynamicLoading />}
  ),
  '10-fact-question-6-why-is-the-population-increasing': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/10-fact-question-6-why-is-the-population-increasing' */ '../sources/10-fact-question-6-why-is-the-population-increasing.js'),
    {loading: () => <DynamicLoading />}
  ),
  '100-the-world-population-is-not-just-increasing': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/100-the-world-population-is-not-just-increasing' */ '../sources/100-the-world-population-is-not-just-increasing.js'),
    {loading: () => <DynamicLoading />}
  ),
  '102-experts-at-the-world-economic-forum': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/102-experts-at-the-world-economic-forum' */ '../sources/102-experts-at-the-world-economic-forum.js'),
    {loading: () => <DynamicLoading />}
  ),
  '102-graph-future-number-of-children': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/102-graph-future-number-of-children' */ '../sources/102-graph-future-number-of-children.js'),
    {loading: () => <DynamicLoading />}
  ),
  '102-teacher-s-conference-in-norway': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/102-teacher-s-conference-in-norway' */ '../sources/102-teacher-s-conference-in-norway.js'),
    {loading: () => <DynamicLoading />}
  ),
  '103-graph-world-population-from-8000-bc-to-today': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/103-graph-world-population-from-8000-bc-to-today' */ '../sources/103-graph-world-population-from-8000-bc-to-today.js'),
    {loading: () => <DynamicLoading />}
  ),
  '103-historic-world-population-and-three-big-cities': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/103-historic-world-population-and-three-big-cities' */ '../sources/103-historic-world-population-and-three-big-cities.js'),
    {loading: () => <DynamicLoading />}
  ),
  '103-the-accuracy-of-un-population-forecasts': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/103-the-accuracy-of-un-population-forecasts' */ '../sources/103-the-accuracy-of-un-population-forecasts.js'),
    {loading: () => <DynamicLoading />}
  ),
  '108-graph-babies-per-woman-from-1800-to-today': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/108-graph-babies-per-woman-from-1800-to-today' */ '../sources/108-graph-babies-per-woman-from-1800-to-today.js'),
    {loading: () => <DynamicLoading />}
  ),
  '109-fertility-transitions': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/109-fertility-transitions' */ '../sources/109-fertility-transitions.js'),
    {loading: () => <DynamicLoading />}
  ),
  '11-fact-question-7-natural-disasters': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/11-fact-question-7-natural-disasters' */ '../sources/11-fact-question-7-natural-disasters.js'),
    {loading: () => <DynamicLoading />}
  ),
  '11-fact-question-8-where-people-live': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/11-fact-question-8-where-people-live' */ '../sources/11-fact-question-8-where-people-live.js'),
    {loading: () => <DynamicLoading />}
  ),
  '11-fact-question-9-vaccination': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/11-fact-question-9-vaccination' */ '../sources/11-fact-question-9-vaccination.js'),
    {loading: () => <DynamicLoading />}
  ),
  '110-the-inevitable-fill-up': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/110-the-inevitable-fill-up' */ '../sources/110-the-inevitable-fill-up.js'),
    {loading: () => <DynamicLoading />}
  ),
  '112-the-new-balance': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/112-the-new-balance' */ '../sources/112-the-new-balance.js'),
    {loading: () => <DynamicLoading />}
  ),
  '112-the-old-balance': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/112-the-old-balance' */ '../sources/112-the-old-balance.js'),
    {loading: () => <DynamicLoading />}
  ),
  '115-graph-average-family-size-by-income': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/115-graph-average-family-size-by-income' */ '../sources/115-graph-average-family-size-by-income.js'),
    {loading: () => <DynamicLoading />}
  ),
  '116-child-survival': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/116-child-survival' */ '../sources/116-child-survival.js'),
    {loading: () => <DynamicLoading />}
  ),
  '117-two-public-health-miracles': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/117-two-public-health-miracles' */ '../sources/117-two-public-health-miracles.js'),
    {loading: () => <DynamicLoading />}
  ),
  '119-graphs-14-straight-lines-s-bends-slides-and-humps': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/119-graphs-14-straight-lines-s-bends-slides-and-humps' */ '../sources/119-graphs-14-straight-lines-s-bends-slides-and-humps.js'),
    {loading: () => <DynamicLoading />}
  ),
  '12-fact-question-10-women-s-education': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/12-fact-question-10-women-s-education' */ '../sources/12-fact-question-10-women-s-education.js'),
    {loading: () => <DynamicLoading />}
  ),
  '12-fact-question-11-endangered-species': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/12-fact-question-11-endangered-species' */ '../sources/12-fact-question-11-endangered-species.js'),
    {loading: () => <DynamicLoading />}
  ),
  '12-fact-question-12-electricity': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/12-fact-question-12-electricity' */ '../sources/12-fact-question-12-electricity.js'),
    {loading: () => <DynamicLoading />}
  ),
  '123-e-coli-bacteria': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/123-e-coli-bacteria' */ '../sources/123-e-coli-bacteria.js'),
    {loading: () => <DynamicLoading />}
  ),
  '124-co2-emissions-from-transportation': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/124-co2-emissions-from-transportation' */ '../sources/124-co2-emissions-from-transportation.js'),
    {loading: () => <DynamicLoading />}
  ),
  '126-what-part-of-the-line-are-you-seeing': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/126-what-part-of-the-line-are-you-seeing' */ '../sources/126-what-part-of-the-line-are-you-seeing.js'),
    {loading: () => <DynamicLoading />}
  ),
  '13-fact-question-13-climate-change': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/13-fact-question-13-climate-change' */ '../sources/13-fact-question-13-climate-change.js'),
    {loading: () => <DynamicLoading />}
  ),
  '134-fear-in-polls': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/134-fear-in-polls' */ '../sources/134-fear-in-polls.js'),
    {loading: () => <DynamicLoading />}
  ),
  '138-disaster-data': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/138-disaster-data' */ '../sources/138-disaster-data.js'),
    {loading: () => <DynamicLoading />}
  ),
  '14-fact-questions-online': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/14-fact-questions-online' */ '../sources/14-fact-questions-online.js'),
    {loading: () => <DynamicLoading />}
  ),
  '14-poll-results': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/14-poll-results' */ '../sources/14-poll-results.js'),
    {loading: () => <DynamicLoading />}
  ),
  '141-reliefweb': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/141-reliefweb' */ '../sources/141-reliefweb.js'),
    {loading: () => <DynamicLoading />}
  ),
  '143-child-deaths-from-diarrhea': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/143-child-deaths-from-diarrhea' */ '../sources/143-child-deaths-from-diarrhea.js'),
    {loading: () => <DynamicLoading />}
  ),
  '144-plane-accidents': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/144-plane-accidents' */ '../sources/144-plane-accidents.js'),
    {loading: () => <DynamicLoading />}
  ),
  '146-deaths-in-wars': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/146-deaths-in-wars' */ '../sources/146-deaths-in-wars.js'),
    {loading: () => <DynamicLoading />}
  ),
  '146-graph-battle-deaths': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/146-graph-battle-deaths' */ '../sources/146-graph-battle-deaths.js'),
    {loading: () => <DynamicLoading />}
  ),
  '148-chernobyl': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/148-chernobyl' */ '../sources/148-chernobyl.js'),
    {loading: () => <DynamicLoading />}
  ),
  '148-fukushima': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/148-fukushima' */ '../sources/148-fukushima.js'),
    {loading: () => <DynamicLoading />}
  ),
  '149-ddt': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/149-ddt' */ '../sources/149-ddt.js'),
    {loading: () => <DynamicLoading />}
  ),
  '15-public-awareness-of-climate-change': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/15-public-awareness-of-climate-change' */ '../sources/15-public-awareness-of-climate-change.js'),
    {loading: () => <DynamicLoading />}
  ),
  '15-vaccination': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/15-vaccination' */ '../sources/15-vaccination.js'),
    {loading: () => <DynamicLoading />}
  ),
  '150-chemophobia': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/150-chemophobia' */ '../sources/150-chemophobia.js'),
    {loading: () => <DynamicLoading />}
  ),
  '150-refusing-vaccination': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/150-refusing-vaccination' */ '../sources/150-refusing-vaccination.js'),
    {loading: () => <DynamicLoading />}
  ),
  '150-the-environmental-movement': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/150-the-environmental-movement' */ '../sources/150-the-environmental-movement.js'),
    {loading: () => <DynamicLoading />}
  ),
  '153-terrorism': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/153-terrorism' */ '../sources/153-terrorism.js'),
    {loading: () => <DynamicLoading />}
  ),
  '157-alcohol-deaths': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/157-alcohol-deaths' */ '../sources/157-alcohol-deaths.js'),
    {loading: () => <DynamicLoading />}
  ),
  '158-how-many-deaths-make-a-natural-disaster-newsworthy': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/158-how-many-deaths-make-a-natural-disaster-newsworthy' */ '../sources/158-how-many-deaths-make-a-natural-disaster-newsworthy.js'),
    {loading: () => <DynamicLoading />}
  ),
  '158-risks-of-dying': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/158-risks-of-dying' */ '../sources/158-risks-of-dying.js'),
    {loading: () => <DynamicLoading />}
  ),
  '162-nacala-child-mortality-calculation': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/162-nacala-child-mortality-calculation' */ '../sources/162-nacala-child-mortality-calculation.js'),
    {loading: () => <DynamicLoading />}
  ),
  '166-saving-lives': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/166-saving-lives' */ '../sources/166-saving-lives.js'),
    {loading: () => <DynamicLoading />}
  ),
  '167-wrong-proportions-perils-of-perception': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/167-wrong-proportions-perils-of-perception' */ '../sources/167-wrong-proportions-perils-of-perception.js'),
    {loading: () => <DynamicLoading />}
  ),
  '168-educated-mothers-and-child-survival': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/168-educated-mothers-and-child-survival' */ '../sources/168-educated-mothers-and-child-survival.js'),
    {loading: () => <DynamicLoading />}
  ),
  '169-4-2-million': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/169-4-2-million' */ '../sources/169-4-2-million.js'),
    {loading: () => <DynamicLoading />}
  ),
  '17-hans-testing-students': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/17-hans-testing-students' */ '../sources/17-hans-testing-students.js'),
    {loading: () => <DynamicLoading />}
  ),
  '171-bach-mai-hospital': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/171-bach-mai-hospital' */ '../sources/171-bach-mai-hospital.js'),
    {loading: () => <DynamicLoading />}
  ),
  '172-the-vietnam-war': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/172-the-vietnam-war' */ '../sources/172-the-vietnam-war.js'),
    {loading: () => <DynamicLoading />}
  ),
  '173-bears-and-axes': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/173-bears-and-axes' */ '../sources/173-bears-and-axes.js'),
    {loading: () => <DynamicLoading />}
  ),
  '174-the-spanish-flu': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/174-the-spanish-flu' */ '../sources/174-the-spanish-flu.js'),
    {loading: () => <DynamicLoading />}
  ),
  '174-tuberculosis-tb-and-the-swine-flu': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/174-tuberculosis-tb-and-the-swine-flu' */ '../sources/174-tuberculosis-tb-and-the-swine-flu.js'),
    {loading: () => <DynamicLoading />}
  ),
  '175-energy-sources': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/175-energy-sources' */ '../sources/175-energy-sources.js'),
    {loading: () => <DynamicLoading />}
  ),
  '178-the-world-s-pin-code': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/178-the-world-s-pin-code' */ '../sources/178-the-world-s-pin-code.js'),
    {loading: () => <DynamicLoading />}
  ),
  '179-future-consumers': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/179-future-consumers' */ '../sources/179-future-consumers.js'),
    {loading: () => <DynamicLoading />}
  ),
  '179-graphs-west-and-rest': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/179-graphs-west-and-rest' */ '../sources/179-graphs-west-and-rest.js'),
    {loading: () => <DynamicLoading />}
  ),
  '180-child-mortality-rate': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/180-child-mortality-rate' */ '../sources/180-child-mortality-rate.js'),
    {loading: () => <DynamicLoading />}
  ),
  '182-co2-per-capita': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/182-co2-per-capita' */ '../sources/182-co2-per-capita.js'),
    {loading: () => <DynamicLoading />}
  ),
  '19-world-economic-forum-lecture': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/19-world-economic-forum-lecture' */ '../sources/19-world-economic-forum-lecture.js'),
    {loading: () => <DynamicLoading />}
  ),
  '196-the-cost-of-diabetes': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/196-the-cost-of-diabetes' */ '../sources/196-the-cost-of-diabetes.js'),
    {loading: () => <DynamicLoading />}
  ),
  '2-gapminder': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/2-gapminder' */ '../sources/2-gapminder.js'),
    {loading: () => <DynamicLoading />}
  ),
  '203-comparing-stoves': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/203-comparing-stoves' */ '../sources/203-comparing-stoves.js'),
    {loading: () => <DynamicLoading />}
  ),
  '205-graph-differences-within-africa': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/205-graph-differences-within-africa' */ '../sources/205-graph-differences-within-africa.js'),
    {loading: () => <DynamicLoading />}
  ),
  '206-contraceptives-in-sweden': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/206-contraceptives-in-sweden' */ '../sources/206-contraceptives-in-sweden.js'),
    {loading: () => <DynamicLoading />}
  ),
  '206-family-planning-needs-met-and-unmet-needs': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/206-family-planning-needs-met-and-unmet-needs' */ '../sources/206-family-planning-needs-met-and-unmet-needs.js'),
    {loading: () => <DynamicLoading />}
  ),
  '207-everything-is-made-from-chemicals': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/207-everything-is-made-from-chemicals' */ '../sources/207-everything-is-made-from-chemicals.js'),
    {loading: () => <DynamicLoading />}
  ),
  '208-the-salhi-family-on-dollar-street': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/208-the-salhi-family-on-dollar-street' */ '../sources/208-the-salhi-family-on-dollar-street.js'),
    {loading: () => <DynamicLoading />}
  ),
  '21-the-ten-instincts-in-cognitive-science': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/21-the-ten-instincts-in-cognitive-science' */ '../sources/21-the-ten-instincts-in-cognitive-science.js'),
    {loading: () => <DynamicLoading />}
  ),
  '210-the-recovery-position': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/210-the-recovery-position' */ '../sources/210-the-recovery-position.js'),
    {loading: () => <DynamicLoading />}
  ),
  '211-hong-kong-report-on-sids': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/211-hong-kong-report-on-sids' */ '../sources/211-hong-kong-report-on-sids.js'),
    {loading: () => <DynamicLoading />}
  ),
  '219-the-sense-of-superiority': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/219-the-sense-of-superiority' */ '../sources/219-the-sense-of-superiority.js'),
    {loading: () => <DynamicLoading />}
  ),
  '22-cognitive-biases': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/22-cognitive-biases' */ '../sources/22-cognitive-biases.js'),
    {loading: () => <DynamicLoading />}
  ),
  '220-life-expectancy-1970-2016-north-africa-and-western-europe': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/220-life-expectancy-1970-2016-north-africa-and-western-europe' */ '../sources/220-life-expectancy-1970-2016-north-africa-and-western-europe.js'),
    {loading: () => <DynamicLoading />}
  ),
  '220-world-health-chart-over-200-years': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/220-world-health-chart-over-200-years' */ '../sources/220-world-health-chart-over-200-years.js'),
    {loading: () => <DynamicLoading />}
  ),
  '221-80-years-ago-in-sweden-and-us': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/221-80-years-ago-in-sweden-and-us' */ '../sources/221-80-years-ago-in-sweden-and-us.js'),
    {loading: () => <DynamicLoading />}
  ),
  '221-child-mortality-rates-for-sub-saharan-africa-and-sweden': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/221-child-mortality-rates-for-sub-saharan-africa-and-sweden' */ '../sources/221-child-mortality-rates-for-sub-saharan-africa-and-sweden.js'),
    {loading: () => <DynamicLoading />}
  ),
  '221-progress-in-china-bangladesh-and-vietnam': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/221-progress-in-china-bangladesh-and-vietnam' */ '../sources/221-progress-in-china-bangladesh-and-vietnam.js'),
    {loading: () => <DynamicLoading />}
  ),
  '221-speed-of-improvement-over-the-decades': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/221-speed-of-improvement-over-the-decades' */ '../sources/221-speed-of-improvement-over-the-decades.js'),
    {loading: () => <DynamicLoading />}
  ),
  '222-estimates-of-extreme-poverty': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/222-estimates-of-extreme-poverty' */ '../sources/222-estimates-of-extreme-poverty.js'),
    {loading: () => <DynamicLoading />}
  ),
  '222-mozambique-and-india': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/222-mozambique-and-india' */ '../sources/222-mozambique-and-india.js'),
    {loading: () => <DynamicLoading />}
  ),
  '223-imf-forecasts': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/223-imf-forecasts' */ '../sources/223-imf-forecasts.js'),
    {loading: () => <DynamicLoading />}
  ),
  '224-fertility-in-iran': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/224-fertility-in-iran' */ '../sources/224-fertility-in-iran.js'),
    {loading: () => <DynamicLoading />}
  ),
  '226-classifying-major-religions': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/226-classifying-major-religions' */ '../sources/226-classifying-major-religions.js'),
    {loading: () => <DynamicLoading />}
  ),
  '226-high-income-means-low-fertility': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/226-high-income-means-low-fertility' */ '../sources/226-high-income-means-low-fertility.js'),
    {loading: () => <DynamicLoading />}
  ),
  '227-graphs-three-groups-based-on-religion': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/227-graphs-three-groups-based-on-religion' */ '../sources/227-graphs-three-groups-based-on-religion.js'),
    {loading: () => <DynamicLoading />}
  ),
  '227-swedish-values-and-rfsu': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/227-swedish-values-and-rfsu' */ '../sources/227-swedish-values-and-rfsu.js'),
    {loading: () => <DynamicLoading />}
  ),
  '228-asian-values': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/228-asian-values' */ '../sources/228-asian-values.js'),
    {loading: () => <DynamicLoading />}
  ),
  '229-asian-university-for-women-in-bangladesh': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/229-asian-university-for-women-in-bangladesh' */ '../sources/229-asian-university-for-women-in-bangladesh.js'),
    {loading: () => <DynamicLoading />}
  ),
  '231-nature-reserves': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/231-nature-reserves' */ '../sources/231-nature-reserves.js'),
    {loading: () => <DynamicLoading />}
  ),
  '231-sri-lanka-s-earliest-protected-forest': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/231-sri-lanka-s-earliest-protected-forest' */ '../sources/231-sri-lanka-s-earliest-protected-forest.js'),
    {loading: () => <DynamicLoading />}
  ),
  '232-outdated-chimpanzee-questions': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/232-outdated-chimpanzee-questions' */ '../sources/232-outdated-chimpanzee-questions.js'),
    {loading: () => <DynamicLoading />}
  ),
  '233-attitudes-toward-same-sex-marriage': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/233-attitudes-toward-same-sex-marriage' */ '../sources/233-attitudes-toward-same-sex-marriage.js'),
    {loading: () => <DynamicLoading />}
  ),
  '233-swedish-school-system': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/233-swedish-school-system' */ '../sources/233-swedish-school-system.js'),
    {loading: () => <DynamicLoading />}
  ),
  '242-expert-forecasts-the-single-perspective-in-other-books': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/242-expert-forecasts-the-single-perspective-in-other-books' */ '../sources/242-expert-forecasts-the-single-perspective-in-other-books.js'),
    {loading: () => <DynamicLoading />}
  ),
  '243-lindau-nobel-laureate-meeting': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/243-lindau-nobel-laureate-meeting' */ '../sources/243-lindau-nobel-laureate-meeting.js'),
    {loading: () => <DynamicLoading />}
  ),
  '243-poll-results-from-groups-of-professionals': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/243-poll-results-from-groups-of-professionals' */ '../sources/243-poll-results-from-groups-of-professionals.js'),
    {loading: () => <DynamicLoading />}
  ),
  '245-plundered-natural-resources': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/245-plundered-natural-resources' */ '../sources/245-plundered-natural-resources.js'),
    {loading: () => <DynamicLoading />}
  ),
  '248-eradicating-one-disease-at-a-time': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/248-eradicating-one-disease-at-a-time' */ '../sources/248-eradicating-one-disease-at-a-time.js'),
    {loading: () => <DynamicLoading />}
  ),
  '249-education-needs-electricity': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/249-education-needs-electricity' */ '../sources/249-education-needs-electricity.js'),
    {loading: () => <DynamicLoading />}
  ),
  '249-falling-profits-of-big-pharma': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/249-falling-profits-of-big-pharma' */ '../sources/249-falling-profits-of-big-pharma.js'),
    {loading: () => <DynamicLoading />}
  ),
  '254-chart-cuba': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/254-chart-cuba' */ '../sources/254-chart-cuba.js'),
    {loading: () => <DynamicLoading />}
  ),
  '256-chart-us-health-spendings': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/256-chart-us-health-spendings' */ '../sources/256-chart-us-health-spendings.js'),
    {loading: () => <DynamicLoading />}
  ),
  '258-democracy-and-progress': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/258-democracy-and-progress' */ '../sources/258-democracy-and-progress.js'),
    {loading: () => <DynamicLoading />}
  ),
  '258-democracy-is-not-the-single-solution': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/258-democracy-is-not-the-single-solution' */ '../sources/258-democracy-is-not-the-single-solution.js'),
    {loading: () => <DynamicLoading />}
  ),
  '262-neglected-diseases': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/262-neglected-diseases' */ '../sources/262-neglected-diseases.js'),
    {loading: () => <DynamicLoading />}
  ),
  '265-systems-thinking': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/265-systems-thinking' */ '../sources/265-systems-thinking.js'),
    {loading: () => <DynamicLoading />}
  ),
  '266-how-unicef-gets-the-lowest-prices': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/266-how-unicef-gets-the-lowest-prices' */ '../sources/266-how-unicef-gets-the-lowest-prices.js'),
    {loading: () => <DynamicLoading />}
  ),
  '268-gapminder-s-ignorance-project': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/268-gapminder-s-ignorance-project' */ '../sources/268-gapminder-s-ignorance-project.js'),
    {loading: () => <DynamicLoading />}
  ),
  '269-poll-results': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/269-poll-results' */ '../sources/269-poll-results.js'),
    {loading: () => <DynamicLoading />}
  ),
  '271-why-refugees-don-t-fly': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/271-why-refugees-don-t-fly' */ '../sources/271-why-refugees-don-t-fly.js'),
    {loading: () => <DynamicLoading />}
  ),
  '274-co2-emissions-by-income': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/274-co2-emissions-by-income' */ '../sources/274-co2-emissions-by-income.js'),
    {loading: () => <DynamicLoading />}
  ),
  '275-syphilis': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/275-syphilis' */ '../sources/275-syphilis.js'),
    {loading: () => <DynamicLoading />}
  ),
  '276-1-billion-people-and-mao': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/276-1-billion-people-and-mao' */ '../sources/276-1-billion-people-and-mao.js'),
    {loading: () => <DynamicLoading />}
  ),
  '276-falling-birth-rates-and-powerful-leaders': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/276-falling-birth-rates-and-powerful-leaders' */ '../sources/276-falling-birth-rates-and-powerful-leaders.js'),
    {loading: () => <DynamicLoading />}
  ),
  '276-family-planning-contraceptive-usage-by-catholics': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/276-family-planning-contraceptive-usage-by-catholics' */ '../sources/276-family-planning-contraceptive-usage-by-catholics.js'),
    {loading: () => <DynamicLoading />}
  ),
  '278-access-to-safe-abortion': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/278-access-to-safe-abortion' */ '../sources/278-access-to-safe-abortion.js'),
    {loading: () => <DynamicLoading />}
  ),
  '279-institutions': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/279-institutions' */ '../sources/279-institutions.js'),
    {loading: () => <DynamicLoading />}
  ),
  '279-the-governmental-employees-who-saved-the-world-from-ebola': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/279-the-governmental-employees-who-saved-the-world-from-ebola' */ '../sources/279-the-governmental-employees-who-saved-the-world-from-ebola.js'),
    {loading: () => <DynamicLoading />}
  ),
  '28-child-mortality-in-1995-and-2017': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/28-child-mortality-in-1995-and-2017' */ '../sources/28-child-mortality-in-1995-and-2017.js'),
    {loading: () => <DynamicLoading />}
  ),
  '280-thank-you-industrial-revolution': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/280-thank-you-industrial-revolution' */ '../sources/280-thank-you-industrial-revolution.js'),
    {loading: () => <DynamicLoading />}
  ),
  '286-konzo': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/286-konzo' */ '../sources/286-konzo.js'),
    {loading: () => <DynamicLoading />}
  ),
  '288-roadblocks': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/288-roadblocks' */ '../sources/288-roadblocks.js'),
    {loading: () => <DynamicLoading />}
  ),
  '290-now-or-never': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/290-now-or-never' */ '../sources/290-now-or-never.js'),
    {loading: () => <DynamicLoading />}
  ),
  '290-the-urgency-instinct-in-other-books': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/290-the-urgency-instinct-in-other-books' */ '../sources/290-the-urgency-instinct-in-other-books.js'),
    {loading: () => <DynamicLoading />}
  ),
  '295-the-melting-ice-cap': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/295-the-melting-ice-cap' */ '../sources/295-the-melting-ice-cap.js'),
    {loading: () => <DynamicLoading />}
  ),
  '296-fresh-numbers-for-gdp-and-co2': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/296-fresh-numbers-for-gdp-and-co2' */ '../sources/296-fresh-numbers-for-gdp-and-co2.js'),
    {loading: () => <DynamicLoading />}
  ),
  '297-climate-reductionism-and-catastrophizing': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/297-climate-reductionism-and-catastrophizing' */ '../sources/297-climate-reductionism-and-catastrophizing.js'),
    {loading: () => <DynamicLoading />}
  ),
  '297-climate-refugees': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/297-climate-refugees' */ '../sources/297-climate-refugees.js'),
    {loading: () => <DynamicLoading />}
  ),
  '298-ebola': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/298-ebola' */ '../sources/298-ebola.js'),
    {loading: () => <DynamicLoading />}
  ),
  '30-improvements-in-sweden-and-saudi-arabia': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/30-improvements-in-sweden-and-saudi-arabia' */ '../sources/30-improvements-in-sweden-and-saudi-arabia.js'),
    {loading: () => <DynamicLoading />}
  ),
  '302-the-risk-of-global-pandemic': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/302-the-risk-of-global-pandemic' */ '../sources/302-the-risk-of-global-pandemic.js'),
    {loading: () => <DynamicLoading />}
  ),
  '303-the-risk-of-financial-collapse': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/303-the-risk-of-financial-collapse' */ '../sources/303-the-risk-of-financial-collapse.js'),
    {loading: () => <DynamicLoading />}
  ),
  '303-the-risk-of-world-war-iii': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/303-the-risk-of-world-war-iii' */ '../sources/303-the-risk-of-world-war-iii.js'),
    {loading: () => <DynamicLoading />}
  ),
  '304-the-risk-of-climate-change-and-plundering-of-natural-resources': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/304-the-risk-of-climate-change-and-plundering-of-natural-resources' */ '../sources/304-the-risk-of-climate-change-and-plundering-of-natural-resources.js'),
    {loading: () => <DynamicLoading />}
  ),
  '305-the-risk-of-extreme-poverty': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/305-the-risk-of-extreme-poverty' */ '../sources/305-the-risk-of-extreme-poverty.js'),
    {loading: () => <DynamicLoading />}
  ),
  '315-teachers': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/315-teachers' */ '../sources/315-teachers.js'),
    {loading: () => <DynamicLoading />}
  ),
  '318-business': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/318-business' */ '../sources/318-business.js'),
    {loading: () => <DynamicLoading />}
  ),
  '319-diversified-economies': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/319-diversified-economies' */ '../sources/319-diversified-economies.js'),
    {loading: () => <DynamicLoading />}
  ),
  '320-speling-miskates': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/320-speling-miskates' */ '../sources/320-speling-miskates.js'),
    {loading: () => <DynamicLoading />}
  ),
  '321-constructive-news': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/321-constructive-news' */ '../sources/321-constructive-news.js'),
    {loading: () => <DynamicLoading />}
  ),
  '322-local-ignorance-and-data': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/322-local-ignorance-and-data' */ '../sources/322-local-ignorance-and-data.js'),
    {loading: () => <DynamicLoading />}
  ),
  '35-graph-the-world-in-1965': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/35-graph-the-world-in-1965' */ '../sources/35-graph-the-world-in-1965.js'),
    {loading: () => <DynamicLoading />}
  ),
  '37-graph-the-world-in-2017': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/37-graph-the-world-in-2017' */ '../sources/37-graph-the-world-in-2017.js'),
    {loading: () => <DynamicLoading />}
  ),
  '38-danish-tv-interview': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/38-danish-tv-interview' */ '../sources/38-danish-tv-interview.js'),
    {loading: () => <DynamicLoading />}
  ),
  '40-primary-school-completion-rate': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/40-primary-school-completion-rate' */ '../sources/40-primary-school-completion-rate.js'),
    {loading: () => <DynamicLoading />}
  ),
  '41-polls-imagining-the-worst': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/41-polls-imagining-the-worst' */ '../sources/41-polls-imagining-the-worst.js'),
    {loading: () => <DynamicLoading />}
  ),
  '42-how-many-live-in-low-income-countries': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/42-how-many-live-in-low-income-countries' */ '../sources/42-how-many-live-in-low-income-countries.js'),
    {loading: () => <DynamicLoading />}
  ),
  '42-where-75-of-humanity-lives': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/42-where-75-of-humanity-lives' */ '../sources/42-where-75-of-humanity-lives.js'),
    {loading: () => <DynamicLoading />}
  ),
  '45-doubling-scales': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/45-doubling-scales' */ '../sources/45-doubling-scales.js'),
    {loading: () => <DynamicLoading />}
  ),
  '45-graph-four-income-levels': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/45-graph-four-income-levels' */ '../sources/45-graph-four-income-levels.js'),
    {loading: () => <DynamicLoading />}
  ),
  '46-air-pollution': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/46-air-pollution' */ '../sources/46-air-pollution.js'),
    {loading: () => <DynamicLoading />}
  ),
  '46-average-family-size-on-level-1': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/46-average-family-size-on-level-1' */ '../sources/46-average-family-size-on-level-1.js'),
    {loading: () => <DynamicLoading />}
  ),
  '46-children-working-in-the-household': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/46-children-working-in-the-household' */ '../sources/46-children-working-in-the-household.js'),
    {loading: () => <DynamicLoading />}
  ),
  '46-people-on-level-1': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/46-people-on-level-1' */ '../sources/46-people-on-level-1.js'),
    {loading: () => <DynamicLoading />}
  ),
  '47-cost-of-illness-on-level-2': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/47-cost-of-illness-on-level-2' */ '../sources/47-cost-of-illness-on-level-2.js'),
    {loading: () => <DynamicLoading />}
  ),
  '47-fridges-and-food-on-level-2': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/47-fridges-and-food-on-level-2' */ '../sources/47-fridges-and-food-on-level-2.js'),
    {loading: () => <DynamicLoading />}
  ),
  '47-work-in-a-garment-factory': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/47-work-in-a-garment-factory' */ '../sources/47-work-in-a-garment-factory.js'),
    {loading: () => <DynamicLoading />}
  ),
  '48-traffic-accidents-on-level-3': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/48-traffic-accidents-on-level-3' */ '../sources/48-traffic-accidents-on-level-3.js'),
    {loading: () => <DynamicLoading />}
  ),
  '49-books-on-level-4': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/49-books-on-level-4' */ '../sources/49-books-on-level-4.js'),
    {loading: () => <DynamicLoading />}
  ),
  '49-education-on-level-4': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/49-education-on-level-4' */ '../sources/49-education-on-level-4.js'),
    {loading: () => <DynamicLoading />}
  ),
  '49-travel-and-vacation-on-level-4': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/49-travel-and-vacation-on-level-4' */ '../sources/49-travel-and-vacation-on-level-4.js'),
    {loading: () => <DynamicLoading />}
  ),
  '50-developing-countries-in-other-organizations': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/50-developing-countries-in-other-organizations' */ '../sources/50-developing-countries-in-other-organizations.js'),
    {loading: () => <DynamicLoading />}
  ),
  '50-historic-poverty-rate': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/50-historic-poverty-rate' */ '../sources/50-historic-poverty-rate.js'),
    {loading: () => <DynamicLoading />}
  ),
  '50-incomes-in-western-europe-and-the-us-in-the-1950s': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/50-incomes-in-western-europe-and-the-us-in-the-1950s' */ '../sources/50-incomes-in-western-europe-and-the-us-in-the-1950s.js'),
    {loading: () => <DynamicLoading />}
  ),
  '50-outdated-terminology-and-the-world-bank': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/50-outdated-terminology-and-the-world-bank' */ '../sources/50-outdated-terminology-and-the-world-bank.js'),
    {loading: () => <DynamicLoading />}
  ),
  '52-graphs-incomes-in-mexico-us': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/52-graphs-incomes-in-mexico-us' */ '../sources/52-graphs-incomes-in-mexico-us.js'),
    {loading: () => <DynamicLoading />}
  ),
  '52-math-scores': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/52-math-scores' */ '../sources/52-math-scores.js'),
    {loading: () => <DynamicLoading />}
  ),
  '54-in-apartheid-south-africa': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/54-in-apartheid-south-africa' */ '../sources/54-in-apartheid-south-africa.js'),
    {loading: () => <DynamicLoading />}
  ),
  '54-overlapping-spreads': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/54-overlapping-spreads' */ '../sources/54-overlapping-spreads.js'),
    {loading: () => <DynamicLoading />}
  ),
  '55-brazilian-income-inequality': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/55-brazilian-income-inequality' */ '../sources/55-brazilian-income-inequality.js'),
    {loading: () => <DynamicLoading />}
  ),
  '57-poverty-and-extreme-poverty': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/57-poverty-and-extreme-poverty' */ '../sources/57-poverty-and-extreme-poverty.js'),
    {loading: () => <DynamicLoading />}
  ),
  '58-levels-of-poverty': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/58-levels-of-poverty' */ '../sources/58-levels-of-poverty.js'),
    {loading: () => <DynamicLoading />}
  ),
  '6-x-ray': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/6-x-ray' */ '../sources/6-x-ray.js'),
    {loading: () => <DynamicLoading />}
  ),
  '62-living-conditions-in-1950s-sweden': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/62-living-conditions-in-1950s-sweden' */ '../sources/62-living-conditions-in-1950s-sweden.js'),
    {loading: () => <DynamicLoading />}
  ),
  '63-sea-levels': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/63-sea-levels' */ '../sources/63-sea-levels.js'),
    {loading: () => <DynamicLoading />}
  ),
  '63-terrorism-on-the-rise': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/63-terrorism-on-the-rise' */ '../sources/63-terrorism-on-the-rise.js'),
    {loading: () => <DynamicLoading />}
  ),
  '63-the-state-of-world-fisheries': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/63-the-state-of-world-fisheries' */ '../sources/63-the-state-of-world-fisheries.js'),
    {loading: () => <DynamicLoading />}
  ),
  '64-graph-better-worse-or-about-the-same': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/64-graph-better-worse-or-about-the-same' */ '../sources/64-graph-better-worse-or-about-the-same.js'),
    {loading: () => <DynamicLoading />}
  ),
  '64-when-to-trust-the-data': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/64-when-to-trust-the-data' */ '../sources/64-when-to-trust-the-data.js'),
    {loading: () => <DynamicLoading />}
  ),
  '67-19th-century-living-conditions': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/67-19th-century-living-conditions' */ '../sources/67-19th-century-living-conditions.js'),
    {loading: () => <DynamicLoading />}
  ),
  '67-dip-in-extreme-poverty-china-india-and-latin-america': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/67-dip-in-extreme-poverty-china-india-and-latin-america' */ '../sources/67-dip-in-extreme-poverty-china-india-and-latin-america.js'),
    {loading: () => <DynamicLoading />}
  ),
  '68-graph-extreme-poverty-rate': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/68-graph-extreme-poverty-rate' */ '../sources/68-graph-extreme-poverty-rate.js'),
    {loading: () => <DynamicLoading />}
  ),
  '69-fact-question-4-life-expectancy': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/69-fact-question-4-life-expectancy' */ '../sources/69-fact-question-4-life-expectancy.js'),
    {loading: () => <DynamicLoading />}
  ),
  '69-historic-child-mortality': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/69-historic-child-mortality' */ '../sources/69-historic-child-mortality.js'),
    {loading: () => <DynamicLoading />}
  ),
  '69-life-expectancy-and-data-doubt': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/69-life-expectancy-and-data-doubt' */ '../sources/69-life-expectancy-and-data-doubt.js'),
    {loading: () => <DynamicLoading />}
  ),
  '70-deaths-from-starvation-in-ethiopia': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/70-deaths-from-starvation-in-ethiopia' */ '../sources/70-deaths-from-starvation-in-ethiopia.js'),
    {loading: () => <DynamicLoading />}
  ),
  '71-graph-average-life-expectancy-from-1800-to-today': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/71-graph-average-life-expectancy-from-1800-to-today' */ '../sources/71-graph-average-life-expectancy-from-1800-to-today.js'),
    {loading: () => <DynamicLoading />}
  ),
  '72-swedes-living-on-level-4': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/72-swedes-living-on-level-4' */ '../sources/72-swedes-living-on-level-4.js'),
    {loading: () => <DynamicLoading />}
  ),
  '72-world-food-programme': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/72-world-food-programme' */ '../sources/72-world-food-programme.js'),
    {loading: () => <DynamicLoading />}
  ),
  '73-graph-catching-up-with-sweden': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/73-graph-catching-up-with-sweden' */ '../sources/73-graph-catching-up-with-sweden.js'),
    {loading: () => <DynamicLoading />}
  ),
  '74-not-uncommon-for-children-to-drown': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/74-not-uncommon-for-children-to-drown' */ '../sources/74-not-uncommon-for-children-to-drown.js'),
    {loading: () => <DynamicLoading />}
  ),
  '75-citizens-of-lesotho': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/75-citizens-of-lesotho' */ '../sources/75-citizens-of-lesotho.js'),
    {loading: () => <DynamicLoading />}
  ),
  '75-life-expectancy-in-lesotho-and-uncertainty-of-data': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/75-life-expectancy-in-lesotho-and-uncertainty-of-data' */ '../sources/75-life-expectancy-in-lesotho-and-uncertainty-of-data.js'),
    {loading: () => <DynamicLoading />}
  ),
  '75-literacy-in-sweden-and-india': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/75-literacy-in-sweden-and-india' */ '../sources/75-literacy-in-sweden-and-india.js'),
    {loading: () => <DynamicLoading />}
  ),
  '76-vaccination-on-level-1': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/76-vaccination-on-level-1' */ '../sources/76-vaccination-on-level-1.js'),
    {loading: () => <DynamicLoading />}
  ),
  '78-graph-child-mortality': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/78-graph-child-mortality' */ '../sources/78-graph-child-mortality.js'),
    {loading: () => <DynamicLoading />}
  ),
  '78-graph-death-penalty': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/78-graph-death-penalty' */ '../sources/78-graph-death-penalty.js'),
    {loading: () => <DynamicLoading />}
  ),
  '78-graph-leaded-gasoline': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/78-graph-leaded-gasoline' */ '../sources/78-graph-leaded-gasoline.js'),
    {loading: () => <DynamicLoading />}
  ),
  '78-graph-legal-slavery': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/78-graph-legal-slavery' */ '../sources/78-graph-legal-slavery.js'),
    {loading: () => <DynamicLoading />}
  ),
  '78-graph-oil-spills': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/78-graph-oil-spills' */ '../sources/78-graph-oil-spills.js'),
    {loading: () => <DynamicLoading />}
  ),
  '79-graph-child-labor': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/79-graph-child-labor' */ '../sources/79-graph-child-labor.js'),
    {loading: () => <DynamicLoading />}
  ),
  '79-graph-deaths-from-disaster': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/79-graph-deaths-from-disaster' */ '../sources/79-graph-deaths-from-disaster.js'),
    {loading: () => <DynamicLoading />}
  ),
  '79-graph-nuclear-arms': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/79-graph-nuclear-arms' */ '../sources/79-graph-nuclear-arms.js'),
    {loading: () => <DynamicLoading />}
  ),
  '79-graph-ozone-depletion': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/79-graph-ozone-depletion' */ '../sources/79-graph-ozone-depletion.js'),
    {loading: () => <DynamicLoading />}
  ),
  '79-graph-smallpox': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/79-graph-smallpox' */ '../sources/79-graph-smallpox.js'),
    {loading: () => <DynamicLoading />}
  ),
  '79-graph-smoke-particles': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/79-graph-smoke-particles' */ '../sources/79-graph-smoke-particles.js'),
    {loading: () => <DynamicLoading />}
  ),
  '8-hans-s-sword-swallowing': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/8-hans-s-sword-swallowing' */ '../sources/8-hans-s-sword-swallowing.js'),
    {loading: () => <DynamicLoading />}
  ),
  '80-graph-democracy': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/80-graph-democracy' */ '../sources/80-graph-democracy.js'),
    {loading: () => <DynamicLoading />}
  ),
  '80-graph-harvest': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/80-graph-harvest' */ '../sources/80-graph-harvest.js'),
    {loading: () => <DynamicLoading />}
  ),
  '80-graph-literacy': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/80-graph-literacy' */ '../sources/80-graph-literacy.js'),
    {loading: () => <DynamicLoading />}
  ),
  '80-graph-new-movies': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/80-graph-new-movies' */ '../sources/80-graph-new-movies.js'),
    {loading: () => <DynamicLoading />}
  ),
  '80-graph-new-music': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/80-graph-new-music' */ '../sources/80-graph-new-music.js'),
    {loading: () => <DynamicLoading />}
  ),
  '80-graph-protected-nature': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/80-graph-protected-nature' */ '../sources/80-graph-protected-nature.js'),
    {loading: () => <DynamicLoading />}
  ),
  '80-graph-science': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/80-graph-science' */ '../sources/80-graph-science.js'),
    {loading: () => <DynamicLoading />}
  ),
  '80-graph-women-s-right-to-vote': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/80-graph-women-s-right-to-vote' */ '../sources/80-graph-women-s-right-to-vote.js'),
    {loading: () => <DynamicLoading />}
  ),
  '81-graph-child-cancer-survival': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/81-graph-child-cancer-survival' */ '../sources/81-graph-child-cancer-survival.js'),
    {loading: () => <DynamicLoading />}
  ),
  '81-graph-electricity-coverage': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/81-graph-electricity-coverage' */ '../sources/81-graph-electricity-coverage.js'),
    {loading: () => <DynamicLoading />}
  ),
  '81-graph-girls-in-school': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/81-graph-girls-in-school' */ '../sources/81-graph-girls-in-school.js'),
    {loading: () => <DynamicLoading />}
  ),
  '81-graph-immunization': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/81-graph-immunization' */ '../sources/81-graph-immunization.js'),
    {loading: () => <DynamicLoading />}
  ),
  '81-graph-internet': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/81-graph-internet' */ '../sources/81-graph-internet.js'),
    {loading: () => <DynamicLoading />}
  ),
  '81-graph-mobile-phones': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/81-graph-mobile-phones' */ '../sources/81-graph-mobile-phones.js'),
    {loading: () => <DynamicLoading />}
  ),
  '81-graph-monitored-species': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/81-graph-monitored-species' */ '../sources/81-graph-monitored-species.js'),
    {loading: () => <DynamicLoading />}
  ),
  '82-graph-guitars-per-capita': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/82-graph-guitars-per-capita' */ '../sources/82-graph-guitars-per-capita.js'),
    {loading: () => <DynamicLoading />}
  ),
  '84-ancient-graveyards-and-burial-sites': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/84-ancient-graveyards-and-burial-sites' */ '../sources/84-ancient-graveyards-and-burial-sites.js'),
    {loading: () => <DynamicLoading />}
  ),
  '84-causes-of-death-in-human-history': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/84-causes-of-death-in-human-history' */ '../sources/84-causes-of-death-in-human-history.js'),
    {loading: () => <DynamicLoading />}
  ),
  '84-historic-child-murders': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/84-historic-child-murders' */ '../sources/84-historic-child-murders.js'),
    {loading: () => <DynamicLoading />}
  ),
  '88-educating-girls': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/88-educating-girls' */ '../sources/88-educating-girls.js'),
    {loading: () => <DynamicLoading />}
  ),
  '9-fact-question-1-girls-in-school-in-low-income-countries': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/9-fact-question-1-girls-in-school-in-low-income-countries' */ '../sources/9-fact-question-1-girls-in-school-in-low-income-countries.js'),
    {loading: () => <DynamicLoading />}
  ),
  '9-fact-question-2-where-the-majority-lives': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/9-fact-question-2-where-the-majority-lives' */ '../sources/9-fact-question-2-where-the-majority-lives.js'),
    {loading: () => <DynamicLoading />}
  ),
  '9-fact-question-3-extreme-poverty': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/9-fact-question-3-extreme-poverty' */ '../sources/9-fact-question-3-extreme-poverty.js'),
    {loading: () => <DynamicLoading />}
  ),
  '93-drownings': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/93-drownings' */ '../sources/93-drownings.js'),
    {loading: () => <DynamicLoading />}
  ),
  '98-ebola': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/98-ebola' */ '../sources/98-ebola.js'),
    {loading: () => <DynamicLoading />}
  ),
  '98-lord-krishna-s-chessboard': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/98-lord-krishna-s-chessboard' */ '../sources/98-lord-krishna-s-chessboard.js'),
    {loading: () => <DynamicLoading />}
  ),
  'country-names': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/country-names' */ '../sources/country-names.js'),
    {loading: () => <DynamicLoading />}
  ),
  'data-for-2017': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/data-for-2017' */ '../sources/data-for-2017.js'),
    {loading: () => <DynamicLoading />}
  ),
  'final-note': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/final-note' */ '../sources/final-note.js'),
    {loading: () => <DynamicLoading />}
  ),
  'inside-end-cover': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/inside-end-cover' */ '../sources/inside-end-cover.js'),
    {loading: () => <DynamicLoading />}
  ),
  'inside-front-cover': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/inside-front-cover' */ '../sources/inside-front-cover.js'),
    {loading: () => <DynamicLoading />}
  ),
  'ppp-extreme-poverty': dynamic(
    () =>
      import(/* webpackChunkName: 'sources/ppp-extreme-poverty' */ '../sources/ppp-extreme-poverty.js'),
    {loading: () => <DynamicLoading />}
  )
}
