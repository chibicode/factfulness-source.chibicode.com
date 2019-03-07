import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      <H.FB pageNumber={364}>
        東日本大震災のデータは
        <H.A href="https://gapm.io/xjapan">
          警視庁(National Police Agency of Japan)
        </H.A>
        と<H.A href="https://gapm.io/xjap">Ichiseki(2013)</H.A>
        によるもの。警視庁によれば、2017年12月時点での東日本大震災の死亡者数は1万5894人で、行方不明者数は2546人。
        <H.A href="https://gapm.io/xfuk">Tanigawa et al.(2012)</H.A>
        によると、特に病状が重かった61人の後期高齢者は避難中か避難直後に亡くなった。さらにIchisekiによると、高齢者を多く含む約1600人が避難生活中に亡くなった。
      </H.FB>
    </p>
    <p>
      放射線被ばくで亡くなった人はいない。世界保健機関は「死亡率の微増はあるかもしれないが、それは非常に少数の人々に限られるだろう」と結論づけた。
    </p>
    <p>
      <H.FB pageNumber={364}>
        Pew[1]が2012年に行った調査によると、日本人の76%が福島産の食べ物は危険だと答えた。
      </H.FB>
      John Shroder著
      <H.A href="https://www.elsevier.com/books/hazards-risks-and-disasters-in-society/shroder/978-0-12-396451-9">
        "Hazards, Risks, and Disasters in Society" (2014)
      </H.A>
      には、「福島」という単語自体にまつわる風評被害について書かれている。
    </p>
    <H.BlockAddition>
      <p>
        <H.BlockAdditionHeader />
        上記のIchisekiの論文はこちらの警視庁の資料を引用している:「
        <H.A href="http://www.reconstruction.go.jp/topics/4.siryou3.pdf">
          東日本大震災における震災関連死の死者数
        </H.A>
        」(2012年3月31日までに把握できた数)。この資料の中で、「震災関連死の死者」は「東日本大震災による負傷の悪化等により亡くなられた方で、災害弔慰金の支給等に関する法律に基づき、当該災害弔慰金の支給対象となった方」と定義されている。
      </p>
      <p>
        上記の資料は震災から1年までに把握できた震災関連死についてだ。その後については、こちらの記事が参考になる:「
        <H.A href="https://synodos.jp/fukushima_report/21544">
          東日本大震災における震災関連死の数はどのくらいか？
        </H.A>
        」。記事には以下のように書かれている:
      </p>
      <hr />
      <p>
        <H.A href="http://www.reconstruction.go.jp/topics/main-cat2/sub-cat2-6/20170630_kanrenshi.pdf">
          復興庁の発表
        </H.A>
        によると、2018年3月31日現在で、震災関連死の数は全国で3676人(前年から31人増加)です。そのうち、2227人(前年から27人増加)が福島県です。
      </p>
      <p>
        (中略)また、福島県における東日本大震災と福島第一原発事故直後の震災関連死の原因としては、原発事故直後の避難所生活の肉体・精神的疲労(約3割)、避難所などへの移動中の肉体・精神的疲労(約2割)、病院の機能停止による初期治療の遅れなど(約2割)があげられています。(2012年8月「震災関連死に関する検討会」復興庁
      </p>
      <p>
        また、
        <H.A href="https://www.mhlw.go.jp/file/06-Seisakujouhou-12200000-Shakaiengokyokushougaihokenfukushibu/h27kakutei-shinsai_3.pdf">
          内閣府自殺対策推進室
        </H.A>
        によると、岩手県、宮城県、福島県の3県の震災関連の自殺者は、2011年6月から2015年12月末現在で155人。2011年には宮城県で22人、岩手県で17人でしたが、2015年には宮城県で1人、岩手県で3人に減りました。しかし福島県は、2011年には10人、2015年には19人と増えています。3県全体の自殺者の半数以上を福島県が占めている状況です。
      </p>
    </H.BlockAddition>
  </>
)
