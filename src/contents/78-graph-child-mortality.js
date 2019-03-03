import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      グラフは10年間の平均の推移を表している(
      <H.A href="http://gapm.io/itfr">Gapminder[6]</H.A>
      )。最後の数字はUN-IGMEが2017年に公開した1990年から2016年の乳幼児死亡率だ。1990年以前の数字は何百もの資料を基にしているが、主に
      <H.A href="http://www.mortality.org/">Child Mortality Estimates</H.A>
      とBrian R. Mitchell著
      <H.A href="https://www.eui.eu/Research/Library/ResearchGuides/Economics/Statistics/DataPortal/IHS">
        International Historical Statistics
      </H.A>
      を参考にし、最終的にグラフがひとつの線になるように調整している。
    </p>
    <ul>
      <li>
        <strong>1800年から1950年:</strong>{' '}
        過去の推定はマティアス・リンドグレーンが
        <H.A href="http://www.mortality.org/">Child Mortality Estimates</H.A>
        をもとにまとめた。また、Brian R. Mitchell著
        <H.A href="https://www.eui.eu/Research/Library/ResearchGuides/Economics/Statistics/DataPortal/IHS">
          International Historical Statistics
        </H.A>
        に載っている「乳児」死亡率のデータを、回帰分析を使って乳幼児死亡率に変換した。分析データは
        <H.A href="http://www.gapm.io/du5mr">
          こちらのページ下部のVersion 7からダウンロードできる
        </H.A>
        。
      </li>
      <li>
        <strong>1950年から2016年:</strong>{' '}
        UN-IGMEはユニセフ、世界保健機関、国連人口部、世界銀行が共同で立ち上げた統計プロジェクトだ。2017年10月17日に、
        <H.A href="http://www.childmortality.org">
          最新の世界の乳幼児死亡率データ
        </H.A>
        が公開された。ほぼ全ての国において1970年からの乳幼児死亡率が掲載されており、半分の国では1950年からのデータが公開されている。
      </li>
      <li>
        また、<H.A href="https://esa.un.org/unpd/wpp">UN-Pop[1]</H.A>,
        <H.A href="https://esa.un.org/unpd/wpp/Download/Standard/Interpolated/">
          世界人口予測 2017 (UN-Pop[1])
        </H.A>
        にも、
        <H.A href="https://esa.un.org/unpd/wpp/DVD/Files/1_Indicators%20(Standard)/EXCEL_FILES/5_Interpolated/WPP2017_INT_F01_ANNUAL_DEMOGRAPHIC_INDICATORS.xlsx">
          世界各国の乳幼児死亡率のデータが掲載されている
        </H.A>
        。
      </li>
    </ul>
    <p>
      1970年から2016年の間は、世界の乳幼児死亡率の推定にUN-IGMEのデータを使っている。他の期間は、上記の資料をもとに国ごとの乳幼児死亡率を算出し、国の人口を加味した平均を求めることで世界の乳幼児死亡率を算出している。
    </p>
    <p>
      世界の乳幼児死亡率を正しく求めるには、世界中で出生数と子供の死亡数を数えないといけない。しかし、世界規模の出生数の統計が無い時期もある。その時は、出生数の代わりに「出生率×人口」を使っている。
    </p>
    <p>
      UN-IGMEのデータがある1970年から2016年の間にも、わたしたちの推定(国ごとの乳幼児死亡率を算出し、国の人口を加味した平均をとる)を当てはめてみた。数値はかなり近かったが、わたしたちの推定のほうがやや高かった。だから、UN-IGMEのグラフとわたしたちの推定のグラフが1990年で交差するように、わたしたちの1990年以前の推定を全体的に少しだけ下げている。この調整については
      <H.A href="http://www.gapm.io/du5mr">こちら</H.A>に詳しく書いている。
    </p>
  </>
)
