import problems from './problems'

const process = ({jpPage, enTitle, ...rest}) => ({
  jpPage,
  enTitle,
  ...rest,
  permalink: [
    Array.isArray(jpPage) ? jpPage[0] : jpPage,
    enTitle
      .replace(/\W/g, '-')
      .replace(/-+/g, '-')
      .replace(/(^-|-$)/g, '')
      .toLowerCase()
  ].join('-')
})

// For debugging
const pagedSourcesSliceBegin = 0
const pagedSourcesSliceEnd = 50

export const pagedSources = [
  {
    chapter: 'はじめに',
    jpPage: 2,
    enPage: 'ix',
    enTitle: `Gapminder`,
    jpTitle: `ギャップマインダー財団`
  },
  {
    chapter: 'イントロダクション',
    jpPage: [6, 7],
    enPage: 1,
    enTitle: `X-ray`,
    jpTitle: `レントゲン`
  },
  {
    chapter: 'イントロダクション',
    jpPage: 8,
    enPage: 2,
    enTitle: `Hans's sword swallowing`,
    jpTitle: `ハンスの剣飲みの芸`
  },
  {
    chapter: 'イントロダクション',
    jpPage: 9,
    enPage: 3,
    enTitle: `Fact question 1: Girls in school in low-income countries`,
    jpTitle: `質問1: ${problems[0].short}`,
    seeMoreId: 'q1'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 9,
    enPage: 3,
    enTitle: `Fact Question 2: Where the Majority Lives`,
    jpTitle: `質問2: ${problems[1].short}`,
    seeMoreId: 'q2'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 9,
    enPage: 3,
    enTitle: `Fact Question 3: Extreme Poverty`,
    jpTitle: `質問3: ${problems[2].short}`,
    seeMoreId: 'q3'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 10,
    enPage: 3,
    enTitle: `Fact Question 4: Life Expectancy`,
    jpTitle: `質問4: ${problems[3].short}`,
    seeMoreId: 'q4'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 10,
    enPage: 4,
    enTitle: `Fact Question 5: Future Number of Children`,
    jpTitle: `質問5: ${problems[4].short}`,
    seeMoreId: 'q5'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 10,
    enPage: 4,
    enTitle: `Fact Question 6: Why is the Population Increasing?`,
    jpTitle: `質問6: ${problems[5].short}`,
    seeMoreId: 'q6'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 11,
    enPage: 4,
    enTitle: `Fact Question 7: Natural Disasters`,
    jpTitle: `質問7: ${problems[6].short}`,
    seeMoreId: 'q7'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 11,
    enPage: 4,
    enTitle: `Fact Question 8: Where People Live`,
    jpTitle: `質問8: ${problems[7].short}`,
    seeMoreId: 'q8'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 11,
    enPage: 4,
    enTitle: `Fact question 9: Vaccination`,
    jpTitle: `質問9: ${problems[8].short}`,
    seeMoreId: 'q9'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 12,
    enPage: 5,
    enTitle: `Fact Question 10: Women's Education`,
    jpTitle: `質問10: ${problems[9].short}`,
    seeMoreId: 'q10'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 12,
    enPage: 5,
    enTitle: `Fact Question 11: Endangered Species`,
    jpTitle: `質問11: ${problems[10].short}`,
    seeMoreId: 'q11'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 12,
    enPage: 5,
    enTitle: `Fact Question 12: Electricity`,
    jpTitle: `質問12: ${problems[11].short}`,
    seeMoreId: 'q12'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 13,
    enPage: 5,
    enTitle: `Fact Question 13: Climate Change`,
    jpTitle: `質問13: ${problems[12].short}`,
    seeMoreId: 'q13'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 14,
    enPage: 7,
    enTitle: `Fact questions online`,
    jpTitle: `チンパンジークイズ`
  },
  {
    chapter: 'イントロダクション',
    jpPage: [14, 15],
    enPage: [7, 8, 'Appendix'],
    enTitle: `Poll results`,
    jpTitle: `調査結果`
  },
  {
    chapter: 'イントロダクション',
    jpPage: 15,
    enPage: [7, 8],
    enTitle: `Vaccination`,
    jpTitle: `予防接種`,
    seeMoreId: 'tvac'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 15,
    enPage: 8,
    enTitle: `Public awareness of climate change`,
    jpTitle: `Public awareness of climate change`
  },
  {
    chapter: 'イントロダクション',
    jpPage: 17,
    enPage: 10,
    enTitle: `Hans testing students`,
    jpTitle: `Hans testing students`,
    seeMoreId: 'xtedros'
  },
  {
    chapter: 'イントロダクション',
    jpPage: [19, 20],
    enPage: 12,
    enTitle: `World Economic Forum lecture`,
    jpTitle: `世界経済フォーラムでの基調講演`
  },
  {
    chapter: 'イントロダクション',
    jpPage: 21,
    enPage: 13,
    enTitle: `The Ten Instincts in Cognitive Science`,
    jpTitle: `10種類の本能と認知心理学`
  },
  {
    chapter: 'イントロダクション',
    jpPage: 22,
    enPage: 14,
    enTitle: `Cognitive biases`,
    jpTitle: `認知バイアス`
  },
  {
    chapter: 1,
    jpPage: 28,
    enPage: 19,
    enTitle: `Child mortality in 1995 and 2017`,
    jpTitle: `1995年と2017年の乳幼児死亡率`
  },
  {
    chapter: 1,
    jpPage: 30,
    enPage: 21,
    enTitle: `Improvements in Sweden and Saudi Arabia`,
    jpTitle: `Improvements in Sweden and Saudi Arabia`,
    seeMoreId: 'itfr'
  },
  {
    chapter: 1,
    jpPage: 35,
    enPage: 25,
    enTitle: `Graph: The world in 1965`,
    jpTitle: `Graph: The world in 1965`
  },
  {
    chapter: 1,
    jpPage: 37,
    enPage: 26,
    enTitle: `Graph: The world in 2017`,
    jpTitle: `Graph: The world in 2017`
  },
  {
    chapter: 1,
    jpPage: [38, 39],
    enPage: 28,
    enTitle: `Danish TV interview`,
    jpTitle: `Danish TV interview`
  },
  {
    chapter: 1,
    jpPage: 40,
    enPage: 29,
    enTitle: `Primary school completion rate`,
    jpTitle: `初等教育修了率`,
    seeMoreId: 'twmedu'
  },
  {
    chapter: 1,
    jpPage: 41,
    enPage: 30,
    enTitle: `Polls: Imagining the worst`,
    jpTitle: `低所得国、途上国の生活はどんなものだと思うか？`,
    seeMoreId: 'rdev'
  },
  {
    chapter: 1,
    jpPage: 42,
    enPage: 31,
    enTitle: `How many live in low-income countries?`,
    jpTitle: `How many live in low-income countries?`
  },
  {
    chapter: 1,
    jpPage: 42,
    enPage: 32,
    enTitle: `Where 75% of humanity lives`,
    jpTitle: `Where 75% of humanity lives`,
    seeMoreId: 'fwlevels'
  },
  {
    chapter: 1,
    jpPage: 45,
    enPage: 32,
    enTitle: `Graph: Four income levels`,
    jpTitle: `Graph: Four income levels`,
    seeMoreId: 'fwlevels'
  },
  {
    chapter: 1,
    jpPage: 45,
    enPage: 33,
    enTitle: `Doubling scales`,
    jpTitle: `Doubling scales`,
    seeMoreId: 'esca'
  },
  {
    chapter: 1,
    jpPage: 46,
    enPage: 34,
    enTitle: `People on Level 1`,
    jpTitle: `People on Level 1`
  },
  {
    chapter: 1,
    jpPage: 46,
    enPage: 34,
    enTitle: `Average family size on Level 1`,
    jpTitle: `Average family size on Level 1`
  },
  {
    chapter: 1,
    jpPage: 46,
    enPage: 34,
    enTitle: `Children working in the household`,
    jpTitle: `Children working in the household`
  },
  {
    chapter: 1,
    jpPage: 46,
    enPage: 34,
    enTitle: `Air pollution`,
    jpTitle: `Air pollution`
  },
  {
    chapter: 1,
    jpPage: 47,
    enPage: 35,
    enTitle: `Cost of illness on Level 2`,
    jpTitle: `Cost of illness on Level 2`
  },
  {
    chapter: 1,
    jpPage: 47,
    enPage: 35,
    enTitle: `Work in a garment factory`,
    jpTitle: `Work in a garment factory`
  },
  {
    chapter: 1,
    jpPage: 47,
    enPage: 36,
    enTitle: `Fridges and food on Level 2`,
    jpTitle: `Fridges and food on Level 2`
  },
  {
    chapter: 1,
    jpPage: 48,
    enPage: 36,
    enTitle: `Traffic accidents on Level 3`,
    jpTitle: `Traffic accidents on Level 3`
  },
  {
    chapter: 1,
    jpPage: 49,
    enPage: 37,
    enTitle: `Education on Level 4`,
    jpTitle: `Education on Level 4`
  },
  {
    chapter: 1,
    jpPage: 49,
    enPage: 37,
    enTitle: `Travel and vacation on Level 4`,
    jpTitle: `Travel and vacation on Level 4`
  },
  {
    chapter: 1,
    jpPage: 49,
    enPage: 37,
    enTitle: `Books on Level 4`,
    jpTitle: `Books on Level 4`
  },
  {
    chapter: 1,
    jpPage: 50,
    enPage: 38,
    enTitle: `Historic poverty rate`,
    jpTitle: `Historic poverty rate`
  },
  {
    chapter: 1,
    jpPage: 50,
    enPage: 38,
    enTitle: `Incomes in Western Europe and the US in the 1950s`,
    jpTitle: `Incomes in Western Europe and the US in the 1950s`
  },
  {
    chapter: 1,
    jpPage: 50,
    enPage: 38,
    enTitle: `Outdated terminology and the World Bank`,
    jpTitle: `Outdated terminology and the World Bank`
  },
  {
    chapter: 1,
    jpPage: 50,
    enPage: 38,
    enTitle: `"Developing countries" in other organizations`,
    jpTitle: `"Developing countries" in other organizations`
  },
  {
    chapter: 1,
    jpPage: 52,
    enPage: 40,
    enTitle: `Overlapping spreads`,
    jpTitle: `Overlapping spreads`
  },
  {
    chapter: 1,
    jpPage: [52, 53],
    enPage: [40, 41],
    enTitle: `Math scores`,
    jpTitle: `Math scores`
  },
  {
    chapter: 1,
    jpPage: [52, 53],
    enPage: 41,
    enTitle: `Graphs: Incomes in Mexico & US`,
    jpTitle: `Graphs: Incomes in Mexico & US`,
    seeMoreId: 'fbincmlinlog'
  },
  {
    chapter: 1,
    jpPage: 54,
    enPage: 42,
    enTitle: `In apartheid South Africa`,
    jpTitle: `In apartheid South Africa`
  },
  {
    chapter: 1,
    jpPage: [55, 56],
    enPage: 43,
    enTitle: `Brazilian income inequality`,
    jpTitle: `Brazilian income inequality`
  },
  {
    chapter: 1,
    jpPage: 57,
    enPage: 44,
    enTitle: `Poverty and extreme poverty`,
    jpTitle: `Poverty and extreme poverty`,
    seeMoreId: 'tepov'
  },
  {
    chapter: 1,
    jpPage: 58,
    enPage: 45,
    enTitle: `Levels of poverty`,
    jpTitle: `Levels of poverty`
  },
  {
    chapter: 2,
    jpPage: 62,
    enPage: 48,
    enTitle: `Living conditions in 1950s Sweden`,
    jpTitle: `Living conditions in 1950s Sweden`
  },
  {
    chapter: 2,
    jpPage: 63,
    enPage: 49,
    enTitle: `Terrorism on the rise`,
    jpTitle: `Terrorism on the rise`,
    seeMoreId: 'tter'
  },
  {
    chapter: 2,
    jpPage: 63,
    enPage: 49,
    enTitle: `The State of World Fisheries`,
    jpTitle: `The State of World Fisheries`,
    seeMoreId: 'tnplu'
  },
  {
    chapter: 2,
    jpPage: 63,
    enPage: 49,
    enTitle: `Sea levels`,
    jpTitle: `Sea levels`
  },
  {
    chapter: 2,
    jpPage: 64,
    enPage: 50,
    enTitle: `Graph: Better, worse, or about the same?`,
    jpTitle: `Graph: Better, worse, or about the same?`,
    seeMoreId: 'rbetter'
  },
  {
    chapter: 2,
    jpPage: 64,
    enPage: 50,
    enTitle: `When to trust the data`,
    jpTitle: `When to trust the data`,
    seeMoreId: 'doubt'
  },
  {
    chapter: 2,
    jpPage: 67,
    enPage: 52,
    enTitle: `19th century living conditions`,
    jpTitle: `19th century living conditions`
  },
  {
    chapter: 2,
    jpPage: 67,
    enPage: 53,
    enTitle: `Dip in extreme poverty: China, India and Latin America`,
    jpTitle: `Dip in extreme poverty: China, India and Latin America`,
    seeMoreId: 'vepovt'
  },
  {
    chapter: 2,
    jpPage: 68,
    enPage: 52,
    enTitle: `Graph: Extreme poverty rate`,
    jpTitle: `Graph: Extreme poverty rate`
  },
  {
    chapter: 2,
    jpPage: 69,
    enPage: 53,
    enTitle: `Life expectancy and data doubt`,
    jpTitle: `Life expectancy and data doubt`,
    seeMoreId: 'blexd'
  },
  {
    chapter: 2,
    jpPage: 69,
    enPage: 53,
    enTitle: `Fact Question 4: Life Expectancy`,
    jpTitle: `質問4: Life Expectancy`
  },
  {
    chapter: 2,
    jpPage: 69,
    enPage: 54,
    enTitle: `Historic child mortality`,
    jpTitle: `Historic child mortality`,
    seeMoreId: 'du5mr'
  },
  {
    chapter: 2,
    jpPage: 70,
    enPage: [54, 55],
    enTitle: `Deaths from starvation in Ethiopia`,
    jpTitle: `Deaths from starvation in Ethiopia`
  },
  {
    chapter: 2,
    jpPage: 71,
    enPage: 55,
    enTitle: `Graph: Average life expectancy from 1800 to today`,
    jpTitle: `Graph: Average life expectancy from 1800 to today`
  },
  {
    chapter: 2,
    jpPage: 72,
    enPage: 56,
    enTitle: `World Food Programme.`,
    jpTitle: `World Food Programme.`
  },
  {
    chapter: 2,
    jpPage: 72,
    enPage: 56,
    enTitle: `Swedes living on Level 4`,
    jpTitle: `Swedes living on Level 4`
  },
  {
    chapter: 2,
    jpPage: 73,
    enPage: 75,
    enTitle: `Graph: Catching up with Sweden`,
    jpTitle: `Graph: Catching up with Sweden`
  },
  {
    chapter: 2,
    jpPage: 74,
    enPage: 58,
    enTitle: `Not uncommon for children to drown`,
    jpTitle: `Not uncommon for children to drown`
  },
  {
    chapter: 2,
    jpPage: 75,
    enPage: 58,
    enTitle: `Citizens of Lesotho`,
    jpTitle: `Citizens of Lesotho`
  },
  {
    chapter: 2,
    jpPage: 75,
    enPage: 58,
    enTitle: `Life expectancy in Lesotho and uncertainty of data`,
    jpTitle: `Life expectancy in Lesotho and uncertainty of data`
  },
  {
    chapter: 2,
    jpPage: 75,
    enPage: 58,
    enTitle: `Literacy in Sweden and India`,
    jpTitle: `Literacy in Sweden and India`
  },
  {
    chapter: 2,
    jpPage: 76,
    enPage: 59,
    enTitle: `Vaccination on Level 1`,
    jpTitle: `Vaccination on Level 1`
  },
  {
    chapter: 2,
    jpPage: 78,
    enPage: 60,
    enTitle: `Graph: Legal slavery`,
    jpTitle: `Graph: Legal slavery`
  },
  {
    chapter: 2,
    jpPage: 78,
    enPage: 60,
    enTitle: `Graph: Oil spills`,
    jpTitle: `Graph: Oil spills`
  },
  {
    chapter: 2,
    jpPage: 78,
    enPage: 60,
    enTitle: `Graph: Child mortality`,
    jpTitle: `Graph: Child mortality`
  },
  {
    chapter: 2,
    jpPage: 78,
    enPage: 60,
    enTitle: `Graph: Death penalty`,
    jpTitle: `Graph: Death penalty`
  },
  {
    chapter: 2,
    jpPage: 78,
    enPage: 60,
    enTitle: `Graph: Leaded gasoline`,
    jpTitle: `Graph: Leaded gasoline`
  },
  {
    chapter: 2,
    jpPage: 79,
    enPage: 61,
    enTitle: `Graph: Child labor`,
    jpTitle: `Graph: Child labor`
  },
  {
    chapter: 2,
    jpPage: 79,
    enPage: 61,
    enTitle: `Graph: Deaths from disaster`,
    jpTitle: `Graph: Deaths from disaster`
  },
  {
    chapter: 2,
    jpPage: 79,
    enPage: 61,
    enTitle: `Graph: Nuclear arms`,
    jpTitle: `Graph: Nuclear arms`
  },
  {
    chapter: 2,
    jpPage: 79,
    enPage: 61,
    enTitle: `Graph: Smallpox`,
    jpTitle: `Graph: Smallpox`
  },
  {
    chapter: 2,
    jpPage: 79,
    enPage: 61,
    enTitle: `Graph: Ozone depletion`,
    jpTitle: `Graph: Ozone depletion`
  },
  {
    chapter: 2,
    jpPage: 80,
    enPage: 62,
    enTitle: `Graph: New movies`,
    jpTitle: `Graph: New movies`
  },
  {
    chapter: 2,
    jpPage: 80,
    enPage: 62,
    enTitle: `Graph: Protected nature`,
    jpTitle: `Graph: Protected nature`
  },
  {
    chapter: 2,
    jpPage: 80,
    enPage: 62,
    enTitle: `Graph: Women's right to vote`,
    jpTitle: `Graph: Women's right to vote`
  },
  {
    chapter: 2,
    jpPage: 80,
    enPage: 62,
    enTitle: `Graph: New music`,
    jpTitle: `Graph: New music`
  },
  {
    chapter: 2,
    jpPage: 80,
    enPage: 62,
    enTitle: `Graph: Science`,
    jpTitle: `Graph: Science`
  },
  {
    chapter: 2,
    jpPage: 80,
    enPage: 62,
    enTitle: `Graph: Harvest`,
    jpTitle: `Graph: Harvest`
  },
  {
    chapter: 2,
    jpPage: 80,
    enPage: 62,
    enTitle: `Graph: Democracy`,
    jpTitle: `Graph: Democracy`
  },
  {
    chapter: 2,
    jpPage: 80,
    enPage: 62,
    enTitle: `Graph: Literacy`,
    jpTitle: `Graph: Literacy`
  },
  {
    chapter: 2,
    jpPage: 81,
    enPage: 63,
    enTitle: `Graph: Child cancer survival`,
    jpTitle: `Graph: Child cancer survival`
  },
  {
    chapter: 2,
    jpPage: 81,
    enPage: 63,
    enTitle: `Graph: Girls in school`,
    jpTitle: `Graph: Girls in school`
  },
  {
    chapter: 2,
    jpPage: 81,
    enPage: 63,
    enTitle: `Graph: Monitored species`,
    jpTitle: `Graph: Monitored species`
  },
  {
    chapter: 2,
    jpPage: 81,
    enPage: 63,
    enTitle: `Graph: Electricity coverage`,
    jpTitle: `Graph: Electricity coverage`
  },
  {
    chapter: 2,
    jpPage: 81,
    enPage: 63,
    enTitle: `Graph: Mobile phones`,
    jpTitle: `Graph: Mobile phones`
  },
  {
    chapter: 2,
    jpPage: 81,
    enPage: 63,
    enTitle: `Graph: Internet`,
    jpTitle: `Graph: Internet`
  },
  {
    chapter: 2,
    jpPage: 81,
    enPage: 63,
    enTitle: `Graph: Immunization`,
    jpTitle: `Graph: Immunization`
  },
  {
    chapter: 2,
    jpPage: 82,
    enPage: 64,
    enTitle: `Graph: Guitars per capita`,
    jpTitle: `Graph: Guitars per capita`
  },
  {
    chapter: 2,
    jpPage: 84,
    enPage: 66,
    enTitle: `Causes of death in human history`,
    jpTitle: `Causes of death in human history`
  },
  {
    chapter: 2,
    jpPage: 84,
    enPage: 66,
    enTitle: `Ancient graveyards and burial sites`,
    jpTitle: `Ancient graveyards and burial sites`
  },
  {
    chapter: 2,
    jpPage: 84,
    enPage: 66,
    enTitle: `Historic child murders`,
    jpTitle: `Historic child murders`
  },
  {
    chapter: 2,
    jpPage: 88,
    enPage: 70,
    enTitle: `Educating girls`,
    jpTitle: `Educating girls`
  },
  {
    chapter: 2,
    jpPage: 93,
    enPage: 73,
    enTitle: `Drownings`,
    jpTitle: `Drownings`
  },
  {
    chapter: 3,
    jpPage: 98,
    enPage: 75,
    enTitle: `Ebola`,
    jpTitle: `Ebola`
  },
  {
    chapter: 3,
    jpPage: [98, 99],
    enPage: 76,
    enTitle: `Lord Krishna's chessboard`,
    jpTitle: `Lord Krishna's chessboard`
  },
  {
    chapter: 3,
    jpPage: 100,
    enPage: 77,
    enTitle: `The world population is not just increasing`,
    jpTitle: `The world population is not just increasing`
  },
  {
    chapter: 3,
    jpPage: 102,
    enPage: 78,
    enTitle: `Graph: Future number of children`,
    jpTitle: `Graph: Future number of children`
  },
  {
    chapter: 3,
    jpPage: 102,
    enPage: 79,
    enTitle: `Teacher's conference in Norway`,
    jpTitle: `Teacher's conference in Norway`
  },
  {
    chapter: 3,
    jpPage: 102,
    enPage: 79,
    enTitle: `Experts at the World Economic Forum`,
    jpTitle: `Experts at the World Economic Forum`
  },
  {
    chapter: 3,
    jpPage: 103,
    enPage: 79,
    enTitle: `The accuracy of UN Population forecasts`,
    jpTitle: `The accuracy of UN Population forecasts`
  },
  {
    chapter: 3,
    jpPage: 103,
    enPage: 80,
    enTitle: `Historic world population and three big cities`,
    jpTitle: `Historic world population and three big cities`
  },
  {
    chapter: 3,
    jpPage: 103,
    enPage: 80,
    enTitle: `Graph: World population from 8000 BC to today`,
    jpTitle: `Graph: World population from 8000 BC to today`
  },
  {
    chapter: 3,
    jpPage: 108,
    enPage: 84,
    enTitle: `Graph: Babies per woman from 1800 to today`,
    jpTitle: `Graph: Babies per woman from 1800 to today`,
    seeMoreId: 'tbab'
  },
  {
    chapter: 3,
    jpPage: 109,
    enPage: 85,
    enTitle: `Fertility transitions`,
    jpTitle: `Fertility transitions`
  },
  {
    chapter: 3,
    jpPage: 110,
    enPage: 86,
    enTitle: `The inevitable fill-up`,
    jpTitle: `The inevitable fill-up`,
    seeMoreId: 'efill'
  },
  {
    chapter: 3,
    jpPage: 112,
    enPage: [87, 88],
    enTitle: `The Old Balance`,
    jpTitle: `The Old Balance`
  },
  {
    chapter: 3,
    jpPage: 112,
    enPage: 87,
    enTitle: `The new balance`,
    jpTitle: `The new balance`,
    seeMoreId: 'eonb'
  },
  {
    chapter: 3,
    jpPage: 115,
    enPage: 90,
    enTitle: `Graph: Average family size by income`,
    jpTitle: `Graph: Average family size by income`
  },
  {
    chapter: 3,
    jpPage: 117,
    enPage: 92,
    enTitle: `Two public health miracles`,
    jpTitle: `Two public health miracles`
  },
  {
    chapter: 3,
    jpPage: 117,
    enPage: 92,
    enTitle: `Child survival`,
    jpTitle: `Child survival`
  },
  {
    chapter: 3,
    jpPage: [119, 124],
    enPage: [93, 97],
    enTitle: `Graphs: 14 Straight lines, S-bends, slides, and humps`,
    jpTitle: `Graphs: 14 Straight lines, S-bends, slides, and humps`
  },
  {
    chapter: 3,
    jpPage: 123,
    enPage: 97,
    enTitle: `E.coli Bacteria`,
    jpTitle: `E.coli Bacteria`
  },
  {
    chapter: 3,
    jpPage: 124,
    enPage: [98, 99],
    enTitle: `CO2 emissions from transportation`,
    jpTitle: `CO2 emissions from transportation`
  },
  {
    chapter: 3,
    jpPage: 126,
    enPage: 99,
    enTitle: `What part of the line are you seeing?`,
    jpTitle: `What part of the line are you seeing?`,
    seeMoreId: 'fline'
  },
  {
    chapter: 4,
    jpPage: 134,
    enPage: 105,
    enTitle: `Fear in polls`,
    jpTitle: `Fear in polls`
  },
  {
    chapter: 4,
    jpPage: 138,
    enPage: 107,
    enTitle: `Disaster data`,
    jpTitle: `Disaster data`,
    seeMoreId: 'tdis'
  },
  {
    chapter: 4,
    jpPage: 141,
    enPage: 110,
    enTitle: `ReliefWeb`,
    jpTitle: `ReliefWeb`
  },
  {
    chapter: 4,
    jpPage: 143,
    enPage: 111,
    enTitle: `Child deaths from diarrhea`,
    jpTitle: `Child deaths from diarrhea`,
    seeMoreId: 'tsan'
  },
  {
    chapter: 4,
    jpPage: 144,
    enPage: 112,
    enTitle: `Plane accidents`,
    jpTitle: `Plane accidents`
  },
  {
    chapter: 4,
    jpPage: 146,
    enPage: 113,
    enTitle: `Deaths in wars`,
    jpTitle: `Deaths in wars`
  },
  {
    chapter: 4,
    jpPage: 146,
    enPage: 114,
    enTitle: `Graph: Battle deaths`,
    jpTitle: `Graph: Battle deaths`,
    seeMoreId: 'twar'
  },
  {
    chapter: 4,
    jpPage: 148,
    enPage: 114,
    enTitle: `Fukushima`,
    jpTitle: `Fukushima`
  },
  {
    chapter: 4,
    jpPage: [148, 149],
    enPage: 114,
    enTitle: `Chernobyl`,
    jpTitle: `Chernobyl`,
    seeMoreId: 'tnuc'
  },
  {
    chapter: 4,
    jpPage: 149,
    enPage: 115,
    enTitle: `DDT`,
    jpTitle: `DDT`
  },
  {
    chapter: 4,
    jpPage: 150,
    enPage: 116,
    enTitle: `Chemophobia`,
    jpTitle: `Chemophobia`,
    seeMoreId: 'ffea'
  },
  {
    chapter: 4,
    jpPage: 150,
    enPage: 116,
    enTitle: `Refusing vaccination`,
    jpTitle: `Refusing vaccination`,
    seeMoreId: 'tvac'
  },
  {
    chapter: 4,
    jpPage: 150,
    enPage: 116,
    enTitle: `The environmental movement`,
    jpTitle: `The environmental movement`
  },
  {
    chapter: 4,
    jpPage: 153,
    enPage: 118,
    enTitle: `Terrorism`,
    jpTitle: `Terrorism`,
    seeMoreId: 'tter'
  },
  {
    chapter: 4,
    jpPage: 157,
    enPage: 121,
    enTitle: `Alcohol deaths`,
    jpTitle: `Alcohol deaths`,
    seeMoreId: 'alcterex'
  },
  {
    chapter: 4,
    jpPage: 158,
    enPage: 122,
    enTitle: `Risks of dying`,
    jpTitle: `Risks of dying`,
    seeMoreId: 'ffear'
  },
  {
    chapter: 4,
    jpPage: 158,
    enPage: 122,
    enTitle: `"How Many Deaths Make a Natural Disaster Newsworthy?"`,
    jpTitle: `"How Many Deaths Make a Natural Disaster Newsworthy?"`
  },
  {
    chapter: 5,
    jpPage: 162,
    enPage: [124, 125],
    enTitle: `Nacala child mortality calculation`,
    jpTitle: `Nacala child mortality calculation`
  },
  {
    chapter: 5,
    jpPage: 166,
    enPage: 127,
    enTitle: `Saving lives`,
    jpTitle: `Saving lives`
  },
  {
    chapter: 5,
    jpPage: [167, 168],
    enPage: 128,
    enTitle: `Wrong proportions: Perils of Perception`,
    jpTitle: `Wrong proportions: Perils of Perception`,
    seeMoreId: 'fsize'
  },
  {
    chapter: 5,
    jpPage: 168,
    enPage: 129,
    enTitle: `Educated mothers and child survival`,
    jpTitle: `Educated mothers and child survival`,
    seeMoreId: 'tcare'
  },
  {
    chapter: 5,
    jpPage: 169,
    enPage: 130,
    enTitle: `4.2 million`,
    jpTitle: `4.2 million`
  },
  {
    chapter: 5,
    jpPage: 171,
    enPage: 131,
    enTitle: `Bach Mai Hospital`,
    jpTitle: `Bach Mai Hospital`
  },
  {
    chapter: 5,
    jpPage: 172,
    enPage: 132,
    enTitle: `The Vietnam War`,
    jpTitle: `The Vietnam War`
  },
  {
    chapter: 5,
    jpPage: 173,
    enPage: [132, 133],
    enTitle: `Bears and axes`,
    jpTitle: `Bears and axes`
  },
  {
    chapter: 5,
    jpPage: 174,
    enPage: 133,
    enTitle: `The Spanish flu`,
    jpTitle: `The Spanish flu`
  },
  {
    chapter: 5,
    jpPage: 174,
    enPage: 133,
    enTitle: `Tuberculosis (TB) and the swine flu`,
    jpTitle: `Tuberculosis (TB) and the swine flu`,
    seeMoreId: 'bswin'
  },
  {
    chapter: 5,
    jpPage: [175, 176],
    enPage: 134,
    enTitle: `Energy sources`,
    jpTitle: `Energy sources`,
    seeMoreId: 'tene'
  },
  {
    chapter: 5,
    jpPage: 178,
    enPage: 136,
    enTitle: `The world's PIN Code`,
    jpTitle: `The world's PIN Code`
  },
  {
    chapter: 5,
    jpPage: 179,
    enPage: 138,
    enTitle: `Graphs: West and Rest`,
    jpTitle: `Graphs: West and Rest`
  },
  {
    chapter: 5,
    jpPage: 179,
    enPage: 138,
    enTitle: `Future consumers`,
    jpTitle: `Future consumers`
  },
  {
    chapter: 5,
    jpPage: [180, 181],
    enPage: 139,
    enTitle: `Child mortality rate`,
    jpTitle: `Child mortality rate`
  },
  {
    chapter: 5,
    jpPage: 182,
    enPage: 139,
    enTitle: `CO2 per capita`,
    jpTitle: `CO2 per capita`,
    seeMoreId: 'tco2'
  },
  {
    chapter: 6,
    jpPage: 196,
    enPage: 151,
    enTitle: `The cost of diabetes`,
    jpTitle: `The cost of diabetes`
  },
  {
    chapter: 6,
    jpPage: 203,
    enPage: 155,
    enTitle: `Comparing stoves`,
    jpTitle: `Comparing stoves`
  },
  {
    chapter: 6,
    jpPage: 205,
    enPage: 159,
    enTitle: `Graph: Differences within Africa`,
    jpTitle: `Graph: Differences within Africa`,
    seeMoreId: 'edafr'
  },
  {
    chapter: 6,
    jpPage: 206,
    enPage: 160,
    enTitle: `Contraceptives in Sweden`,
    jpTitle: `Contraceptives in Sweden`
  },
  {
    chapter: 6,
    jpPage: 206,
    enPage: 160,
    enTitle: `Family planning: Needs met and unmet needs`,
    jpTitle: `Family planning: Needs met and unmet needs`,
    seeMoreId: 'twmc'
  },
  {
    chapter: 6,
    jpPage: 207,
    enPage: 160,
    enTitle: `Everything is made from chemicals`,
    jpTitle: `Everything is made from chemicals`,
    seeMoreId: 'tind'
  },
  {
    chapter: 6,
    jpPage: 208,
    enPage: 161,
    enTitle: `The Salhi family on Dollar Street`,
    jpTitle: `The Salhi family on Dollar Street`
  },
  {
    chapter: 6,
    jpPage: 210,
    enPage: 163,
    enTitle: `The recovery position`,
    jpTitle: `The recovery position`
  },
  {
    chapter: 6,
    jpPage: 211,
    enPage: 163,
    enTitle: `Hong Kong report on SIDS`,
    jpTitle: `Hong Kong report on SIDS`
  },
  {
    chapter: 7,
    jpPage: 219,
    enPage: 169,
    enTitle: `The sense of superiority`,
    jpTitle: `The sense of superiority`,
    seeMoreId: 'fdes'
  },
  {
    chapter: 7,
    jpPage: 220,
    enPage: 170,
    enTitle: `World Health Chart over 200 years`,
    jpTitle: `World Health Chart over 200 years`
  },
  {
    chapter: 7,
    jpPage: 220,
    enPage: 170,
    enTitle: `Life expectancy 1970--2016: North Africa and Western Europe`,
    jpTitle: `Life expectancy 1970--2016: North Africa and Western Europe`
  },
  {
    chapter: 7,
    jpPage: 221,
    enPage: 170,
    enTitle: `Speed of improvement over the decades`,
    jpTitle: `Speed of improvement over the decades`
  },
  {
    chapter: 7,
    jpPage: 221,
    enPage: 170,
    enTitle: `Child mortality rates for Sub-Saharan Africa and Sweden`,
    jpTitle: `Child mortality rates for Sub-Saharan Africa and Sweden`
  },
  {
    chapter: 7,
    jpPage: 221,
    enPage: 171,
    enTitle: `Progress in China, Bangladesh, and Vietnam`,
    jpTitle: `Progress in China, Bangladesh, and Vietnam`
  },
  {
    chapter: 7,
    jpPage: 221,
    enPage: 171,
    enTitle: `80 years ago in Sweden and US`,
    jpTitle: `80 years ago in Sweden and US`
  },
  {
    chapter: 7,
    jpPage: 222,
    enPage: 171,
    enTitle: `Mozambique and India`,
    jpTitle: `Mozambique and India`
  },
  {
    chapter: 7,
    jpPage: 222,
    enPage: 171,
    enTitle: `Estimates of extreme poverty`,
    jpTitle: `Estimates of extreme poverty`
  },
  {
    chapter: 7,
    jpPage: 223,
    enPage: 172,
    enTitle: `IMF forecasts`,
    jpTitle: `IMF forecasts`
  },
  {
    chapter: 7,
    jpPage: 224,
    enPage: 174,
    enTitle: `Fertility in Iran`,
    jpTitle: `Fertility in Iran`
  },
  {
    chapter: 7,
    jpPage: 226,
    enPage: 175,
    enTitle: `Classifying major religions`,
    jpTitle: `Classifying major religions`,
    seeMoreId: 'ereltfr'
  },
  {
    chapter: 7,
    jpPage: 227,
    enPage: [175, 176],
    enTitle: `Graphs: Three groups based on religion`,
    jpTitle: `Graphs: Three groups based on religion`
  },
  {
    chapter: 7,
    jpPage: 226,
    enPage: 175,
    enTitle: `High income means low fertility`,
    jpTitle: `High income means low fertility`
  },
  {
    chapter: 7,
    jpPage: [227, 228],
    enPage: 176,
    enTitle: `Swedish values and RFSU`,
    jpTitle: `Swedish values and RFSU`
  },
  {
    chapter: 7,
    jpPage: 228,
    enPage: 177,
    enTitle: `Asian values`,
    jpTitle: `Asian values`,
    seeMoreId: 'twmi'
  },
  {
    chapter: 7,
    jpPage: [229, 230],
    enPage: 177,
    enTitle: `Asian University for Women in Bangladesh`,
    jpTitle: `Asian University for Women in Bangladesh`
  },
  {
    chapter: 7,
    jpPage: 231,
    enPage: 179,
    enTitle: `Nature reserves`,
    jpTitle: `Nature reserves`
  },
  {
    chapter: 7,
    jpPage: 231,
    enPage: 179,
    enTitle: `Sri Lanka's earliest protected forest`,
    jpTitle: `Sri Lanka's earliest protected forest`
  },
  {
    chapter: 7,
    jpPage: 232,
    enPage: 180,
    enTitle: `Outdated chimpanzee questions`,
    jpTitle: `Outdated chimpanzee questions`
  },
  {
    chapter: 7,
    jpPage: 233,
    enPage: 180,
    enTitle: `Swedish school system`,
    jpTitle: `Swedish school system`
  },
  {
    chapter: 7,
    jpPage: 233,
    enPage: 181,
    enTitle: `Attitudes toward same-sex marriage`,
    jpTitle: `Attitudes toward same-sex marriage`
  },
  {
    chapter: 8,
    jpPage: 242,
    enPage: 187,
    enTitle: `Expert forecasts: The single perspective in other books`,
    jpTitle: `Expert forecasts: The single perspective in other books`
  },
  {
    chapter: 8,
    jpPage: 243,
    enPage: 188,
    enTitle: `Lindau Nobel laureate meeting`,
    jpTitle: `Lindau Nobel laureate meeting`
  },
  {
    chapter: 8,
    jpPage: 243,
    enPage: 188,
    enTitle: `Poll results from groups of professionals`,
    jpTitle: `Poll results from groups of professionals`
  },
  {
    chapter: 8,
    jpPage: 245,
    enPage: 189,
    enTitle: `Plundered natural resources`,
    jpTitle: `Plundered natural resources`
  },
  {
    chapter: 8,
    jpPage: 248,
    enPage: 192,
    enTitle: `Eradicating one disease at a time`,
    jpTitle: `Eradicating one disease at a time`
  },
  {
    chapter: 8,
    jpPage: 249,
    enPage: 193,
    enTitle: `Falling profits of Big Pharma`,
    jpTitle: `Falling profits of Big Pharma`
  },
  {
    chapter: 8,
    jpPage: 249,
    enPage: 193,
    enTitle: `Education needs electricity`,
    jpTitle: `Education needs electricity`
  },
  {
    chapter: 8,
    jpPage: 254,
    enPage: 197,
    enTitle: `Chart: Cuba`,
    jpTitle: `Chart: Cuba`
  },
  {
    chapter: 8,
    jpPage: 256,
    enPage: [198, 199],
    enTitle: `Chart: US Health Spendings`,
    jpTitle: `Chart: US Health Spendings`
  },
  {
    chapter: 8,
    jpPage: 258,
    enPage: 201,
    enTitle: `Democracy Is Not the Single Solution`,
    jpTitle: `Democracy Is Not the Single Solution`
  },
  {
    chapter: 8,
    jpPage: 258,
    enPage: 201,
    enTitle: `Democracy and progress`,
    jpTitle: `Democracy and progress`
  },
  {
    chapter: 9,
    jpPage: 262,
    enPage: 204,
    enTitle: `Neglected diseases`,
    jpTitle: `Neglected diseases`
  },
  {
    chapter: 9,
    jpPage: 265,
    enPage: 207,
    enTitle: `Systems thinking`,
    jpTitle: `Systems thinking`,
    seeMoreId: 'fblame'
  },
  {
    chapter: 9,
    jpPage: 266,
    enPage: 208,
    enTitle: `How UNICEF gets the lowest prices`,
    jpTitle: `How UNICEF gets the lowest prices`
  },
  {
    chapter: 9,
    jpPage: 268,
    enPage: 210,
    enTitle: `Gapminder's Ignorance Project`,
    jpTitle: `Gapminder's Ignorance Project`
  },
  {
    chapter: 9,
    jpPage: 269,
    enPage: 211,
    enTitle: `Poll results`,
    jpTitle: `Poll results`
  },
  {
    chapter: 9,
    jpPage: [271, 272],
    enPage: 212,
    enTitle: `Why refugees don't fly`,
    jpTitle: `Why refugees don't fly`
  },
  {
    chapter: 9,
    jpPage: 274,
    enPage: 214,
    enTitle: `CO2 emissions by income`,
    jpTitle: `CO2 emissions by income`
  },
  {
    chapter: 9,
    jpPage: 275,
    enPage: 216,
    enTitle: `Syphilis`,
    jpTitle: `Syphilis`
  },
  {
    chapter: 9,
    jpPage: 276,
    enPage: 216,
    enTitle: `1 billion people and Mao`,
    jpTitle: `1 billion people and Mao`
  },
  {
    chapter: 9,
    jpPage: 276,
    enPage: 216,
    enTitle: `Falling birth rates and powerful leaders`,
    jpTitle: `Falling birth rates and powerful leaders`
  },
  {
    chapter: 9,
    jpPage: 276,
    enPage: 217,
    enTitle: `Family planning: Contraceptive usage by Catholics`,
    jpTitle: `Family planning: Contraceptive usage by Catholics`
  },
  {
    chapter: 9,
    jpPage: 278,
    enPage: 218,
    enTitle: `Access to safe abortion`,
    jpTitle: `Access to safe abortion`
  },
  {
    chapter: 9,
    jpPage: 279,
    enPage: 218,
    enTitle: `Institutions`,
    jpTitle: `Institutions`,
    seeMoreId: 'tgovin'
  },
  {
    chapter: 9,
    jpPage: 279,
    enPage: 219,
    enTitle: `The governmental employees who saved the world from Ebola`,
    jpTitle: `The governmental employees who saved the world from Ebola`
  },
  {
    chapter: 9,
    jpPage: 280,
    enPage: 219,
    enTitle: `Thank you, industrial Revolution`,
    jpTitle: `Thank you, industrial Revolution`
  },
  {
    chapter: 10,
    jpPage: 286,
    enPage: 223,
    enTitle: `Konzo`,
    jpTitle: `Konzo`
  },
  {
    chapter: 10,
    jpPage: 288,
    enPage: 225,
    enTitle: `Roadblocks`,
    jpTitle: `Roadblocks`
  },
  {
    chapter: 10,
    jpPage: 290,
    enPage: 227,
    enTitle: `The Urgency Instinct in other books`,
    jpTitle: `The Urgency Instinct in other books`
  },
  {
    chapter: 10,
    jpPage: 290,
    enPage: 227,
    enTitle: `Now or never`,
    jpTitle: `Now or never`
  },
  {
    chapter: 10,
    jpPage: 295,
    enPage: 232,
    enTitle: `The melting ice cap`,
    jpTitle: `The melting ice cap`
  },
  {
    chapter: 10,
    jpPage: 296,
    enPage: 232,
    enTitle: `Fresh numbers for GDP and CO2`,
    jpTitle: `Fresh numbers for GDP and CO2`
  },
  {
    chapter: 10,
    jpPage: 297,
    enPage: 233,
    enTitle: `Climate refugees`,
    jpTitle: `Climate refugees`
  },
  {
    chapter: 10,
    jpPage: 297,
    enPage: 233,
    enTitle: `Climate reductionism and catastrophizing`,
    jpTitle: `Climate reductionism and catastrophizing`
  },
  {
    chapter: 10,
    jpPage: 298,
    enPage: 234,
    enTitle: `Ebola`,
    jpTitle: `Ebola`
  },
  {
    chapter: 10,
    jpPage: 302,
    enPage: 237,
    enTitle: `The risk of global pandemic`,
    jpTitle: `The risk of global pandemic`,
    seeMoreId: 'tgerm'
  },
  {
    chapter: 10,
    jpPage: 303,
    enPage: 238,
    enTitle: `The risk of financial collapse`,
    jpTitle: `The risk of financial collapse`,
    seeMoreId: 'dysec'
  },
  {
    chapter: 10,
    jpPage: 303,
    enPage: 239,
    enTitle: `The risk of World War III`,
    jpTitle: `The risk of World War III`,
    seeMoreId: 'dysso'
  },
  {
    chapter: 10,
    jpPage: 304,
    enPage: 239,
    enTitle: `The risk of climate change and plundering of natural resources`,
    jpTitle: `The risk of climate change and plundering of natural resources`
  },
  {
    chapter: 10,
    jpPage: [305, 307],
    enPage: 240,
    enTitle: `The risk of extreme poverty`,
    jpTitle: `The risk of extreme poverty`,
    seeMoreId: 'furgr'
  },
  {
    chapter: 11,
    jpPage: 315,
    enPage: 247,
    enTitle: `Teachers`,
    jpTitle: `Teachers`
  },
  {
    chapter: 11,
    jpPage: 318,
    enPage: 250,
    enTitle: `Business`,
    jpTitle: `Business`
  },
  {
    chapter: 11,
    jpPage: 319,
    enPage: 251,
    enTitle: `Diversified economies`,
    jpTitle: `Diversified economies`
  },
  {
    chapter: 11,
    jpPage: 320,
    enPage: 252,
    enTitle: `Speling miskates`,
    jpTitle: `Speling miskates`
  },
  {
    chapter: 11,
    jpPage: 321,
    enPage: 252,
    enTitle: `Constructive news`,
    jpTitle: `Constructive news`
  },
  {
    chapter: 11,
    jpPage: 322,
    enPage: 253,
    enTitle: `Local ignorance and data`,
    jpTitle: `Local ignorance and data`
  }
]
  .map(process)
  .slice(pagedSourcesSliceBegin, pagedSourcesSliceEnd)

export const pagedSourcesObject = pagedSources.reduce((obj, item) => {
  obj[item.permalink] = item
  return obj
}, {})
