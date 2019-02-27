const fs = require('fs')
const problems = require('../src/lib/problems.json')

const chapterFromPageNumber = jpPage => {
  if (Array.isArray(jpPage)) {
    throw new TypeError('error')
  }

  if (jpPage < 27) {
    throw new Error('error')
  } else if (jpPage < 61) {
    return 1
  } else if (jpPage < 96) {
    return 2
  } else if (jpPage < 129) {
    return 3
  } else if (jpPage < 161) {
    return 4
  } else if (jpPage < 187) {
    return 5
  } else if (jpPage < 215) {
    return 6
  } else if (jpPage < 239) {
    return 7
  } else if (jpPage < 261) {
    return 8
  } else if (jpPage < 285) {
    return 9
  } else if (jpPage < 309) {
    return 10
  } else if (jpPage < 325) {
    return 11
  } else {
    throw new Error('error')
  }
}

const processChapter = ({chapter, jpPage}) => {
  const processedChapter =
    typeof chapter === 'undefined' ? chapterFromPageNumber(jpPage) : chapter
  return typeof processedChapter === 'number'
    ? `第${processedChapter}章`
    : processedChapter
}

const process = items => {
  let processedItems = items.map(
    ({jpPage, section, chapter, enTitle, permalink, listRow, ...rest}) => ({
      jpPage,
      jpPageFirst: Array.isArray(jpPage) ? jpPage[0] : jpPage,
      enTitle,
      chapter: processChapter({chapter, jpPage}),
      section: section || processChapter({chapter, jpPage}),
      ...rest,
      permalink:
        permalink ||
        (listRow
          ? `errata-${listRow}`
          : [
              Array.isArray(jpPage) ? jpPage[0] : jpPage,
              enTitle
                .replace(/\W/g, '-')
                .replace(/-+/g, '-')
                .replace(/(^-|-$)/g, '')
                .toLowerCase()
            ].join('-'))
    })
  )

  processedItems.sort((a, b) => {
    if (a.jpPageFirst < b.jpPageFirst) {
      return -1
    }

    if (a.jpPageFirst > b.jpPageFirst) {
      return 1
    }

    if (a.permalink < b.permalink) {
      return -1
    }

    if (a.permalink > b.permalink) {
      return 1
    }

    return 0
  })

  processedItems = processedItems.map((x, index) => ({...x, index}))

  const groupedItems = []
  let lastSection
  processedItems.forEach(item => {
    if (item.section === lastSection) {
      groupedItems[groupedItems.length - 1].push(item)
    } else {
      groupedItems.push([item])
    }

    lastSection = item.section
  })

  const itemsObject = processedItems.reduce((obj, item) => {
    obj[item.permalink] = item
    return obj
  }, {})

  return {
    object: JSON.stringify(itemsObject, null, 2),
    grouped: JSON.stringify(groupedItems, null, 2)
  }
}

