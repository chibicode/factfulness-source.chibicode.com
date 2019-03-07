import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.QuizQuote quizNumber={7} />
    <p>
      <H.FB pageNumber={371}>
        正解はC。国際災害データベースによれば、自然災害による年間死者数は過去100年間で75%減少した(
        <H.A href="http://www.emdat.be/">EM-DAT</H.A>
        )。自然災害は年によってばらつきがあるので、それぞれの年ごとに過去10年間の平均を比べている。
      </H.FB>{' '}
      これについて詳しく書かれている第4章では、過去25年間の平均も使っている。
      <H.FB pageNumber={371}>
        過去10年間に(2007年から2016年)、毎年平均8万386人が自然災害で亡くなった。1100年前(1907年から1916年)の32万5742人と比べると、25%になっている。
      </H.FB>
    </p>
    <p>
      さらに、次の2点に注目すると、さらに大きな変化が起きていることがわかる。第一に、過去100年で人口は4倍になった。ということは、人口あたりの死亡者数を見る必要がある。1907年から1916年の間、100万人あたりの死亡者数は181人だった。一方、2007年〜2016年では11人。つまり、100年前の6%になった。
    </p>
    <p>
      第二に、100年前は現在と比べ、災害が起きても初歩的な報道しかできなかった。つまり、昔は多くの災害が見過ごされたり、計上されていなかった可能性がある。
    </p>
    <p>
      国際災害データベースには、1900年以降に起きた8969件の自然災害の死亡者数が記録されている。それには以下のようなカテゴリーがある:
    </p>
    <ul>
      <li>動物による被害</li>
      <li>干ばつ</li>
      <li>地震</li>
      <li>伝染病</li>
      <li>熱波・寒波</li>
      <li>洪水</li>
      <li>霧</li>
      <li>隕石</li>
      <li>害虫被害</li>
      <li>山崩れ</li>
      <li>地滑り</li>
      <li>暴風</li>
      <li>火山の噴火</li>
      <li>森林・原野火災</li>
      <li>その他の災害</li>
    </ul>
    <H.InlineCitation>
      <ul>
        <li>
          <H.A href="http://www.emdat.be/">
            EM-DAT Centre for Research on the Epidemiology of Disasters (CRED).
            The International Disaster Database. Debarati Guha-Sapir, Université
            catholique de Louvain. 2017/11/5閲覧。
          </H.A>
        </li>
      </ul>
    </H.InlineCitation>
  </>
)
