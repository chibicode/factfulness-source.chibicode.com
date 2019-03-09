import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g27.png" />
    <p>
      国際自然保護連合(IUCN)が作成したレッドリストには、8万7967種(動物、植物、菌類)が登録されており、絶滅のおそれの度合いが記されている(
      <H.A href="https://gapm.io/xiucnr4">IUCN Red List[4]</H.A>
      )。このうち、2万5062(約285)が「絶滅危惧」とされている(絶滅寸前
      (CR)、絶滅危惧 (EN)、危急 (VU))。
    </p>
    <p>
      多くの種において状況は改善していないが、少なくとも絶滅の危険度が計測されるようになったというのは良いことだ。2000年以降の数字は
      <H.A href="https://gapm.io/xiucnr4">最新のレッドリスト</H.A>によるもの(Red
      List[4])。それ以前のデータは
      <H.A href="https://portals.iucn.org/library/sites/library/files/documents/RL-1986-001.pdf">
        1986年
      </H.A>
      、
      <H.A href="https://portals.iucn.org/library/sites/library/files/documents/RL-1990-001.pdf">
        1990年
      </H.A>
      、
      <H.A href="https://portals.iucn.org/library/sites/library/files/documents/RL-1996-001.pdf">
        1996年
      </H.A>
      のレッドリストを参考にしている。
    </p>
    <p>
      世界ではじめて絶滅危惧種を記録しようとした取り組みは
      <H.A href="http://support.iucnredlist.org/about">
        1959年の"Threatened Mammals Card Index"だ
      </H.A>
      。34の哺乳類のデータを集め、Leofric Boyleの指揮のもとThe Species Survival
      Commissionが記録した。
    </p>
    <p>
      <H.OtherCardLink
        useTitleAsChildren
        permalink="12-fact-question-11-endangered-species"
      />
      も参考のこと。
    </p>
    <H.BlockAddition>
      <p>
        <H.BlockAdditionHeader />
        勘違いしてはいけないポイントだが、国際自然保護連合のレッドリストには、絶滅とはまったく縁がない種も登録されている。だから、「レッドリストに載る数が増える＝悪いこと」ではない。むしろ良いことでしかない。
      </p>
      <p>
        <img src="/static/images/sources/redlist-definitions.png" />
      </p>
      <p>
        上記の画像は「
        <H.A href="https://www.iucnredlist.org/resources/categories-and-criteria">
          IUCNレッドリストカテゴリーと基準 3.1版 改訂2版
        </H.A>
        」からの引用。この図にもあるように、絶滅とはまったく縁がない種は「低懸念」に分類される。
      </p>
      <p>
        たとえばレッドリストには、日本で最もよく見るカラスである「
        <H.A href="https://www.iucnredlist.org/species/103727590/94046488">
          ハシブトガラス
        </H.A>
        」や「
        <H.A href="https://www.iucnredlist.org/species/22706016/118784397">
          ハシボソガラス
        </H.A>
        」も登録されている。もちろん両方とも「低懸念」だ。レッドリストにはなんと「
        <H.A href="https://www.iucnredlist.org/species/136584/4313662">
          人類
        </H.A>
        」も登録されており、もちろん分類は「低懸念」だ。
      </p>
    </H.BlockAddition>
    <H.GraphExplanation />
  </>
)