const sources = [
  {
    section: '全般・見返し・はじめに',
    chapter: '全般',
    jpPage: -103,
    enTitle: 'Inside cover at the end: People by region and income',
    jpTitle: '2017年のデータ',
    permalink: 'data-for-2017',
    constructionId: 'eext'
  },
  {
    section: '全般・見返し・はじめに',
    chapter: '全般',
    jpPage: -102,
    enTitle: 'Inside front cover: World Health Chart 2017',
    jpTitle: '国の名称について',
    permalink: 'country-names'
  },
  {
    section: '全般・見返し・はじめに',
    chapter: '見返し',
    jpPage: -101,
    enTitle: 'Inside front cover: World Health Chart 2017',
    jpTitle: '世界保健チャート(2017年版)',
    permalink: 'inside-front-cover'
  },
  {
    section: '全般・見返し・はじめに',
    chapter: '見返し',
    jpPage: -100,
    enTitle: 'Inside cover at the end: People by region and income',
    jpTitle: '地域ごと・所得ごとの暮らしと人口',
    permalink: 'inside-end-cover'
  },
  {
    section: '全般・見返し・はじめに',
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
    constructionId: 'q1'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 9,
    enPage: 3,
    enTitle: `Fact Question 2: Where the Majority Lives`,
    jpTitle: `質問2: ${problems[1].short}`,
    constructionId: 'q2'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 9,
    enPage: 3,
    enTitle: `Fact Question 3: Extreme Poverty`,
    jpTitle: `質問3: ${problems[2].short}`,
    constructionId: 'q3'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 10,
    enPage: 3,
    enTitle: `Fact Question 4: Life Expectancy`,
    jpTitle: `質問4: ${problems[3].short}`,
    constructionId: 'q4'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 10,
    enPage: 4,
    enTitle: `Fact Question 5: Future Number of Children`,
    jpTitle: `質問5: ${problems[4].short}`,
    constructionId: 'q5'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 10,
    enPage: 4,
    enTitle: `Fact Question 6: Why is the Population Increasing?`,
    jpTitle: `質問6: ${problems[5].short}`,
    constructionId: 'q6'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 11,
    enPage: 4,
    enTitle: `Fact Question 7: Natural Disasters`,
    jpTitle: `質問7: ${problems[6].short}`,
    constructionId: 'q7'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 11,
    enPage: 4,
    enTitle: `Fact Question 8: Where People Live`,
    jpTitle: `質問8: ${problems[7].short}`,
    constructionId: 'q8'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 11,
    enPage: 4,
    enTitle: `Fact question 9: Vaccination`,
    jpTitle: `質問9: ${problems[8].short}`,
    constructionId: 'q9'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 12,
    enPage: 5,
    enTitle: `Fact Question 10: Women's Education`,
    jpTitle: `質問10: ${problems[9].short}`,
    constructionId: 'q10'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 12,
    enPage: 5,
    enTitle: `Fact Question 11: Endangered Species`,
    jpTitle: `質問11: ${problems[10].short}`,
    constructionId: 'q11'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 12,
    enPage: 5,
    enTitle: `Fact Question 12: Electricity`,
    jpTitle: `質問12: ${problems[11].short}`,
    constructionId: 'q12'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 13,
    enPage: 5,
    enTitle: `Fact Question 13: Climate Change`,
    jpTitle: `質問13: ${problems[12].short}`,
    constructionId: 'q13'
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
    constructionId: 'tvac'
  },
  {
    chapter: 'イントロダクション',
    jpPage: 15,
    enPage: 8,
    enTitle: `Public awareness of climate change`,
    jpTitle: `地球温暖化の認知度`
  },
  {
    chapter: 'イントロダクション',
    jpPage: 17,
    enPage: 10,
    enTitle: `Hans testing students`,
    jpTitle: `学生たちのクイズ結果`
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
    jpTitle: `スウェーデンとサウジアラビアの進歩`
  },
  {
    chapter: 1,
    jpPage: 35,
    enPage: 25,
    enTitle: `Graph: The world in 1965`,
    jpTitle: `1965年の世界のグラフ`
  },
  {
    chapter: 1,
    jpPage: 37,
    enPage: 26,
    enTitle: `Graph: The world in 2017`,
    jpTitle: `2017年の世界のグラフ`
  },
  {
    chapter: 1,
    jpPage: [38, 39],
    enPage: 28,
    enTitle: `Danish TV interview`,
    jpTitle: `デンマークのテレビ出演`
  },
  {
    chapter: 1,
    jpPage: 40,
    enPage: 29,
    enTitle: `Primary school completion rate`,
    jpTitle: `初等教育修了率`,
    constructionId: 'twmedu'
  },
  {
    chapter: 1,
    jpPage: 41,
    enPage: 30,
    enTitle: `Polls: Imagining the worst`,
    jpTitle: `低所得国、途上国の生活はどんなもの？`,
    constructionId: 'rdev'
  },
  {
    chapter: 1,
    jpPage: 42,
    enPage: 31,
    enTitle: `How many live in low-income countries?`,
    jpTitle: `低所得国に暮らす人の数はどのくらい？`
  },
  {
    chapter: 1,
    jpPage: 42,
    enPage: 32,
    enTitle: `Where 75% of humanity lives`,
    jpTitle: `人類の75%が暮らすのはどこ？`,
    constructionId: 'fwlevels'
  },
  {
    chapter: 1,
    jpPage: 45,
    enPage: 32,
    enTitle: `Graph: Four income levels`,
    jpTitle: `4つの所得レベル`,
    constructionId: 'fwlevels'
  },
  {
    chapter: 1,
    jpPage: 45,
    enPage: 33,
    enTitle: `Doubling scales`,
    jpTitle: `倍増するグラフ`,
    constructionId: 'esca'
  },
  {
    chapter: 1,
    jpPage: 46,
    enPage: 34,
    enTitle: `People on Level 1`,
    jpTitle: `レベル1の暮らしをする人々`
  },
  {
    chapter: 1,
    jpPage: 46,
    enPage: 34,
    enTitle: `Average family size on Level 1`,
    jpTitle: `レベル1の家庭の平均人数`
  },
  {
    chapter: 1,
    jpPage: 46,
    enPage: 34,
    enTitle: `Children working in the household`,
    jpTitle: `暮らしを支える子供たち`
  },
  {
    chapter: 1,
    jpPage: 46,
    enPage: 34,
    enTitle: `Air pollution`,
    jpTitle: `大気汚染`
  },
  {
    chapter: 1,
    jpPage: 47,
    enPage: 35,
    enTitle: `Cost of illness on Level 2`,
    jpTitle: `レベル2における医療費`
  },
  {
    chapter: 1,
    jpPage: 47,
    enPage: 35,
    enTitle: `Work in a garment factory`,
    jpTitle: `繊維工場で働くこと`
  },
  {
    chapter: 1,
    jpPage: 47,
    enPage: 36,
    enTitle: `Fridges and food on Level 2`,
    jpTitle: `レベル2における冷蔵庫と食べ物`
  },
  {
    chapter: 1,
    jpPage: 48,
    enPage: 36,
    enTitle: `Traffic accidents on Level 3`,
    jpTitle: `レベル3における交通事故`
  },
  {
    chapter: 1,
    jpPage: 49,
    enPage: 37,
    enTitle: `Education on Level 4`,
    jpTitle: `レベル4における教育`
  },
  {
    chapter: 1,
    jpPage: 49,
    enPage: 37,
    enTitle: `Travel and vacation on Level 4`,
    jpTitle: `レベル4における観光`
  },
  {
    chapter: 1,
    jpPage: 49,
    enPage: 37,
    enTitle: `Books on Level 4`,
    jpTitle: `レベル4における出版業`
  },
  {
    chapter: 1,
    jpPage: 50,
    enPage: 38,
    enTitle: `Historic poverty rate`,
    jpTitle: `極度の貧困率の変化`
  },
  {
    chapter: 1,
    jpPage: 50,
    enPage: 38,
    enTitle: `Incomes in Western Europe and the US in the 1950s`,
    jpTitle: `1950年代の西ヨーロッパとアメリカの所得`
  },
  {
    chapter: 1,
    jpPage: 50,
    enPage: 38,
    enTitle: `Outdated terminology and the World Bank`,
    jpTitle: `時代遅れの「途上国」と世界銀行`
  },
  {
    chapter: 1,
    jpPage: 50,
    enPage: 38,
    enTitle: `"Developing countries" in other organizations`,
    jpTitle: `「途上国」を使い続ける団体`
  },
  {
    chapter: 1,
    jpPage: [52, 53],
    enPage: [40, 41],
    enTitle: `Math scores`,
    jpTitle: `数学テストの特典`
  },
  {
    chapter: 1,
    jpPage: [52, 53],
    enPage: 41,
    enTitle: `Graphs: Incomes in Mexico & US`,
    jpTitle: `メキシコとアメリカの所得のグラフ`
  },
  {
    chapter: 1,
    jpPage: 54,
    enPage: 40,
    enTitle: `Overlapping spreads`,
    jpTitle: `重なりがある分布`
  },
  {
    chapter: 1,
    jpPage: 54,
    enPage: 42,
    enTitle: `In apartheid South Africa`,
    jpTitle: `アパルトヘイト時代の南アフリカ`
  },
  {
    chapter: 1,
    jpPage: [55, 56],
    enPage: 43,
    enTitle: `Brazilian income inequality`,
    jpTitle: `ブラジルの所得格差`
  },
  {
    chapter: 1,
    jpPage: 57,
    enPage: 44,
    enTitle: `Poverty and extreme poverty`,
    jpTitle: `「貧困」と「極度の貧困」`,
    constructionId: 'tepov'
  },
  {
    chapter: 1,
    jpPage: 58,
    enPage: 45,
    enTitle: `Levels of poverty`,
    jpTitle: `貧しさの違い`
  },
  {
    chapter: 2,
    jpPage: 62,
    enPage: 48,
    enTitle: `Living conditions in 1950s Sweden`,
    jpTitle: `1950年代のスウェーデンの暮らし`
  },
  {
    chapter: 2,
    jpPage: 63,
    enPage: 49,
    enTitle: `Terrorism on the rise`,
    jpTitle: `テロの数は増加中`,
    constructionId: 'tter'
  },
  {
    chapter: 2,
    jpPage: 63,
    enPage: 49,
    enTitle: `The State of World Fisheries`,
    jpTitle: `漁業での乱獲`,
    constructionId: 'tnplu'
  },
  {
    chapter: 2,
    jpPage: 63,
    enPage: 49,
    enTitle: `Sea levels`,
    jpTitle: `海面の上昇`
  },
  {
    chapter: 2,
    jpPage: 64,
    enPage: 50,
    enTitle: `Graph: Better, worse, or about the same?`,
    jpTitle: `「世界は良くなっている」「悪くなっている」「あまり変わっていない」の棒グラフ`,
    constructionId: 'rbetter'
  },
  {
    chapter: 2,
    jpPage: 64,
    enPage: 50,
    enTitle: `When to trust the data`,
    jpTitle: `いつデータを信頼するべきか`
  },
  {
    chapter: 2,
    jpPage: 67,
    enPage: 52,
    enTitle: `19th century living conditions`,
    jpTitle: `19世紀の暮らし`
  },
  {
    chapter: 2,
    jpPage: 67,
    enPage: 53,
    enTitle: `Dip in extreme poverty: China, India and Latin America`,
    jpTitle: `極度の貧困率の低下: 中国、インド、中南米`,
    constructionId: 'vepovt'
  },
  {
    chapter: 2,
    jpPage: 68,
    enPage: 52,
    enTitle: `Graph: Extreme poverty rate`,
    jpTitle: `極度の貧困率のグラフ`
  },
  {
    chapter: 2,
    jpPage: 69,
    enPage: 53,
    enTitle: `Life expectancy and data doubt`,
    jpTitle: `平均寿命とデータをどこまで疑うべきか`
  },
  {
    chapter: 2,
    jpPage: 69,
    enPage: 53,
    enTitle: `Fact Question 4: Life Expectancy`,
    jpTitle: `平均寿命についての質問`
  },
  {
    chapter: 2,
    jpPage: 69,
    enPage: 54,
    enTitle: `Historic child mortality`,
    jpTitle: `乳幼児死亡率の変化`
  },
  {
    chapter: 2,
    jpPage: 70,
    enPage: [54, 55],
    enTitle: `Deaths from starvation in Ethiopia`,
    jpTitle: `エチオピアの飢餓`
  },
  {
    chapter: 2,
    jpPage: 71,
    enPage: 55,
    enTitle: `Graph: Average life expectancy from 1800 to today`,
    jpTitle: `1800年から現在までの平均寿命のグラフ`
  },
  {
    chapter: 2,
    jpPage: 72,
    enPage: 56,
    enTitle: `World Food Programme.`,
    jpTitle: `世界食糧計画`
  },
  {
    chapter: 2,
    jpPage: 72,
    enPage: 56,
    enTitle: `Swedes living on Level 4`,
    jpTitle: `レベル4の暮らしをするスウェーデン人`
  },
  {
    chapter: 2,
    jpPage: 73,
    enPage: 75,
    enTitle: `Graph: Catching up with Sweden`,
    jpTitle: `スウェーデンに追いつく国々`
  },
  {
    chapter: 2,
    jpPage: 74,
    enPage: 58,
    enTitle: `Not uncommon for children to drown`,
    jpTitle: `溺れる子供も多かった`
  },
  {
    chapter: 2,
    jpPage: 75,
    enPage: 58,
    enTitle: `Citizens of Lesotho`,
    jpTitle: `レソトの国民`
  },
  {
    chapter: 2,
    jpPage: 75,
    enPage: 58,
    enTitle: `Life expectancy in Lesotho and uncertainty of data`,
    jpTitle: `レソトの平均寿命とデータの不確かさ`
  },
  {
    chapter: 2,
    jpPage: 75,
    enPage: 58,
    enTitle: `Literacy in Sweden and India`,
    jpTitle: `スウェーデンとインドの識字率`
  },
  {
    chapter: 2,
    jpPage: 76,
    enPage: 59,
    enTitle: `Vaccination on Level 1`,
    jpTitle: `レベル1における予防接種`
  },
  {
    chapter: 2,
    jpPage: 78,
    enPage: 60,
    enTitle: `Graph: Legal slavery`,
    jpTitle: `32のグラフ: 合法的な奴隷制度`
  },
  {
    chapter: 2,
    jpPage: 78,
    enPage: 60,
    enTitle: `Graph: Oil spills`,
    jpTitle: `32のグラフ: 石油流出事故`
  },
  {
    chapter: 2,
    jpPage: 78,
    enPage: 60,
    enTitle: `Graph: Child mortality`,
    jpTitle: `32のグラフ: 乳幼児の死亡率`
  },
  {
    chapter: 2,
    jpPage: 78,
    enPage: 60,
    enTitle: `Graph: Death penalty`,
    jpTitle: `32のグラフ: 死刑`
  },
  {
    chapter: 2,
    jpPage: 78,
    enPage: 60,
    enTitle: `Graph: Leaded gasoline`,
    jpTitle: `32のグラフ: 有鉛ガソリン`
  },
  {
    chapter: 2,
    jpPage: 79,
    enPage: 61,
    enTitle: `Graph: Child labor`,
    jpTitle: `32のグラフ: 児童労働`
  },
  {
    chapter: 2,
    jpPage: 79,
    enPage: 61,
    enTitle: `Graph: Deaths from disaster`,
    jpTitle: `32のグラフ: 災害による死者数`
  },
  {
    chapter: 2,
    jpPage: 79,
    enPage: 61,
    enTitle: `Graph: Nuclear arms`,
    jpTitle: `32のグラフ: 核兵器`
  },
  {
    chapter: 2,
    jpPage: 79,
    enPage: 61,
    enTitle: `Graph: Smallpox`,
    jpTitle: `32のグラフ: 天然痘`
  },
  {
    chapter: 2,
    jpPage: 79,
    enPage: 61,
    enTitle: `Graph: Ozone depletion`,
    jpTitle: `32のグラフ: オゾン層の破壊`
  },
  {
    chapter: 2,
    jpPage: 80,
    enPage: 62,
    enTitle: `Graph: New movies`,
    jpTitle: `32のグラフ: 新しい映画`
  },
  {
    chapter: 2,
    jpPage: 80,
    enPage: 62,
    enTitle: `Graph: Protected nature`,
    jpTitle: `32のグラフ: 自然保護`
  },
  {
    chapter: 2,
    jpPage: 80,
    enPage: 62,
    enTitle: `Graph: Women's right to vote`,
    jpTitle: `32のグラフ: 女性参政権`
  },
  {
    chapter: 2,
    jpPage: 80,
    enPage: 62,
    enTitle: `Graph: New music`,
    jpTitle: `32のグラフ: 新しい音楽`
  },
  {
    chapter: 2,
    jpPage: 80,
    enPage: 62,
    enTitle: `Graph: Science`,
    jpTitle: `32のグラフ: 科学の発見`
  },
  {
    chapter: 2,
    jpPage: 80,
    enPage: 62,
    enTitle: `Graph: Harvest`,
    jpTitle: `32のグラフ: 農作物の収穫`
  },
  {
    chapter: 2,
    jpPage: 80,
    enPage: 62,
    enTitle: `Graph: Literacy`,
    jpTitle: `32のグラフ: 識字率`
  },
  {
    chapter: 2,
    jpPage: 80,
    enPage: 62,
    enTitle: `Graph: Democracy`,
    jpTitle: `32のグラフ: オリンピック`
  },
  {
    chapter: 2,
    jpPage: 81,
    enPage: 63,
    enTitle: `Graph: Child cancer survival`,
    jpTitle: `32のグラフ: 小児がんの生存率`
  },
  {
    chapter: 2,
    jpPage: 81,
    enPage: 63,
    enTitle: `Graph: Girls in school`,
    jpTitle: `32のグラフ: 女子教育`
  },
  {
    chapter: 2,
    jpPage: 81,
    enPage: 63,
    enTitle: `Graph: Monitored species`,
    jpTitle: `32のグラフ: 絶滅危惧種の保全`
  },
  {
    chapter: 2,
    jpPage: 81,
    enPage: 63,
    enTitle: `Graph: Electricity coverage`,
    jpTitle: `32のグラフ: 電気の利用`
  },
  {
    chapter: 2,
    jpPage: 81,
    enPage: 63,
    enTitle: `Graph: Mobile phones`,
    jpTitle: `32のグラフ: 携帯電話`
  },
  {
    chapter: 2,
    jpPage: 81,
    enPage: 63,
    enTitle: `Graph: Internet`,
    jpTitle: `32のグラフ: インターネット`
  },
  {
    chapter: 2,
    jpPage: 81,
    enPage: 63,
    enTitle: `Graph: Immunization`,
    jpTitle: `32のグラフ: 予防接種`
  },
  {
    chapter: 2,
    jpPage: 82,
    enPage: 64,
    enTitle: `Graph: Guitars per capita`,
    jpTitle: `100万人あたりのギターの数`,
    constructionId: 'tcminsg'
  },
  {
    chapter: 2,
    jpPage: 84,
    enPage: 66,
    enTitle: `Causes of death in human history`,
    jpTitle: `人類史における死因`
  },
  {
    chapter: 2,
    jpPage: 84,
    enPage: 66,
    enTitle: `Ancient graveyards and burial sites`,
    jpTitle: `古代の墓地`
  },
  {
    chapter: 2,
    jpPage: 84,
    enPage: 66,
    enTitle: `Historic child murders`,
    jpTitle: `殺される子供`
  },
  {
    chapter: 2,
    jpPage: 88,
    enPage: 70,
    enTitle: `Educating girls`,
    jpTitle: `女子教育`
  },
  {
    chapter: 2,
    jpPage: 93,
    enPage: 73,
    enTitle: `Drownings`,
    jpTitle: `溺れて亡くなる`
  },
  {
    chapter: 3,
    jpPage: 98,
    enPage: 75,
    enTitle: `Ebola`,
    jpTitle: `エボラ`
  },
  {
    chapter: 3,
    jpPage: [98, 99],
    enPage: 76,
    enTitle: `Lord Krishna's chessboard`,
    jpTitle: `クリシュナ卿のチェス盤`
  },
  {
    chapter: 3,
    jpPage: 100,
    enPage: 77,
    enTitle: `The world population is not just increasing`,
    jpTitle: `世界の人口はひたすら増え続けない`
  },
  {
    chapter: 3,
    jpPage: 102,
    enPage: 78,
    enTitle: `Graph: Future number of children`,
    jpTitle: `未来の子供の数のグラフ`
  },
  {
    chapter: 3,
    jpPage: 102,
    enPage: 79,
    enTitle: `Teacher's conference in Norway`,
    jpTitle: `ノルウェーの教師向けのカンファレンス`
  },
  {
    chapter: 3,
    jpPage: 102,
    enPage: 79,
    enTitle: `Experts at the World Economic Forum`,
    jpTitle: `ダボス会議に来ていた専門家`
  },
  {
    chapter: 3,
    jpPage: 103,
    enPage: 79,
    enTitle: `The accuracy of UN Population forecasts`,
    jpTitle: `国連の人口予測の制度`
  },
  {
    chapter: 3,
    jpPage: 103,
    enPage: 80,
    enTitle: `Historic world population and three big cities`,
    jpTitle: `過去の世界人口と3つの大都市`
  },
  {
    chapter: 3,
    jpPage: 103,
    enPage: 80,
    enTitle: `Graph: World population from 8000 BC to today`,
    jpTitle: `世界の人口のグラフ(紀元前8000年から現在まで)`,
    constructionId: 'spop'
  },
  {
    chapter: 3,
    jpPage: 108,
    enPage: 84,
    enTitle: `Graph: Babies per woman from 1800 to today`,
    jpTitle: `女性ひとりあたりの子供の数のグラフ(1800年から現在まで)`
  },
  {
    chapter: 3,
    jpPage: 109,
    enPage: 85,
    enTitle: `Fertility transitions`,
    jpTitle: `人口転換`
  },
  {
    chapter: 3,
    jpPage: 110,
    enPage: 86,
    enTitle: `The inevitable fill-up`,
    jpTitle: `世代ごとの人口の増加`,
    constructionId: 'efill'
  },
  {
    chapter: 3,
    jpPage: 112,
    enPage: [87, 88],
    enTitle: `The Old Balance`,
    jpTitle: `自然との調和(過去)`
  },
  {
    chapter: 3,
    jpPage: 112,
    enPage: 87,
    enTitle: `The new balance`,
    jpTitle: `自然との調和(現在)`,
    constructionId: 'eonb'
  },
  {
    chapter: 3,
    jpPage: 115,
    enPage: 90,
    enTitle: `Graph: Average family size by income`,
    jpTitle: `それぞれの所得レベルにおける1世帯あたりの平均人数のグラフ`
  },
  {
    chapter: 3,
    jpPage: 116,
    enPage: 92,
    enTitle: `Child survival`,
    jpTitle: `子供の死亡率の低下`
  },
  {
    chapter: 3,
    jpPage: 117,
    enPage: 92,
    enTitle: `Two public health miracles`,
    jpTitle: `公衆衛生の2つの奇跡`
  },
  {
    chapter: 3,
    jpPage: [119, 124],
    enPage: [93, 97],
    enTitle: `Graphs: 14 Straight lines, S-bends, slides, and humps`,
    jpTitle: `直線、S 字カーブ、すべり台、コブの形のグラフ`,
    constructionId: 'flinex'
  },
  {
    chapter: 3,
    jpPage: 123,
    enPage: 97,
    enTitle: `E.coli Bacteria`,
    jpTitle: `大腸菌`
  },
  {
    chapter: 3,
    jpPage: 124,
    enPage: [98, 99],
    enTitle: `CO2 emissions from transportation`,
    jpTitle: `二酸化炭素の排出量`
  },
  {
    chapter: 3,
    jpPage: 126,
    enPage: 99,
    enTitle: `What part of the line are you seeing?`,
    jpTitle: `見えているのは、グラフのどの部分だろう？`,
    constructionId: 'fline'
  },
  {
    chapter: 4,
    jpPage: 134,
    enPage: 105,
    enTitle: `Fear in polls`,
    jpTitle: `あなたがいちばん恐れているものは何だろう？`
  },
  {
    chapter: 4,
    jpPage: 138,
    enPage: 107,
    enTitle: `Disaster data`,
    jpTitle: `自然災害`,
    constructionId: 'tdis'
  },
  {
    chapter: 4,
    jpPage: 141,
    enPage: 110,
    enTitle: `ReliefWeb`,
    jpTitle: `リリーフウェブ`
  },
  {
    chapter: 4,
    jpPage: 143,
    enPage: 111,
    enTitle: `Child deaths from diarrhea`,
    jpTitle: `下痢で亡くなる子供`,
    constructionId: 'tsan'
  },
  {
    chapter: 4,
    jpPage: 144,
    enPage: 112,
    enTitle: `Plane accidents`,
    jpTitle: `飛行機事故`
  },
  {
    chapter: 4,
    jpPage: 146,
    enPage: 113,
    enTitle: `Deaths in wars`,
    jpTitle: `戦争の犠牲者数`
  },
  {
    chapter: 4,
    jpPage: 146,
    enPage: 114,
    enTitle: `Graph: Battle deaths`,
    jpTitle: `戦争や紛争による犠牲者数の推移のグラフ`,
    constructionId: 'twar'
  },
  {
    chapter: 4,
    jpPage: 148,
    enPage: 114,
    enTitle: `Fukushima`,
    jpTitle: `福島の原発事故`
  },
  {
    chapter: 4,
    jpPage: [148, 149],
    enPage: 114,
    enTitle: `Chernobyl`,
    jpTitle: `チェルノブイリの原発事故`,
    constructionId: 'tnuc'
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
    jpTitle: `化学物質恐怖症`,
    constructionId: 'ffea'
  },
  {
    chapter: 4,
    jpPage: 150,
    enPage: 116,
    enTitle: `Refusing vaccination`,
    jpTitle: `子供にワクチンを受けさせない親`,
    constructionId: 'tvac'
  },
  {
    chapter: 4,
    jpPage: 150,
    enPage: 116,
    enTitle: `The environmental movement`,
    jpTitle: `環境運動`
  },
  {
    chapter: 4,
    jpPage: 153,
    enPage: 118,
    enTitle: `Terrorism`,
    jpTitle: `テロ`,
    constructionId: 'tter'
  },
  {
    chapter: 4,
    jpPage: 157,
    enPage: 121,
    enTitle: `Alcohol deaths`,
    jpTitle: `飲酒による死`,
    constructionId: 'alcterex'
  },
  {
    chapter: 4,
    jpPage: 158,
    enPage: 122,
    enTitle: `Risks of dying`,
    jpTitle: `死因とリスク`,
    constructionId: 'ffear'
  },
  {
    chapter: 4,
    jpPage: 158,
    enPage: 122,
    enTitle: `"How Many Deaths Make a Natural Disaster Newsworthy?"`,
    jpTitle: `災害の比較: 何人亡くなれば、ニュースに取り上げられるのか？`
  },
  {
    chapter: 5,
    jpPage: 162,
    enPage: [124, 125],
    enTitle: `Nacala child mortality calculation`,
    jpTitle: `ナカラ地区の乳幼児死亡率`
  },
  {
    chapter: 5,
    jpPage: 166,
    enPage: 127,
    enTitle: `Saving lives`,
    jpTitle: `命を救う効果的な方法`
  },
  {
    chapter: 5,
    jpPage: [167, 168],
    enPage: 128,
    enTitle: `Wrong proportions: Perils of Perception`,
    jpTitle: `過大視`,
    constructionId: 'fsize'
  },
  {
    chapter: 5,
    jpPage: 168,
    enPage: 129,
    enTitle: `Educated mothers and child survival`,
    jpTitle: `教育を受けた母親と、子供の生存率の関係`,
    constructionId: 'tcare'
  },
  {
    chapter: 5,
    jpPage: 169,
    enPage: 130,
    enTitle: `4.2 million`,
    jpTitle: `420万人`
  },
  {
    chapter: 5,
    jpPage: 171,
    enPage: 131,
    enTitle: `Bach Mai Hospital`,
    jpTitle: `バックマイ病院`
  },
  {
    chapter: 5,
    jpPage: 172,
    enPage: 132,
    enTitle: `The Vietnam War`,
    jpTitle: `ベトナム戦争`
  },
  {
    chapter: 5,
    jpPage: 173,
    enPage: [132, 133],
    enTitle: `Bears and axes`,
    jpTitle: `クマと斧`
  },
  {
    chapter: 5,
    jpPage: 174,
    enPage: 133,
    enTitle: `The Spanish flu`,
    jpTitle: `スペインかぜ`
  },
  {
    chapter: 5,
    jpPage: 174,
    enPage: 133,
    enTitle: `Tuberculosis (TB) and the swine flu`,
    jpTitle: `結核と豚インフルエンザ`,
    constructionId: 'bswin'
  },
  {
    chapter: 5,
    jpPage: [175, 176],
    enPage: 134,
    enTitle: `Energy sources`,
    jpTitle: `エネルギー源`,
    constructionId: 'tene'
  },
  {
    chapter: 5,
    jpPage: 178,
    enPage: 136,
    enTitle: `The world's PIN Code`,
    jpTitle: `世界の暗証番号`
  },
  {
    chapter: 5,
    jpPage: 179,
    enPage: 138,
    enTitle: `Graphs: West and Rest`,
    jpTitle: `もうすぐ、レベル4の大半が西洋人以外になる`
  },
  {
    chapter: 5,
    jpPage: 179,
    enPage: 138,
    enTitle: `Future consumers`,
    jpTitle: `未来の消費者`
  },
  {
    chapter: 5,
    jpPage: [180, 181],
    enPage: 139,
    enTitle: `Child mortality rate`,
    jpTitle: `乳幼児死亡率`
  },
  {
    chapter: 5,
    jpPage: 182,
    enPage: 139,
    enTitle: `CO2 per capita`,
    jpTitle: `ひとりあたりの二酸化炭素排出量`,
    constructionId: 'tco2'
  },
  {
    chapter: 6,
    jpPage: 196,
    enPage: 151,
    enTitle: `The cost of diabetes`,
    jpTitle: `糖尿病の治療コスト`
  },
  {
    chapter: 6,
    jpPage: 203,
    enPage: 155,
    enTitle: `Comparing stoves`,
    jpTitle: `コンロの比較`
  },
  {
    chapter: 6,
    jpPage: 205,
    enPage: 159,
    enTitle: `Graph: Differences within Africa`,
    jpTitle: `アフリカにおける健康と富の格差を示したグラフ`,
    constructionId: 'edafr'
  },
  {
    chapter: 6,
    jpPage: 206,
    enPage: 160,
    enTitle: `Contraceptives in Sweden`,
    jpTitle: `スウェーデンにおける避妊具`
  },
  {
    chapter: 6,
    jpPage: 206,
    enPage: 160,
    enTitle: `Family planning: Needs met and unmet needs`,
    jpTitle: `避妊具が手に入らない人と入る人`,
    constructionId: 'twmc'
  },
  {
    chapter: 6,
    jpPage: 207,
    enPage: 160,
    enTitle: `Everything is made from chemicals`,
    jpTitle: `ありとあらゆるものは化学物質からできている`,
    constructionId: 'tind'
  },
  {
    chapter: 6,
    jpPage: 208,
    enPage: 161,
    enTitle: `The Salhi family on Dollar Street`,
    jpTitle: `ドル・ストリートのサルヒ一家`
  },
  {
    chapter: 6,
    jpPage: 210,
    enPage: 163,
    enTitle: `The recovery position`,
    jpTitle: `回復体位`
  },
  {
    chapter: 6,
    jpPage: 211,
    enPage: 163,
    enTitle: `Hong Kong report on SIDS`,
    jpTitle: `香港のグループによる乳幼児突然死症候群(SIDS)の報告書`
  },
  {
    chapter: 7,
    jpPage: 219,
    enPage: 169,
    enTitle: `The sense of superiority`,
    jpTitle: `優越感`,
    constructionId: 'fdes'
  },
  {
    chapter: 7,
    jpPage: 220,
    enPage: 170,
    enTitle: `World Health Chart over 200 years`,
    jpTitle: `過去200年間の世界保健チャート`
  },
  {
    chapter: 7,
    jpPage: 220,
    enPage: 170,
    enTitle: `Life expectancy 1970--2016: North Africa and Western Europe`,
    jpTitle: `1970年〜2016年の平均寿命: 北アフリカと西ヨーロッパ`
  },
  {
    chapter: 7,
    jpPage: 221,
    enPage: 170,
    enTitle: `Speed of improvement over the decades`,
    jpTitle: `進歩の速度`,
    constructionId: 'edafr2'
  },
  {
    chapter: 7,
    jpPage: 221,
    enPage: 170,
    enTitle: `Child mortality rates for Sub-Saharan Africa and Sweden`,
    jpTitle: `サハラ以南アフリカとスウェーデンの乳幼児死亡率`
  },
  {
    chapter: 7,
    jpPage: 221,
    enPage: 171,
    enTitle: `Progress in China, Bangladesh, and Vietnam`,
    jpTitle: `中国、バングラデシュ、ベトナムの進歩`,
    constructionId: 'mpoco'
  },
  {
    chapter: 7,
    jpPage: 221,
    enPage: 171,
    enTitle: `80 years ago in Sweden and US`,
    jpTitle: `80年前のスウェーデンとアメリカ`
  },
  {
    chapter: 7,
    jpPage: 222,
    enPage: 171,
    enTitle: `Mozambique and India`,
    jpTitle: `モザンビークとインド`
  },
  {
    chapter: 7,
    jpPage: 222,
    enPage: 171,
    enTitle: `Estimates of extreme poverty`,
    jpTitle: `極度の貧困率の推定`
  },
  {
    chapter: 7,
    jpPage: 223,
    enPage: 172,
    enTitle: `IMF forecasts`,
    jpTitle: `国際通貨基金(IMF)による見通し`,
    constructionId: 'eecof'
  },
  {
    chapter: 7,
    jpPage: 224,
    enPage: 174,
    enTitle: `Fertility in Iran`,
    jpTitle: `イランの出生率`,
    constructionId: 'vm2'
  },
  {
    chapter: 7,
    jpPage: 226,
    enPage: 175,
    enTitle: `Classifying major religions`,
    jpTitle: `宗教別のグループ分け`,
    constructionId: 'ereltfr'
  },
  {
    chapter: 7,
    jpPage: 227,
    enPage: [175, 176],
    enTitle: `Graphs: Three groups based on religion`,
    jpTitle: `所得・子供の数・宗教のグラフ`
  },
  {
    chapter: 7,
    jpPage: 226,
    enPage: 175,
    enTitle: `High income means low fertility`,
    jpTitle: `所得が高いほど子供の数は少ない`
  },
  {
    chapter: 7,
    jpPage: [227, 228],
    enPage: 176,
    enTitle: `Swedish values and RFSU`,
    jpTitle: `スウェーデンの価値観と性教育協会 `
  },
  {
    chapter: 7,
    jpPage: 228,
    enPage: 177,
    enTitle: `Asian values`,
    jpTitle: `アジアの価値観`,
    constructionId: 'twmi'
  },
  {
    chapter: 7,
    jpPage: [229, 230],
    enPage: 177,
    enTitle: `Asian University for Women in Bangladesh`,
    jpTitle: `バングラデシュにあるアジア女子大学`
  },
  {
    chapter: 7,
    jpPage: 231,
    enPage: 179,
    enTitle: `Nature reserves`,
    jpTitle: `自然保護区域`
  },
  {
    chapter: 7,
    jpPage: 231,
    enPage: 179,
    enTitle: `Sri Lanka's earliest protected forest`,
    jpTitle: `スリランカの世界初の自然保護区域`
  },
  {
    chapter: 7,
    jpPage: 232,
    enPage: 180,
    enTitle: `Outdated chimpanzee questions`,
    jpTitle: `時代遅れになったチンパンジークイズ`
  },
  {
    chapter: 7,
    jpPage: 233,
    enPage: 180,
    enTitle: `Swedish school system`,
    jpTitle: `スウェーデンの教育システム`
  },
  {
    chapter: 7,
    jpPage: 233,
    enPage: 181,
    enTitle: `Attitudes toward same-sex marriage`,
    jpTitle: `同性婚に対する価値観`
  },
  {
    chapter: 8,
    jpPage: 242,
    enPage: 187,
    enTitle: `Expert forecasts: The single perspective in other books`,
    jpTitle: `専門家による予測: 単純化本能についての関連書籍`
  },
  {
    chapter: 8,
    jpPage: 243,
    enPage: 188,
    enTitle: `Lindau Nobel laureate meeting`,
    jpTitle: `リンダウ・ノーベル賞受賞者会議`
  },
  {
    chapter: 8,
    jpPage: 243,
    enPage: 188,
    enTitle: `Poll results from groups of professionals`,
    jpTitle: `専門家のクイズ結果`
  },
  {
    chapter: 8,
    jpPage: 245,
    enPage: 189,
    enTitle: `Plundered natural resources`,
    jpTitle: `天然資源の濫用`
  },
  {
    chapter: 8,
    jpPage: 248,
    enPage: 192,
    enTitle: `Eradicating one disease at a time`,
    jpTitle: `病気を一網打尽にする`
  },
  {
    chapter: 8,
    jpPage: 249,
    enPage: 193,
    enTitle: `Falling profits of Big Pharma`,
    jpTitle: `大手製薬会社の利益の減少`
  },
  {
    chapter: 8,
    jpPage: 249,
    enPage: 193,
    enTitle: `Education needs electricity`,
    jpTitle: `教育には電気が必要`
  },
  {
    chapter: 8,
    jpPage: 254,
    enPage: 197,
    enTitle: `Chart: Cuba`,
    jpTitle: `キューバのグラフ`
  },
  {
    chapter: 8,
    jpPage: 256,
    enPage: [198, 199],
    enTitle: `Chart: US Health Spendings`,
    jpTitle: `アメリカの医療費のグラフ`,
    constructionId: 'theasp'
  },
  {
    chapter: 8,
    jpPage: 258,
    enPage: 201,
    enTitle: `Democracy Is Not the Single Solution`,
    jpTitle: `民主主義でさえ、それだけではすべてを解決できない`,
    constructionId: 'tgovd'
  },
  {
    chapter: 8,
    jpPage: 258,
    enPage: 201,
    enTitle: `Democracy and progress`,
    jpTitle: `経済成長と民主主義`
  },
  {
    chapter: 9,
    jpPage: 262,
    enPage: 204,
    enTitle: `Neglected diseases`,
    jpTitle: `製薬会社が見向きもしない病気`
  },
  {
    chapter: 9,
    jpPage: 265,
    enPage: 207,
    enTitle: `Systems thinking`,
    jpTitle: `システム思考`,
    constructionId: 'fblame'
  },
  {
    chapter: 9,
    jpPage: 266,
    enPage: 208,
    enTitle: `How UNICEF gets the lowest prices`,
    jpTitle: `ユニセフの低コスト`
  },
  {
    chapter: 9,
    jpPage: 268,
    enPage: 210,
    enTitle: `Gapminder's Ignorance Project`,
    jpTitle: `チンパンジークイズの結果(CNNとBBC)`
  },
  {
    chapter: 9,
    jpPage: 269,
    enPage: 211,
    enTitle: `Poll results`,
    jpTitle: `チンパンジークイズの結果`
  },
  {
    chapter: 9,
    jpPage: [271, 272],
    enPage: 212,
    enTitle: `Why refugees don't fly`,
    jpTitle: `難民が飛行機を使わない理由`,
    constructionId: 'tpref'
  },
  {
    chapter: 9,
    jpPage: 274,
    enPage: 214,
    enTitle: `CO2 emissions by income`,
    jpTitle: `所得ごとの二酸化炭素の排出量`,
    constructionId: 'tco2i'
  },
  {
    chapter: 9,
    jpPage: 275,
    enPage: 216,
    enTitle: `Syphilis`,
    jpTitle: `梅毒`
  },
  {
    chapter: 9,
    jpPage: 276,
    enPage: 216,
    enTitle: `1 billion people and Mao`,
    jpTitle: `毛沢東と10億の人々`
  },
  {
    chapter: 9,
    jpPage: 276,
    enPage: 216,
    enTitle: `Falling birth rates and powerful leaders`,
    jpTitle: `出生率の低下と独裁的な政治指導者`
  },
  {
    chapter: 9,
    jpPage: 276,
    enPage: 217,
    enTitle: `Family planning: Contraceptive usage by Catholics`,
    jpTitle: `カトリック教徒による避妊具の使用`
  },
  {
    chapter: 9,
    jpPage: 278,
    enPage: 218,
    enTitle: `Access to safe abortion`,
    jpTitle: `安全な中絶`
  },
  {
    chapter: 9,
    jpPage: 279,
    enPage: 218,
    enTitle: `Institutions`,
    jpTitle: `社会基盤`,
    constructionId: 'tgovin'
  },
  {
    chapter: 9,
    jpPage: 279,
    enPage: 219,
    enTitle: `The governmental employees who saved the world from Ebola`,
    jpTitle: `世界をエボラから救った政府職員`
  },
  {
    chapter: 9,
    jpPage: 280,
    enPage: 219,
    enTitle: `Thank you, industrial Revolution`,
    jpTitle: `工業化バンザイ`
  },
  {
    chapter: 10,
    jpPage: 286,
    enPage: 223,
    enTitle: `Konzo`,
    jpTitle: `コンゾ`
  },
  {
    chapter: 10,
    jpPage: 288,
    enPage: 225,
    enTitle: `Roadblocks`,
    jpTitle: `道路封鎖`
  },
  {
    chapter: 10,
    jpPage: 290,
    enPage: 227,
    enTitle: `The Urgency Instinct in other books`,
    jpTitle: `焦り本能についての関連書籍`
  },
  {
    chapter: 10,
    jpPage: 290,
    enPage: 227,
    enTitle: `Now or never`,
    jpTitle: `いつやるか？いまでしょ！`
  },
  {
    chapter: 10,
    jpPage: 295,
    enPage: 232,
    enTitle: `The melting ice cap`,
    jpTitle: `減っている氷河`
  },
  {
    chapter: 10,
    jpPage: 296,
    enPage: 232,
    enTitle: `Fresh numbers for GDP and CO2`,
    jpTitle: `GDPと二酸化炭素排出量の最新データ`
  },
  {
    chapter: 10,
    jpPage: 297,
    enPage: 233,
    enTitle: `Climate refugees`,
    jpTitle: `温暖化難民`
  },
  {
    chapter: 10,
    jpPage: 297,
    enPage: 233,
    enTitle: `Climate reductionism and catastrophizing`,
    jpTitle: `温暖化: 単純化と最悪のシナリオ`
  },
  {
    chapter: 10,
    jpPage: 298,
    enPage: 234,
    enTitle: `Ebola`,
    jpTitle: `エボラ`
  },
  {
    chapter: 10,
    jpPage: 302,
    enPage: 237,
    enTitle: `The risk of global pandemic`,
    jpTitle: `感染症の流行リスク`,
    constructionId: 'tgerm'
  },
  {
    chapter: 10,
    jpPage: 303,
    enPage: 238,
    enTitle: `The risk of financial collapse`,
    jpTitle: `金融危機のリスク`,
    constructionId: 'dysec'
  },
  {
    chapter: 10,
    jpPage: 303,
    enPage: 239,
    enTitle: `The risk of World War III`,
    jpTitle: `第三次世界大戦のリスク`,
    constructionId: 'dysso'
  },
  {
    chapter: 10,
    jpPage: 304,
    enPage: 239,
    enTitle: `The risk of climate change and plundering of natural resources`,
    jpTitle: `地球温暖化のリスクと天然資源の濫用`,
    constructionId: 'dysna'
  },
  {
    chapter: 10,
    jpPage: [305, 307],
    enPage: 240,
    enTitle: `The risk of extreme poverty`,
    jpTitle: `極度の貧困のリスク`,
    constructionId: 'furgr'
  },
  {
    chapter: 11,
    jpPage: 315,
    enPage: 247,
    enTitle: `Teachers`,
    jpTitle: `教師たち`
  },
  {
    chapter: 11,
    jpPage: 318,
    enPage: 250,
    enTitle: `Business`,
    jpTitle: `ビジネス`
  },
  {
    chapter: 11,
    jpPage: 319,
    enPage: 251,
    enTitle: `Diversified economies`,
    jpTitle: `経済の多様化`,
    constructionId: 'x4'
  },
  {
    chapter: 11,
    jpPage: 320,
    enPage: 252,
    enTitle: `Speling miskates`,
    jpTitle: `スペルミス (Speling mistakes)`
  },
  {
    chapter: 11,
    jpPage: 321,
    enPage: 252,
    enTitle: `Constructive news`,
    jpTitle: `前向きなニュース`
  },
  {
    chapter: 11,
    jpPage: 322,
    enPage: 253,
    enTitle: `Local ignorance and data`,
    jpTitle: `ローカルな知識不足とデータ`
  },
  {
    section: '最後に',
    chapter: '最後に',
    jpPage: 1000,
    enTitle: 'Free global development data',
    jpTitle: '最後に: グローバルな開発に関する無料データ',
    permalink: 'final-note'
  }
]

const errata = [
  {
    jpPage: 85,
    listRow: 1
  }
]

const {object: sourcesObject, grouped: groupedSources} = process(sources)
const {object: errataObject, grouped: groupedErrata} = process(errata)

fs.writeFileSync('./src/lib/sources-object.json', sourcesObject)
fs.writeFileSync('./src/lib/grouped-sources.json', groupedSources)
fs.writeFileSync('./src/lib/errata-object.json', errataObject)
fs.writeFileSync('./src/lib/grouped-errata.json', groupedErrata)
