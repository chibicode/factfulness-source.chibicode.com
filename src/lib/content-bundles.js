import React from 'react'
import dynamic from 'next/dynamic'

const DynamicLoading = () => '…'

export default {
  '10-fact-question-4-life-expectancy': dynamic(
    () =>
      import(/* webpackChunkName: '10-fact-question-4-life-expectancy' */ '../contents/10-fact-question-4-life-expectancy.js'),
    {loading: () => <DynamicLoading />}
  ),
  '10-fact-question-5-future-number-of-children': dynamic(
    () =>
      import(/* webpackChunkName: '10-fact-question-5-future-number-of-children' */ '../contents/10-fact-question-5-future-number-of-children.js'),
    {loading: () => <DynamicLoading />}
  ),
  '10-fact-question-6-why-is-the-population-increasing': dynamic(
    () =>
      import(/* webpackChunkName: '10-fact-question-6-why-is-the-population-increasing' */ '../contents/10-fact-question-6-why-is-the-population-increasing.js'),
    {loading: () => <DynamicLoading />}
  ),
  '100-the-world-population-is-not-just-increasing': dynamic(
    () =>
      import(/* webpackChunkName: '100-the-world-population-is-not-just-increasing' */ '../contents/100-the-world-population-is-not-just-increasing.js'),
    {loading: () => <DynamicLoading />}
  ),
  '102-experts-at-the-world-economic-forum': dynamic(
    () =>
      import(/* webpackChunkName: '102-experts-at-the-world-economic-forum' */ '../contents/102-experts-at-the-world-economic-forum.js'),
    {loading: () => <DynamicLoading />}
  ),
  '102-graph-future-number-of-children': dynamic(
    () =>
      import(/* webpackChunkName: '102-graph-future-number-of-children' */ '../contents/102-graph-future-number-of-children.js'),
    {loading: () => <DynamicLoading />}
  ),
  '102-teacher-s-conference-in-norway': dynamic(
    () =>
      import(/* webpackChunkName: '102-teacher-s-conference-in-norway' */ '../contents/102-teacher-s-conference-in-norway.js'),
    {loading: () => <DynamicLoading />}
  ),
  '103-graph-world-population-from-8000-bc-to-today': dynamic(
    () =>
      import(/* webpackChunkName: '103-graph-world-population-from-8000-bc-to-today' */ '../contents/103-graph-world-population-from-8000-bc-to-today.js'),
    {loading: () => <DynamicLoading />}
  ),
  '103-historic-world-population-and-three-big-cities': dynamic(
    () =>
      import(/* webpackChunkName: '103-historic-world-population-and-three-big-cities' */ '../contents/103-historic-world-population-and-three-big-cities.js'),
    {loading: () => <DynamicLoading />}
  ),
  '103-the-accuracy-of-un-population-forecasts': dynamic(
    () =>
      import(/* webpackChunkName: '103-the-accuracy-of-un-population-forecasts' */ '../contents/103-the-accuracy-of-un-population-forecasts.js'),
    {loading: () => <DynamicLoading />}
  ),
  '108-graph-babies-per-woman-from-1800-to-today': dynamic(
    () =>
      import(/* webpackChunkName: '108-graph-babies-per-woman-from-1800-to-today' */ '../contents/108-graph-babies-per-woman-from-1800-to-today.js'),
    {loading: () => <DynamicLoading />}
  ),
  '109-fertility-transitions': dynamic(
    () =>
      import(/* webpackChunkName: '109-fertility-transitions' */ '../contents/109-fertility-transitions.js'),
    {loading: () => <DynamicLoading />}
  ),
  '11-fact-question-7-natural-disasters': dynamic(
    () =>
      import(/* webpackChunkName: '11-fact-question-7-natural-disasters' */ '../contents/11-fact-question-7-natural-disasters.js'),
    {loading: () => <DynamicLoading />}
  ),
  '11-fact-question-8-where-people-live': dynamic(
    () =>
      import(/* webpackChunkName: '11-fact-question-8-where-people-live' */ '../contents/11-fact-question-8-where-people-live.js'),
    {loading: () => <DynamicLoading />}
  ),
  '11-fact-question-9-vaccination': dynamic(
    () =>
      import(/* webpackChunkName: '11-fact-question-9-vaccination' */ '../contents/11-fact-question-9-vaccination.js'),
    {loading: () => <DynamicLoading />}
  ),
  '110-the-inevitable-fill-up': dynamic(
    () =>
      import(/* webpackChunkName: '110-the-inevitable-fill-up' */ '../contents/110-the-inevitable-fill-up.js'),
    {loading: () => <DynamicLoading />}
  ),
  '112-the-new-balance': dynamic(
    () =>
      import(/* webpackChunkName: '112-the-new-balance' */ '../contents/112-the-new-balance.js'),
    {loading: () => <DynamicLoading />}
  ),
  '112-the-old-balance': dynamic(
    () =>
      import(/* webpackChunkName: '112-the-old-balance' */ '../contents/112-the-old-balance.js'),
    {loading: () => <DynamicLoading />}
  ),
  '115-graph-average-family-size-by-income': dynamic(
    () =>
      import(/* webpackChunkName: '115-graph-average-family-size-by-income' */ '../contents/115-graph-average-family-size-by-income.js'),
    {loading: () => <DynamicLoading />}
  ),
  '116-child-survival': dynamic(
    () =>
      import(/* webpackChunkName: '116-child-survival' */ '../contents/116-child-survival.js'),
    {loading: () => <DynamicLoading />}
  ),
  '117-two-public-health-miracles': dynamic(
    () =>
      import(/* webpackChunkName: '117-two-public-health-miracles' */ '../contents/117-two-public-health-miracles.js'),
    {loading: () => <DynamicLoading />}
  ),
  '119-graphs-14-straight-lines-s-bends-slides-and-humps': dynamic(
    () =>
      import(/* webpackChunkName: '119-graphs-14-straight-lines-s-bends-slides-and-humps' */ '../contents/119-graphs-14-straight-lines-s-bends-slides-and-humps.js'),
    {loading: () => <DynamicLoading />}
  ),
  '12-fact-question-10-women-s-education': dynamic(
    () =>
      import(/* webpackChunkName: '12-fact-question-10-women-s-education' */ '../contents/12-fact-question-10-women-s-education.js'),
    {loading: () => <DynamicLoading />}
  ),
  '12-fact-question-11-endangered-species': dynamic(
    () =>
      import(/* webpackChunkName: '12-fact-question-11-endangered-species' */ '../contents/12-fact-question-11-endangered-species.js'),
    {loading: () => <DynamicLoading />}
  ),
  '12-fact-question-12-electricity': dynamic(
    () =>
      import(/* webpackChunkName: '12-fact-question-12-electricity' */ '../contents/12-fact-question-12-electricity.js'),
    {loading: () => <DynamicLoading />}
  ),
  '123-e-coli-bacteria': dynamic(
    () =>
      import(/* webpackChunkName: '123-e-coli-bacteria' */ '../contents/123-e-coli-bacteria.js'),
    {loading: () => <DynamicLoading />}
  ),
  '124-co2-emissions-from-transportation': dynamic(
    () =>
      import(/* webpackChunkName: '124-co2-emissions-from-transportation' */ '../contents/124-co2-emissions-from-transportation.js'),
    {loading: () => <DynamicLoading />}
  ),
  '126-what-part-of-the-line-are-you-seeing': dynamic(
    () =>
      import(/* webpackChunkName: '126-what-part-of-the-line-are-you-seeing' */ '../contents/126-what-part-of-the-line-are-you-seeing.js'),
    {loading: () => <DynamicLoading />}
  ),
  '13-fact-question-13-climate-change': dynamic(
    () =>
      import(/* webpackChunkName: '13-fact-question-13-climate-change' */ '../contents/13-fact-question-13-climate-change.js'),
    {loading: () => <DynamicLoading />}
  ),
  '134-fear-in-polls': dynamic(
    () =>
      import(/* webpackChunkName: '134-fear-in-polls' */ '../contents/134-fear-in-polls.js'),
    {loading: () => <DynamicLoading />}
  ),
  '138-disaster-data': dynamic(
    () =>
      import(/* webpackChunkName: '138-disaster-data' */ '../contents/138-disaster-data.js'),
    {loading: () => <DynamicLoading />}
  ),
  '14-fact-questions-online': dynamic(
    () =>
      import(/* webpackChunkName: '14-fact-questions-online' */ '../contents/14-fact-questions-online.js'),
    {loading: () => <DynamicLoading />}
  ),
  '14-poll-results': dynamic(
    () =>
      import(/* webpackChunkName: '14-poll-results' */ '../contents/14-poll-results.js'),
    {loading: () => <DynamicLoading />}
  ),
  '141-reliefweb': dynamic(
    () =>
      import(/* webpackChunkName: '141-reliefweb' */ '../contents/141-reliefweb.js'),
    {loading: () => <DynamicLoading />}
  ),
  '143-child-deaths-from-diarrhea': dynamic(
    () =>
      import(/* webpackChunkName: '143-child-deaths-from-diarrhea' */ '../contents/143-child-deaths-from-diarrhea.js'),
    {loading: () => <DynamicLoading />}
  ),
  '144-plane-accidents': dynamic(
    () =>
      import(/* webpackChunkName: '144-plane-accidents' */ '../contents/144-plane-accidents.js'),
    {loading: () => <DynamicLoading />}
  ),
  '146-deaths-in-wars': dynamic(
    () =>
      import(/* webpackChunkName: '146-deaths-in-wars' */ '../contents/146-deaths-in-wars.js'),
    {loading: () => <DynamicLoading />}
  ),
  '146-graph-battle-deaths': dynamic(
    () =>
      import(/* webpackChunkName: '146-graph-battle-deaths' */ '../contents/146-graph-battle-deaths.js'),
    {loading: () => <DynamicLoading />}
  ),
  '148-chernobyl': dynamic(
    () =>
      import(/* webpackChunkName: '148-chernobyl' */ '../contents/148-chernobyl.js'),
    {loading: () => <DynamicLoading />}
  ),
  '148-fukushima': dynamic(
    () =>
      import(/* webpackChunkName: '148-fukushima' */ '../contents/148-fukushima.js'),
    {loading: () => <DynamicLoading />}
  ),
  '149-ddt': dynamic(
    () => import(/* webpackChunkName: '149-ddt' */ '../contents/149-ddt.js'),
    {loading: () => <DynamicLoading />}
  ),
  '15-public-awareness-of-climate-change': dynamic(
    () =>
      import(/* webpackChunkName: '15-public-awareness-of-climate-change' */ '../contents/15-public-awareness-of-climate-change.js'),
    {loading: () => <DynamicLoading />}
  ),
  '15-vaccination': dynamic(
    () =>
      import(/* webpackChunkName: '15-vaccination' */ '../contents/15-vaccination.js'),
    {loading: () => <DynamicLoading />}
  ),
  '150-chemophobia': dynamic(
    () =>
      import(/* webpackChunkName: '150-chemophobia' */ '../contents/150-chemophobia.js'),
    {loading: () => <DynamicLoading />}
  ),
  '150-refusing-vaccination': dynamic(
    () =>
      import(/* webpackChunkName: '150-refusing-vaccination' */ '../contents/150-refusing-vaccination.js'),
    {loading: () => <DynamicLoading />}
  ),
  '150-the-environmental-movement': dynamic(
    () =>
      import(/* webpackChunkName: '150-the-environmental-movement' */ '../contents/150-the-environmental-movement.js'),
    {loading: () => <DynamicLoading />}
  ),
  '153-terrorism': dynamic(
    () =>
      import(/* webpackChunkName: '153-terrorism' */ '../contents/153-terrorism.js'),
    {loading: () => <DynamicLoading />}
  ),
  '157-alcohol-deaths': dynamic(
    () =>
      import(/* webpackChunkName: '157-alcohol-deaths' */ '../contents/157-alcohol-deaths.js'),
    {loading: () => <DynamicLoading />}
  ),
  '158-how-many-deaths-make-a-natural-disaster-newsworthy': dynamic(
    () =>
      import(/* webpackChunkName: '158-how-many-deaths-make-a-natural-disaster-newsworthy' */ '../contents/158-how-many-deaths-make-a-natural-disaster-newsworthy.js'),
    {loading: () => <DynamicLoading />}
  ),
  '158-risks-of-dying': dynamic(
    () =>
      import(/* webpackChunkName: '158-risks-of-dying' */ '../contents/158-risks-of-dying.js'),
    {loading: () => <DynamicLoading />}
  ),
  '162-nacala-child-mortality-calculation': dynamic(
    () =>
      import(/* webpackChunkName: '162-nacala-child-mortality-calculation' */ '../contents/162-nacala-child-mortality-calculation.js'),
    {loading: () => <DynamicLoading />}
  ),
  '166-saving-lives': dynamic(
    () =>
      import(/* webpackChunkName: '166-saving-lives' */ '../contents/166-saving-lives.js'),
    {loading: () => <DynamicLoading />}
  ),
  '167-wrong-proportions-perils-of-perception': dynamic(
    () =>
      import(/* webpackChunkName: '167-wrong-proportions-perils-of-perception' */ '../contents/167-wrong-proportions-perils-of-perception.js'),
    {loading: () => <DynamicLoading />}
  ),
  '168-educated-mothers-and-child-survival': dynamic(
    () =>
      import(/* webpackChunkName: '168-educated-mothers-and-child-survival' */ '../contents/168-educated-mothers-and-child-survival.js'),
    {loading: () => <DynamicLoading />}
  ),
  '169-4-2-million': dynamic(
    () =>
      import(/* webpackChunkName: '169-4-2-million' */ '../contents/169-4-2-million.js'),
    {loading: () => <DynamicLoading />}
  ),
  '17-hans-testing-students': dynamic(
    () =>
      import(/* webpackChunkName: '17-hans-testing-students' */ '../contents/17-hans-testing-students.js'),
    {loading: () => <DynamicLoading />}
  ),
  '171-bach-mai-hospital': dynamic(
    () =>
      import(/* webpackChunkName: '171-bach-mai-hospital' */ '../contents/171-bach-mai-hospital.js'),
    {loading: () => <DynamicLoading />}
  ),
  '172-the-vietnam-war': dynamic(
    () =>
      import(/* webpackChunkName: '172-the-vietnam-war' */ '../contents/172-the-vietnam-war.js'),
    {loading: () => <DynamicLoading />}
  ),
  '173-bears-and-axes': dynamic(
    () =>
      import(/* webpackChunkName: '173-bears-and-axes' */ '../contents/173-bears-and-axes.js'),
    {loading: () => <DynamicLoading />}
  ),
  '174-the-spanish-flu': dynamic(
    () =>
      import(/* webpackChunkName: '174-the-spanish-flu' */ '../contents/174-the-spanish-flu.js'),
    {loading: () => <DynamicLoading />}
  ),
  '174-tuberculosis-tb-and-the-swine-flu': dynamic(
    () =>
      import(/* webpackChunkName: '174-tuberculosis-tb-and-the-swine-flu' */ '../contents/174-tuberculosis-tb-and-the-swine-flu.js'),
    {loading: () => <DynamicLoading />}
  ),
  '175-energy-sources': dynamic(
    () =>
      import(/* webpackChunkName: '175-energy-sources' */ '../contents/175-energy-sources.js'),
    {loading: () => <DynamicLoading />}
  ),
  '178-the-world-s-pin-code': dynamic(
    () =>
      import(/* webpackChunkName: '178-the-world-s-pin-code' */ '../contents/178-the-world-s-pin-code.js'),
    {loading: () => <DynamicLoading />}
  ),
  '179-future-consumers': dynamic(
    () =>
      import(/* webpackChunkName: '179-future-consumers' */ '../contents/179-future-consumers.js'),
    {loading: () => <DynamicLoading />}
  ),
  '179-graphs-west-and-rest': dynamic(
    () =>
      import(/* webpackChunkName: '179-graphs-west-and-rest' */ '../contents/179-graphs-west-and-rest.js'),
    {loading: () => <DynamicLoading />}
  ),
  '180-child-mortality-rate': dynamic(
    () =>
      import(/* webpackChunkName: '180-child-mortality-rate' */ '../contents/180-child-mortality-rate.js'),
    {loading: () => <DynamicLoading />}
  ),
  '182-co2-per-capita': dynamic(
    () =>
      import(/* webpackChunkName: '182-co2-per-capita' */ '../contents/182-co2-per-capita.js'),
    {loading: () => <DynamicLoading />}
  ),
  '19-world-economic-forum-lecture': dynamic(
    () =>
      import(/* webpackChunkName: '19-world-economic-forum-lecture' */ '../contents/19-world-economic-forum-lecture.js'),
    {loading: () => <DynamicLoading />}
  ),
  '196-the-cost-of-diabetes': dynamic(
    () =>
      import(/* webpackChunkName: '196-the-cost-of-diabetes' */ '../contents/196-the-cost-of-diabetes.js'),
    {loading: () => <DynamicLoading />}
  ),
  '2-gapminder': dynamic(
    () =>
      import(/* webpackChunkName: '2-gapminder' */ '../contents/2-gapminder.js'),
    {loading: () => <DynamicLoading />}
  ),
  '203-comparing-stoves': dynamic(
    () =>
      import(/* webpackChunkName: '203-comparing-stoves' */ '../contents/203-comparing-stoves.js'),
    {loading: () => <DynamicLoading />}
  ),
  '205-graph-differences-within-africa': dynamic(
    () =>
      import(/* webpackChunkName: '205-graph-differences-within-africa' */ '../contents/205-graph-differences-within-africa.js'),
    {loading: () => <DynamicLoading />}
  ),
  '206-contraceptives-in-sweden': dynamic(
    () =>
      import(/* webpackChunkName: '206-contraceptives-in-sweden' */ '../contents/206-contraceptives-in-sweden.js'),
    {loading: () => <DynamicLoading />}
  ),
  '206-family-planning-needs-met-and-unmet-needs': dynamic(
    () =>
      import(/* webpackChunkName: '206-family-planning-needs-met-and-unmet-needs' */ '../contents/206-family-planning-needs-met-and-unmet-needs.js'),
    {loading: () => <DynamicLoading />}
  ),
  '207-everything-is-made-from-chemicals': dynamic(
    () =>
      import(/* webpackChunkName: '207-everything-is-made-from-chemicals' */ '../contents/207-everything-is-made-from-chemicals.js'),
    {loading: () => <DynamicLoading />}
  ),
  '208-the-salhi-family-on-dollar-street': dynamic(
    () =>
      import(/* webpackChunkName: '208-the-salhi-family-on-dollar-street' */ '../contents/208-the-salhi-family-on-dollar-street.js'),
    {loading: () => <DynamicLoading />}
  ),
  '21-the-ten-instincts-in-cognitive-science': dynamic(
    () =>
      import(/* webpackChunkName: '21-the-ten-instincts-in-cognitive-science' */ '../contents/21-the-ten-instincts-in-cognitive-science.js'),
    {loading: () => <DynamicLoading />}
  ),
  '210-the-recovery-position': dynamic(
    () =>
      import(/* webpackChunkName: '210-the-recovery-position' */ '../contents/210-the-recovery-position.js'),
    {loading: () => <DynamicLoading />}
  ),
  '211-hong-kong-report-on-sids': dynamic(
    () =>
      import(/* webpackChunkName: '211-hong-kong-report-on-sids' */ '../contents/211-hong-kong-report-on-sids.js'),
    {loading: () => <DynamicLoading />}
  ),
  '219-the-sense-of-superiority': dynamic(
    () =>
      import(/* webpackChunkName: '219-the-sense-of-superiority' */ '../contents/219-the-sense-of-superiority.js'),
    {loading: () => <DynamicLoading />}
  ),
  '22-cognitive-biases': dynamic(
    () =>
      import(/* webpackChunkName: '22-cognitive-biases' */ '../contents/22-cognitive-biases.js'),
    {loading: () => <DynamicLoading />}
  ),
  '220-life-expectancy-1970-2016-north-africa-and-western-europe': dynamic(
    () =>
      import(/* webpackChunkName: '220-life-expectancy-1970-2016-north-africa-and-western-europe' */ '../contents/220-life-expectancy-1970-2016-north-africa-and-western-europe.js'),
    {loading: () => <DynamicLoading />}
  ),
  '220-world-health-chart-over-200-years': dynamic(
    () =>
      import(/* webpackChunkName: '220-world-health-chart-over-200-years' */ '../contents/220-world-health-chart-over-200-years.js'),
    {loading: () => <DynamicLoading />}
  ),
  '221-80-years-ago-in-sweden-and-us': dynamic(
    () =>
      import(/* webpackChunkName: '221-80-years-ago-in-sweden-and-us' */ '../contents/221-80-years-ago-in-sweden-and-us.js'),
    {loading: () => <DynamicLoading />}
  ),
  '221-child-mortality-rates-for-sub-saharan-africa-and-sweden': dynamic(
    () =>
      import(/* webpackChunkName: '221-child-mortality-rates-for-sub-saharan-africa-and-sweden' */ '../contents/221-child-mortality-rates-for-sub-saharan-africa-and-sweden.js'),
    {loading: () => <DynamicLoading />}
  ),
  '221-progress-in-china-bangladesh-and-vietnam': dynamic(
    () =>
      import(/* webpackChunkName: '221-progress-in-china-bangladesh-and-vietnam' */ '../contents/221-progress-in-china-bangladesh-and-vietnam.js'),
    {loading: () => <DynamicLoading />}
  ),
  '221-speed-of-improvement-over-the-decades': dynamic(
    () =>
      import(/* webpackChunkName: '221-speed-of-improvement-over-the-decades' */ '../contents/221-speed-of-improvement-over-the-decades.js'),
    {loading: () => <DynamicLoading />}
  ),
  '222-estimates-of-extreme-poverty': dynamic(
    () =>
      import(/* webpackChunkName: '222-estimates-of-extreme-poverty' */ '../contents/222-estimates-of-extreme-poverty.js'),
    {loading: () => <DynamicLoading />}
  ),
  '222-mozambique-and-india': dynamic(
    () =>
      import(/* webpackChunkName: '222-mozambique-and-india' */ '../contents/222-mozambique-and-india.js'),
    {loading: () => <DynamicLoading />}
  ),
  '223-imf-forecasts': dynamic(
    () =>
      import(/* webpackChunkName: '223-imf-forecasts' */ '../contents/223-imf-forecasts.js'),
    {loading: () => <DynamicLoading />}
  ),
  '224-fertility-in-iran': dynamic(
    () =>
      import(/* webpackChunkName: '224-fertility-in-iran' */ '../contents/224-fertility-in-iran.js'),
    {loading: () => <DynamicLoading />}
  ),
  '226-classifying-major-religions': dynamic(
    () =>
      import(/* webpackChunkName: '226-classifying-major-religions' */ '../contents/226-classifying-major-religions.js'),
    {loading: () => <DynamicLoading />}
  ),
  '226-high-income-means-low-fertility': dynamic(
    () =>
      import(/* webpackChunkName: '226-high-income-means-low-fertility' */ '../contents/226-high-income-means-low-fertility.js'),
    {loading: () => <DynamicLoading />}
  ),
  '227-graphs-three-groups-based-on-religion': dynamic(
    () =>
      import(/* webpackChunkName: '227-graphs-three-groups-based-on-religion' */ '../contents/227-graphs-three-groups-based-on-religion.js'),
    {loading: () => <DynamicLoading />}
  ),
  '227-swedish-values-and-rfsu': dynamic(
    () =>
      import(/* webpackChunkName: '227-swedish-values-and-rfsu' */ '../contents/227-swedish-values-and-rfsu.js'),
    {loading: () => <DynamicLoading />}
  ),
  '228-asian-values': dynamic(
    () =>
      import(/* webpackChunkName: '228-asian-values' */ '../contents/228-asian-values.js'),
    {loading: () => <DynamicLoading />}
  ),
  '229-asian-university-for-women-in-bangladesh': dynamic(
    () =>
      import(/* webpackChunkName: '229-asian-university-for-women-in-bangladesh' */ '../contents/229-asian-university-for-women-in-bangladesh.js'),
    {loading: () => <DynamicLoading />}
  ),
  '231-nature-reserves': dynamic(
    () =>
      import(/* webpackChunkName: '231-nature-reserves' */ '../contents/231-nature-reserves.js'),
    {loading: () => <DynamicLoading />}
  ),
  '231-sri-lanka-s-earliest-protected-forest': dynamic(
    () =>
      import(/* webpackChunkName: '231-sri-lanka-s-earliest-protected-forest' */ '../contents/231-sri-lanka-s-earliest-protected-forest.js'),
    {loading: () => <DynamicLoading />}
  ),
  '232-outdated-chimpanzee-questions': dynamic(
    () =>
      import(/* webpackChunkName: '232-outdated-chimpanzee-questions' */ '../contents/232-outdated-chimpanzee-questions.js'),
    {loading: () => <DynamicLoading />}
  ),
  '233-attitudes-toward-same-sex-marriage': dynamic(
    () =>
      import(/* webpackChunkName: '233-attitudes-toward-same-sex-marriage' */ '../contents/233-attitudes-toward-same-sex-marriage.js'),
    {loading: () => <DynamicLoading />}
  ),
  '233-swedish-school-system': dynamic(
    () =>
      import(/* webpackChunkName: '233-swedish-school-system' */ '../contents/233-swedish-school-system.js'),
    {loading: () => <DynamicLoading />}
  ),
  '242-expert-forecasts-the-single-perspective-in-other-books': dynamic(
    () =>
      import(/* webpackChunkName: '242-expert-forecasts-the-single-perspective-in-other-books' */ '../contents/242-expert-forecasts-the-single-perspective-in-other-books.js'),
    {loading: () => <DynamicLoading />}
  ),
  '243-lindau-nobel-laureate-meeting': dynamic(
    () =>
      import(/* webpackChunkName: '243-lindau-nobel-laureate-meeting' */ '../contents/243-lindau-nobel-laureate-meeting.js'),
    {loading: () => <DynamicLoading />}
  ),
  '243-poll-results-from-groups-of-professionals': dynamic(
    () =>
      import(/* webpackChunkName: '243-poll-results-from-groups-of-professionals' */ '../contents/243-poll-results-from-groups-of-professionals.js'),
    {loading: () => <DynamicLoading />}
  ),
  '245-plundered-natural-resources': dynamic(
    () =>
      import(/* webpackChunkName: '245-plundered-natural-resources' */ '../contents/245-plundered-natural-resources.js'),
    {loading: () => <DynamicLoading />}
  ),
  '248-eradicating-one-disease-at-a-time': dynamic(
    () =>
      import(/* webpackChunkName: '248-eradicating-one-disease-at-a-time' */ '../contents/248-eradicating-one-disease-at-a-time.js'),
    {loading: () => <DynamicLoading />}
  ),
  '249-education-needs-electricity': dynamic(
    () =>
      import(/* webpackChunkName: '249-education-needs-electricity' */ '../contents/249-education-needs-electricity.js'),
    {loading: () => <DynamicLoading />}
  ),
  '249-falling-profits-of-big-pharma': dynamic(
    () =>
      import(/* webpackChunkName: '249-falling-profits-of-big-pharma' */ '../contents/249-falling-profits-of-big-pharma.js'),
    {loading: () => <DynamicLoading />}
  ),
  '254-chart-cuba': dynamic(
    () =>
      import(/* webpackChunkName: '254-chart-cuba' */ '../contents/254-chart-cuba.js'),
    {loading: () => <DynamicLoading />}
  ),
  '256-chart-us-health-spendings': dynamic(
    () =>
      import(/* webpackChunkName: '256-chart-us-health-spendings' */ '../contents/256-chart-us-health-spendings.js'),
    {loading: () => <DynamicLoading />}
  ),
  '258-democracy-and-progress': dynamic(
    () =>
      import(/* webpackChunkName: '258-democracy-and-progress' */ '../contents/258-democracy-and-progress.js'),
    {loading: () => <DynamicLoading />}
  ),
  '258-democracy-is-not-the-single-solution': dynamic(
    () =>
      import(/* webpackChunkName: '258-democracy-is-not-the-single-solution' */ '../contents/258-democracy-is-not-the-single-solution.js'),
    {loading: () => <DynamicLoading />}
  ),
  '262-neglected-diseases': dynamic(
    () =>
      import(/* webpackChunkName: '262-neglected-diseases' */ '../contents/262-neglected-diseases.js'),
    {loading: () => <DynamicLoading />}
  ),
  '265-systems-thinking': dynamic(
    () =>
      import(/* webpackChunkName: '265-systems-thinking' */ '../contents/265-systems-thinking.js'),
    {loading: () => <DynamicLoading />}
  ),
  '266-how-unicef-gets-the-lowest-prices': dynamic(
    () =>
      import(/* webpackChunkName: '266-how-unicef-gets-the-lowest-prices' */ '../contents/266-how-unicef-gets-the-lowest-prices.js'),
    {loading: () => <DynamicLoading />}
  ),
  '268-gapminder-s-ignorance-project': dynamic(
    () =>
      import(/* webpackChunkName: '268-gapminder-s-ignorance-project' */ '../contents/268-gapminder-s-ignorance-project.js'),
    {loading: () => <DynamicLoading />}
  ),
  '269-poll-results': dynamic(
    () =>
      import(/* webpackChunkName: '269-poll-results' */ '../contents/269-poll-results.js'),
    {loading: () => <DynamicLoading />}
  ),
  '271-why-refugees-don-t-fly': dynamic(
    () =>
      import(/* webpackChunkName: '271-why-refugees-don-t-fly' */ '../contents/271-why-refugees-don-t-fly.js'),
    {loading: () => <DynamicLoading />}
  ),
  '274-co2-emissions-by-income': dynamic(
    () =>
      import(/* webpackChunkName: '274-co2-emissions-by-income' */ '../contents/274-co2-emissions-by-income.js'),
    {loading: () => <DynamicLoading />}
  ),
  '275-syphilis': dynamic(
    () =>
      import(/* webpackChunkName: '275-syphilis' */ '../contents/275-syphilis.js'),
    {loading: () => <DynamicLoading />}
  ),
  '276-1-billion-people-and-mao': dynamic(
    () =>
      import(/* webpackChunkName: '276-1-billion-people-and-mao' */ '../contents/276-1-billion-people-and-mao.js'),
    {loading: () => <DynamicLoading />}
  ),
  '276-falling-birth-rates-and-powerful-leaders': dynamic(
    () =>
      import(/* webpackChunkName: '276-falling-birth-rates-and-powerful-leaders' */ '../contents/276-falling-birth-rates-and-powerful-leaders.js'),
    {loading: () => <DynamicLoading />}
  ),
  '276-family-planning-contraceptive-usage-by-catholics': dynamic(
    () =>
      import(/* webpackChunkName: '276-family-planning-contraceptive-usage-by-catholics' */ '../contents/276-family-planning-contraceptive-usage-by-catholics.js'),
    {loading: () => <DynamicLoading />}
  ),
  '278-access-to-safe-abortion': dynamic(
    () =>
      import(/* webpackChunkName: '278-access-to-safe-abortion' */ '../contents/278-access-to-safe-abortion.js'),
    {loading: () => <DynamicLoading />}
  ),
  '279-institutions': dynamic(
    () =>
      import(/* webpackChunkName: '279-institutions' */ '../contents/279-institutions.js'),
    {loading: () => <DynamicLoading />}
  ),
  '279-the-governmental-employees-who-saved-the-world-from-ebola': dynamic(
    () =>
      import(/* webpackChunkName: '279-the-governmental-employees-who-saved-the-world-from-ebola' */ '../contents/279-the-governmental-employees-who-saved-the-world-from-ebola.js'),
    {loading: () => <DynamicLoading />}
  ),
  '28-child-mortality-in-1995-and-2017': dynamic(
    () =>
      import(/* webpackChunkName: '28-child-mortality-in-1995-and-2017' */ '../contents/28-child-mortality-in-1995-and-2017.js'),
    {loading: () => <DynamicLoading />}
  ),
  '280-thank-you-industrial-revolution': dynamic(
    () =>
      import(/* webpackChunkName: '280-thank-you-industrial-revolution' */ '../contents/280-thank-you-industrial-revolution.js'),
    {loading: () => <DynamicLoading />}
  ),
  '286-konzo': dynamic(
    () =>
      import(/* webpackChunkName: '286-konzo' */ '../contents/286-konzo.js'),
    {loading: () => <DynamicLoading />}
  ),
  '288-roadblocks': dynamic(
    () =>
      import(/* webpackChunkName: '288-roadblocks' */ '../contents/288-roadblocks.js'),
    {loading: () => <DynamicLoading />}
  ),
  '290-now-or-never': dynamic(
    () =>
      import(/* webpackChunkName: '290-now-or-never' */ '../contents/290-now-or-never.js'),
    {loading: () => <DynamicLoading />}
  ),
  '290-the-urgency-instinct-in-other-books': dynamic(
    () =>
      import(/* webpackChunkName: '290-the-urgency-instinct-in-other-books' */ '../contents/290-the-urgency-instinct-in-other-books.js'),
    {loading: () => <DynamicLoading />}
  ),
  '295-the-melting-ice-cap': dynamic(
    () =>
      import(/* webpackChunkName: '295-the-melting-ice-cap' */ '../contents/295-the-melting-ice-cap.js'),
    {loading: () => <DynamicLoading />}
  ),
  '296-fresh-numbers-for-gdp-and-co2': dynamic(
    () =>
      import(/* webpackChunkName: '296-fresh-numbers-for-gdp-and-co2' */ '../contents/296-fresh-numbers-for-gdp-and-co2.js'),
    {loading: () => <DynamicLoading />}
  ),
  '297-climate-reductionism-and-catastrophizing': dynamic(
    () =>
      import(/* webpackChunkName: '297-climate-reductionism-and-catastrophizing' */ '../contents/297-climate-reductionism-and-catastrophizing.js'),
    {loading: () => <DynamicLoading />}
  ),
  '297-climate-refugees': dynamic(
    () =>
      import(/* webpackChunkName: '297-climate-refugees' */ '../contents/297-climate-refugees.js'),
    {loading: () => <DynamicLoading />}
  ),
  '298-ebola': dynamic(
    () =>
      import(/* webpackChunkName: '298-ebola' */ '../contents/298-ebola.js'),
    {loading: () => <DynamicLoading />}
  ),
  '30-improvements-in-sweden-and-saudi-arabia': dynamic(
    () =>
      import(/* webpackChunkName: '30-improvements-in-sweden-and-saudi-arabia' */ '../contents/30-improvements-in-sweden-and-saudi-arabia.js'),
    {loading: () => <DynamicLoading />}
  ),
  '302-the-risk-of-global-pandemic': dynamic(
    () =>
      import(/* webpackChunkName: '302-the-risk-of-global-pandemic' */ '../contents/302-the-risk-of-global-pandemic.js'),
    {loading: () => <DynamicLoading />}
  ),
  '303-the-risk-of-financial-collapse': dynamic(
    () =>
      import(/* webpackChunkName: '303-the-risk-of-financial-collapse' */ '../contents/303-the-risk-of-financial-collapse.js'),
    {loading: () => <DynamicLoading />}
  ),
  '303-the-risk-of-world-war-iii': dynamic(
    () =>
      import(/* webpackChunkName: '303-the-risk-of-world-war-iii' */ '../contents/303-the-risk-of-world-war-iii.js'),
    {loading: () => <DynamicLoading />}
  ),
  '304-the-risk-of-climate-change-and-plundering-of-natural-resources': dynamic(
    () =>
      import(/* webpackChunkName: '304-the-risk-of-climate-change-and-plundering-of-natural-resources' */ '../contents/304-the-risk-of-climate-change-and-plundering-of-natural-resources.js'),
    {loading: () => <DynamicLoading />}
  ),
  '305-the-risk-of-extreme-poverty': dynamic(
    () =>
      import(/* webpackChunkName: '305-the-risk-of-extreme-poverty' */ '../contents/305-the-risk-of-extreme-poverty.js'),
    {loading: () => <DynamicLoading />}
  ),
  '315-teachers': dynamic(
    () =>
      import(/* webpackChunkName: '315-teachers' */ '../contents/315-teachers.js'),
    {loading: () => <DynamicLoading />}
  ),
  '318-business': dynamic(
    () =>
      import(/* webpackChunkName: '318-business' */ '../contents/318-business.js'),
    {loading: () => <DynamicLoading />}
  ),
  '319-diversified-economies': dynamic(
    () =>
      import(/* webpackChunkName: '319-diversified-economies' */ '../contents/319-diversified-economies.js'),
    {loading: () => <DynamicLoading />}
  ),
  '320-speling-miskates': dynamic(
    () =>
      import(/* webpackChunkName: '320-speling-miskates' */ '../contents/320-speling-miskates.js'),
    {loading: () => <DynamicLoading />}
  ),
  '321-constructive-news': dynamic(
    () =>
      import(/* webpackChunkName: '321-constructive-news' */ '../contents/321-constructive-news.js'),
    {loading: () => <DynamicLoading />}
  ),
  '322-local-ignorance-and-data': dynamic(
    () =>
      import(/* webpackChunkName: '322-local-ignorance-and-data' */ '../contents/322-local-ignorance-and-data.js'),
    {loading: () => <DynamicLoading />}
  ),
  '35-graph-the-world-in-1965': dynamic(
    () =>
      import(/* webpackChunkName: '35-graph-the-world-in-1965' */ '../contents/35-graph-the-world-in-1965.js'),
    {loading: () => <DynamicLoading />}
  ),
  '37-graph-the-world-in-2017': dynamic(
    () =>
      import(/* webpackChunkName: '37-graph-the-world-in-2017' */ '../contents/37-graph-the-world-in-2017.js'),
    {loading: () => <DynamicLoading />}
  ),
  '38-danish-tv-interview': dynamic(
    () =>
      import(/* webpackChunkName: '38-danish-tv-interview' */ '../contents/38-danish-tv-interview.js'),
    {loading: () => <DynamicLoading />}
  ),
  '40-primary-school-completion-rate': dynamic(
    () =>
      import(/* webpackChunkName: '40-primary-school-completion-rate' */ '../contents/40-primary-school-completion-rate.js'),
    {loading: () => <DynamicLoading />}
  ),
  '41-polls-imagining-the-worst': dynamic(
    () =>
      import(/* webpackChunkName: '41-polls-imagining-the-worst' */ '../contents/41-polls-imagining-the-worst.js'),
    {loading: () => <DynamicLoading />}
  ),
  '42-how-many-live-in-low-income-countries': dynamic(
    () =>
      import(/* webpackChunkName: '42-how-many-live-in-low-income-countries' */ '../contents/42-how-many-live-in-low-income-countries.js'),
    {loading: () => <DynamicLoading />}
  ),
  '42-where-75-of-humanity-lives': dynamic(
    () =>
      import(/* webpackChunkName: '42-where-75-of-humanity-lives' */ '../contents/42-where-75-of-humanity-lives.js'),
    {loading: () => <DynamicLoading />}
  ),
  '45-doubling-scales': dynamic(
    () =>
      import(/* webpackChunkName: '45-doubling-scales' */ '../contents/45-doubling-scales.js'),
    {loading: () => <DynamicLoading />}
  ),
  '45-graph-four-income-levels': dynamic(
    () =>
      import(/* webpackChunkName: '45-graph-four-income-levels' */ '../contents/45-graph-four-income-levels.js'),
    {loading: () => <DynamicLoading />}
  ),
  '46-air-pollution': dynamic(
    () =>
      import(/* webpackChunkName: '46-air-pollution' */ '../contents/46-air-pollution.js'),
    {loading: () => <DynamicLoading />}
  ),
  '46-average-family-size-on-level-1': dynamic(
    () =>
      import(/* webpackChunkName: '46-average-family-size-on-level-1' */ '../contents/46-average-family-size-on-level-1.js'),
    {loading: () => <DynamicLoading />}
  ),
  '46-children-working-in-the-household': dynamic(
    () =>
      import(/* webpackChunkName: '46-children-working-in-the-household' */ '../contents/46-children-working-in-the-household.js'),
    {loading: () => <DynamicLoading />}
  ),
  '46-people-on-level-1': dynamic(
    () =>
      import(/* webpackChunkName: '46-people-on-level-1' */ '../contents/46-people-on-level-1.js'),
    {loading: () => <DynamicLoading />}
  ),
  '47-cost-of-illness-on-level-2': dynamic(
    () =>
      import(/* webpackChunkName: '47-cost-of-illness-on-level-2' */ '../contents/47-cost-of-illness-on-level-2.js'),
    {loading: () => <DynamicLoading />}
  ),
  '47-fridges-and-food-on-level-2': dynamic(
    () =>
      import(/* webpackChunkName: '47-fridges-and-food-on-level-2' */ '../contents/47-fridges-and-food-on-level-2.js'),
    {loading: () => <DynamicLoading />}
  ),
  '47-work-in-a-garment-factory': dynamic(
    () =>
      import(/* webpackChunkName: '47-work-in-a-garment-factory' */ '../contents/47-work-in-a-garment-factory.js'),
    {loading: () => <DynamicLoading />}
  ),
  '48-traffic-accidents-on-level-3': dynamic(
    () =>
      import(/* webpackChunkName: '48-traffic-accidents-on-level-3' */ '../contents/48-traffic-accidents-on-level-3.js'),
    {loading: () => <DynamicLoading />}
  ),
  '49-books-on-level-4': dynamic(
    () =>
      import(/* webpackChunkName: '49-books-on-level-4' */ '../contents/49-books-on-level-4.js'),
    {loading: () => <DynamicLoading />}
  ),
  '49-education-on-level-4': dynamic(
    () =>
      import(/* webpackChunkName: '49-education-on-level-4' */ '../contents/49-education-on-level-4.js'),
    {loading: () => <DynamicLoading />}
  ),
  '49-travel-and-vacation-on-level-4': dynamic(
    () =>
      import(/* webpackChunkName: '49-travel-and-vacation-on-level-4' */ '../contents/49-travel-and-vacation-on-level-4.js'),
    {loading: () => <DynamicLoading />}
  ),
  '50-developing-countries-in-other-organizations': dynamic(
    () =>
      import(/* webpackChunkName: '50-developing-countries-in-other-organizations' */ '../contents/50-developing-countries-in-other-organizations.js'),
    {loading: () => <DynamicLoading />}
  ),
  '50-historic-poverty-rate': dynamic(
    () =>
      import(/* webpackChunkName: '50-historic-poverty-rate' */ '../contents/50-historic-poverty-rate.js'),
    {loading: () => <DynamicLoading />}
  ),
  '50-incomes-in-western-europe-and-the-us-in-the-1950s': dynamic(
    () =>
      import(/* webpackChunkName: '50-incomes-in-western-europe-and-the-us-in-the-1950s' */ '../contents/50-incomes-in-western-europe-and-the-us-in-the-1950s.js'),
    {loading: () => <DynamicLoading />}
  ),
  '50-outdated-terminology-and-the-world-bank': dynamic(
    () =>
      import(/* webpackChunkName: '50-outdated-terminology-and-the-world-bank' */ '../contents/50-outdated-terminology-and-the-world-bank.js'),
    {loading: () => <DynamicLoading />}
  ),
  '52-graphs-incomes-in-mexico-us': dynamic(
    () =>
      import(/* webpackChunkName: '52-graphs-incomes-in-mexico-us' */ '../contents/52-graphs-incomes-in-mexico-us.js'),
    {loading: () => <DynamicLoading />}
  ),
  '52-math-scores': dynamic(
    () =>
      import(/* webpackChunkName: '52-math-scores' */ '../contents/52-math-scores.js'),
    {loading: () => <DynamicLoading />}
  ),
  '54-in-apartheid-south-africa': dynamic(
    () =>
      import(/* webpackChunkName: '54-in-apartheid-south-africa' */ '../contents/54-in-apartheid-south-africa.js'),
    {loading: () => <DynamicLoading />}
  ),
  '54-overlapping-spreads': dynamic(
    () =>
      import(/* webpackChunkName: '54-overlapping-spreads' */ '../contents/54-overlapping-spreads.js'),
    {loading: () => <DynamicLoading />}
  ),
  '55-brazilian-income-inequality': dynamic(
    () =>
      import(/* webpackChunkName: '55-brazilian-income-inequality' */ '../contents/55-brazilian-income-inequality.js'),
    {loading: () => <DynamicLoading />}
  ),
  '57-poverty-and-extreme-poverty': dynamic(
    () =>
      import(/* webpackChunkName: '57-poverty-and-extreme-poverty' */ '../contents/57-poverty-and-extreme-poverty.js'),
    {loading: () => <DynamicLoading />}
  ),
  '58-levels-of-poverty': dynamic(
    () =>
      import(/* webpackChunkName: '58-levels-of-poverty' */ '../contents/58-levels-of-poverty.js'),
    {loading: () => <DynamicLoading />}
  ),
  '6-x-ray': dynamic(
    () => import(/* webpackChunkName: '6-x-ray' */ '../contents/6-x-ray.js'),
    {loading: () => <DynamicLoading />}
  ),
  '62-living-conditions-in-1950s-sweden': dynamic(
    () =>
      import(/* webpackChunkName: '62-living-conditions-in-1950s-sweden' */ '../contents/62-living-conditions-in-1950s-sweden.js'),
    {loading: () => <DynamicLoading />}
  ),
  '63-sea-levels': dynamic(
    () =>
      import(/* webpackChunkName: '63-sea-levels' */ '../contents/63-sea-levels.js'),
    {loading: () => <DynamicLoading />}
  ),
  '63-terrorism-on-the-rise': dynamic(
    () =>
      import(/* webpackChunkName: '63-terrorism-on-the-rise' */ '../contents/63-terrorism-on-the-rise.js'),
    {loading: () => <DynamicLoading />}
  ),
  '63-the-state-of-world-fisheries': dynamic(
    () =>
      import(/* webpackChunkName: '63-the-state-of-world-fisheries' */ '../contents/63-the-state-of-world-fisheries.js'),
    {loading: () => <DynamicLoading />}
  ),
  '64-graph-better-worse-or-about-the-same': dynamic(
    () =>
      import(/* webpackChunkName: '64-graph-better-worse-or-about-the-same' */ '../contents/64-graph-better-worse-or-about-the-same.js'),
    {loading: () => <DynamicLoading />}
  ),
  '64-when-to-trust-the-data': dynamic(
    () =>
      import(/* webpackChunkName: '64-when-to-trust-the-data' */ '../contents/64-when-to-trust-the-data.js'),
    {loading: () => <DynamicLoading />}
  ),
  '67-19th-century-living-conditions': dynamic(
    () =>
      import(/* webpackChunkName: '67-19th-century-living-conditions' */ '../contents/67-19th-century-living-conditions.js'),
    {loading: () => <DynamicLoading />}
  ),
  '67-dip-in-extreme-poverty-china-india-and-latin-america': dynamic(
    () =>
      import(/* webpackChunkName: '67-dip-in-extreme-poverty-china-india-and-latin-america' */ '../contents/67-dip-in-extreme-poverty-china-india-and-latin-america.js'),
    {loading: () => <DynamicLoading />}
  ),
  '68-graph-extreme-poverty-rate': dynamic(
    () =>
      import(/* webpackChunkName: '68-graph-extreme-poverty-rate' */ '../contents/68-graph-extreme-poverty-rate.js'),
    {loading: () => <DynamicLoading />}
  ),
  '69-fact-question-4-life-expectancy': dynamic(
    () =>
      import(/* webpackChunkName: '69-fact-question-4-life-expectancy' */ '../contents/69-fact-question-4-life-expectancy.js'),
    {loading: () => <DynamicLoading />}
  ),
  '69-historic-child-mortality': dynamic(
    () =>
      import(/* webpackChunkName: '69-historic-child-mortality' */ '../contents/69-historic-child-mortality.js'),
    {loading: () => <DynamicLoading />}
  ),
  '69-life-expectancy-and-data-doubt': dynamic(
    () =>
      import(/* webpackChunkName: '69-life-expectancy-and-data-doubt' */ '../contents/69-life-expectancy-and-data-doubt.js'),
    {loading: () => <DynamicLoading />}
  ),
  '70-deaths-from-starvation-in-ethiopia': dynamic(
    () =>
      import(/* webpackChunkName: '70-deaths-from-starvation-in-ethiopia' */ '../contents/70-deaths-from-starvation-in-ethiopia.js'),
    {loading: () => <DynamicLoading />}
  ),
  '71-graph-average-life-expectancy-from-1800-to-today': dynamic(
    () =>
      import(/* webpackChunkName: '71-graph-average-life-expectancy-from-1800-to-today' */ '../contents/71-graph-average-life-expectancy-from-1800-to-today.js'),
    {loading: () => <DynamicLoading />}
  ),
  '72-swedes-living-on-level-4': dynamic(
    () =>
      import(/* webpackChunkName: '72-swedes-living-on-level-4' */ '../contents/72-swedes-living-on-level-4.js'),
    {loading: () => <DynamicLoading />}
  ),
  '72-world-food-programme': dynamic(
    () =>
      import(/* webpackChunkName: '72-world-food-programme' */ '../contents/72-world-food-programme.js'),
    {loading: () => <DynamicLoading />}
  ),
  '73-graph-catching-up-with-sweden': dynamic(
    () =>
      import(/* webpackChunkName: '73-graph-catching-up-with-sweden' */ '../contents/73-graph-catching-up-with-sweden.js'),
    {loading: () => <DynamicLoading />}
  ),
  '74-not-uncommon-for-children-to-drown': dynamic(
    () =>
      import(/* webpackChunkName: '74-not-uncommon-for-children-to-drown' */ '../contents/74-not-uncommon-for-children-to-drown.js'),
    {loading: () => <DynamicLoading />}
  ),
  '75-citizens-of-lesotho': dynamic(
    () =>
      import(/* webpackChunkName: '75-citizens-of-lesotho' */ '../contents/75-citizens-of-lesotho.js'),
    {loading: () => <DynamicLoading />}
  ),
  '75-life-expectancy-in-lesotho-and-uncertainty-of-data': dynamic(
    () =>
      import(/* webpackChunkName: '75-life-expectancy-in-lesotho-and-uncertainty-of-data' */ '../contents/75-life-expectancy-in-lesotho-and-uncertainty-of-data.js'),
    {loading: () => <DynamicLoading />}
  ),
  '75-literacy-in-sweden-and-india': dynamic(
    () =>
      import(/* webpackChunkName: '75-literacy-in-sweden-and-india' */ '../contents/75-literacy-in-sweden-and-india.js'),
    {loading: () => <DynamicLoading />}
  ),
  '76-vaccination-on-level-1': dynamic(
    () =>
      import(/* webpackChunkName: '76-vaccination-on-level-1' */ '../contents/76-vaccination-on-level-1.js'),
    {loading: () => <DynamicLoading />}
  ),
  '78-graph-child-mortality': dynamic(
    () =>
      import(/* webpackChunkName: '78-graph-child-mortality' */ '../contents/78-graph-child-mortality.js'),
    {loading: () => <DynamicLoading />}
  ),
  '78-graph-death-penalty': dynamic(
    () =>
      import(/* webpackChunkName: '78-graph-death-penalty' */ '../contents/78-graph-death-penalty.js'),
    {loading: () => <DynamicLoading />}
  ),
  '78-graph-leaded-gasoline': dynamic(
    () =>
      import(/* webpackChunkName: '78-graph-leaded-gasoline' */ '../contents/78-graph-leaded-gasoline.js'),
    {loading: () => <DynamicLoading />}
  ),
  '78-graph-legal-slavery': dynamic(
    () =>
      import(/* webpackChunkName: '78-graph-legal-slavery' */ '../contents/78-graph-legal-slavery.js'),
    {loading: () => <DynamicLoading />}
  ),
  '78-graph-oil-spills': dynamic(
    () =>
      import(/* webpackChunkName: '78-graph-oil-spills' */ '../contents/78-graph-oil-spills.js'),
    {loading: () => <DynamicLoading />}
  ),
  '79-graph-child-labor': dynamic(
    () =>
      import(/* webpackChunkName: '79-graph-child-labor' */ '../contents/79-graph-child-labor.js'),
    {loading: () => <DynamicLoading />}
  ),
  '79-graph-deaths-from-disaster': dynamic(
    () =>
      import(/* webpackChunkName: '79-graph-deaths-from-disaster' */ '../contents/79-graph-deaths-from-disaster.js'),
    {loading: () => <DynamicLoading />}
  ),
  '79-graph-nuclear-arms': dynamic(
    () =>
      import(/* webpackChunkName: '79-graph-nuclear-arms' */ '../contents/79-graph-nuclear-arms.js'),
    {loading: () => <DynamicLoading />}
  ),
  '79-graph-ozone-depletion': dynamic(
    () =>
      import(/* webpackChunkName: '79-graph-ozone-depletion' */ '../contents/79-graph-ozone-depletion.js'),
    {loading: () => <DynamicLoading />}
  ),
  '79-graph-smallpox': dynamic(
    () =>
      import(/* webpackChunkName: '79-graph-smallpox' */ '../contents/79-graph-smallpox.js'),
    {loading: () => <DynamicLoading />}
  ),
  '8-hans-s-sword-swallowing': dynamic(
    () =>
      import(/* webpackChunkName: '8-hans-s-sword-swallowing' */ '../contents/8-hans-s-sword-swallowing.js'),
    {loading: () => <DynamicLoading />}
  ),
  '80-graph-democracy': dynamic(
    () =>
      import(/* webpackChunkName: '80-graph-democracy' */ '../contents/80-graph-democracy.js'),
    {loading: () => <DynamicLoading />}
  ),
  '80-graph-harvest': dynamic(
    () =>
      import(/* webpackChunkName: '80-graph-harvest' */ '../contents/80-graph-harvest.js'),
    {loading: () => <DynamicLoading />}
  ),
  '80-graph-literacy': dynamic(
    () =>
      import(/* webpackChunkName: '80-graph-literacy' */ '../contents/80-graph-literacy.js'),
    {loading: () => <DynamicLoading />}
  ),
  '80-graph-new-movies': dynamic(
    () =>
      import(/* webpackChunkName: '80-graph-new-movies' */ '../contents/80-graph-new-movies.js'),
    {loading: () => <DynamicLoading />}
  ),
  '80-graph-new-music': dynamic(
    () =>
      import(/* webpackChunkName: '80-graph-new-music' */ '../contents/80-graph-new-music.js'),
    {loading: () => <DynamicLoading />}
  ),
  '80-graph-protected-nature': dynamic(
    () =>
      import(/* webpackChunkName: '80-graph-protected-nature' */ '../contents/80-graph-protected-nature.js'),
    {loading: () => <DynamicLoading />}
  ),
  '80-graph-science': dynamic(
    () =>
      import(/* webpackChunkName: '80-graph-science' */ '../contents/80-graph-science.js'),
    {loading: () => <DynamicLoading />}
  ),
  '80-graph-women-s-right-to-vote': dynamic(
    () =>
      import(/* webpackChunkName: '80-graph-women-s-right-to-vote' */ '../contents/80-graph-women-s-right-to-vote.js'),
    {loading: () => <DynamicLoading />}
  ),
  '81-graph-child-cancer-survival': dynamic(
    () =>
      import(/* webpackChunkName: '81-graph-child-cancer-survival' */ '../contents/81-graph-child-cancer-survival.js'),
    {loading: () => <DynamicLoading />}
  ),
  '81-graph-electricity-coverage': dynamic(
    () =>
      import(/* webpackChunkName: '81-graph-electricity-coverage' */ '../contents/81-graph-electricity-coverage.js'),
    {loading: () => <DynamicLoading />}
  ),
  '81-graph-girls-in-school': dynamic(
    () =>
      import(/* webpackChunkName: '81-graph-girls-in-school' */ '../contents/81-graph-girls-in-school.js'),
    {loading: () => <DynamicLoading />}
  ),
  '81-graph-immunization': dynamic(
    () =>
      import(/* webpackChunkName: '81-graph-immunization' */ '../contents/81-graph-immunization.js'),
    {loading: () => <DynamicLoading />}
  ),
  '81-graph-internet': dynamic(
    () =>
      import(/* webpackChunkName: '81-graph-internet' */ '../contents/81-graph-internet.js'),
    {loading: () => <DynamicLoading />}
  ),
  '81-graph-mobile-phones': dynamic(
    () =>
      import(/* webpackChunkName: '81-graph-mobile-phones' */ '../contents/81-graph-mobile-phones.js'),
    {loading: () => <DynamicLoading />}
  ),
  '81-graph-monitored-species': dynamic(
    () =>
      import(/* webpackChunkName: '81-graph-monitored-species' */ '../contents/81-graph-monitored-species.js'),
    {loading: () => <DynamicLoading />}
  ),
  '82-graph-guitars-per-capita': dynamic(
    () =>
      import(/* webpackChunkName: '82-graph-guitars-per-capita' */ '../contents/82-graph-guitars-per-capita.js'),
    {loading: () => <DynamicLoading />}
  ),
  '84-ancient-graveyards-and-burial-sites': dynamic(
    () =>
      import(/* webpackChunkName: '84-ancient-graveyards-and-burial-sites' */ '../contents/84-ancient-graveyards-and-burial-sites.js'),
    {loading: () => <DynamicLoading />}
  ),
  '84-causes-of-death-in-human-history': dynamic(
    () =>
      import(/* webpackChunkName: '84-causes-of-death-in-human-history' */ '../contents/84-causes-of-death-in-human-history.js'),
    {loading: () => <DynamicLoading />}
  ),
  '84-historic-child-murders': dynamic(
    () =>
      import(/* webpackChunkName: '84-historic-child-murders' */ '../contents/84-historic-child-murders.js'),
    {loading: () => <DynamicLoading />}
  ),
  '88-educating-girls': dynamic(
    () =>
      import(/* webpackChunkName: '88-educating-girls' */ '../contents/88-educating-girls.js'),
    {loading: () => <DynamicLoading />}
  ),
  '9-fact-question-1-girls-in-school-in-low-income-countries': dynamic(
    () =>
      import(/* webpackChunkName: '9-fact-question-1-girls-in-school-in-low-income-countries' */ '../contents/9-fact-question-1-girls-in-school-in-low-income-countries.js'),
    {loading: () => <DynamicLoading />}
  ),
  '9-fact-question-2-where-the-majority-lives': dynamic(
    () =>
      import(/* webpackChunkName: '9-fact-question-2-where-the-majority-lives' */ '../contents/9-fact-question-2-where-the-majority-lives.js'),
    {loading: () => <DynamicLoading />}
  ),
  '9-fact-question-3-extreme-poverty': dynamic(
    () =>
      import(/* webpackChunkName: '9-fact-question-3-extreme-poverty' */ '../contents/9-fact-question-3-extreme-poverty.js'),
    {loading: () => <DynamicLoading />}
  ),
  '93-drownings': dynamic(
    () =>
      import(/* webpackChunkName: '93-drownings' */ '../contents/93-drownings.js'),
    {loading: () => <DynamicLoading />}
  ),
  '98-ebola': dynamic(
    () => import(/* webpackChunkName: '98-ebola' */ '../contents/98-ebola.js'),
    {loading: () => <DynamicLoading />}
  ),
  '98-lord-krishna-s-chessboard': dynamic(
    () =>
      import(/* webpackChunkName: '98-lord-krishna-s-chessboard' */ '../contents/98-lord-krishna-s-chessboard.js'),
    {loading: () => <DynamicLoading />}
  ),
  'country-names': dynamic(
    () =>
      import(/* webpackChunkName: 'country-names' */ '../contents/country-names.js'),
    {loading: () => <DynamicLoading />}
  ),
  'data-for-2017': dynamic(
    () =>
      import(/* webpackChunkName: 'data-for-2017' */ '../contents/data-for-2017.js'),
    {loading: () => <DynamicLoading />}
  ),
  'errata-1': dynamic(
    () => import(/* webpackChunkName: 'errata-1' */ '../contents/errata-1.js'),
    {loading: () => <DynamicLoading />}
  ),
  'final-note': dynamic(
    () =>
      import(/* webpackChunkName: 'final-note' */ '../contents/final-note.js'),
    {loading: () => <DynamicLoading />}
  ),
  'inside-end-cover': dynamic(
    () =>
      import(/* webpackChunkName: 'inside-end-cover' */ '../contents/inside-end-cover.js'),
    {loading: () => <DynamicLoading />}
  ),
  'inside-front-cover': dynamic(
    () =>
      import(/* webpackChunkName: 'inside-front-cover' */ '../contents/inside-front-cover.js'),
    {loading: () => <DynamicLoading />}
  )
}
