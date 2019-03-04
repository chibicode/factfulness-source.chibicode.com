import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <H.GraphThumbnail src="/static/images/32-graphs/g1.png" />
    <p>
      強制労働が合法である国の数を算出するにあたって、さまざまな指標を参考にした。たとえば、強制労働や農奴制を禁止する法律や憲法が無く、国連の強制労働関連条約に署名していないのであれば、強制労働が合法だといえる。
    </p>
    <p>
      また、強制労働を禁止する法律があっても、それが形骸化している場合もある。強制労働をさせているとして訴えられた国有企業があり、
      <H.A href="https://www.gapminder.org/data/documentation/legal-slavery/#ilo">
        ILO(国際労働機関)
      </H.A>
      がそれを調査することを許可されていない場合も、国の法律がどうであれ、強制労働が合法だといえる。
    </p>
    <p>
      法律があることと、実際に施行されていることには大きな違いがある。これはどの法律でも言えることだが、法の執行機関(警察)が機能していなければ意味がない。だから、グラフ上の数字が必ずしも強制労働の現実を的確に表しているわけではない。
      <H.A href="http://gapm.io/xilonkorea">北朝鮮</H.A>、
      <H.A href="http://www.ilo.org/dyn/normlex/en/f?p=1000:11200:0::NO:11200:P11200_COUNTRY_ID:103551">
        トルクメニスタン
      </H.A>
      、
      <H.A href="https://www.ilo.org/dyn/normlex/en/f?p=1000:11200:0::NO:11200:P11200_COUNTRY_ID:103538">
        ウズベキスタン
      </H.A>
      では、強制労働を廃止するための努力がされていない。
      <H.Addition>
        <H.A href="https://www.gapminder.org/factfulness-book/notes/">
          原文では
        </H.A>
        ウズベキスタンのかわりにタジキスタンと書かれていたが、
        <H.A href="https://www.gapminder.org/data/documentation/legal-slavery/">
          こちらの詳細ページ
        </H.A>
        ではウズベキスタンのILOのリンクが貼られていることから、正しくはウズベキスタンだと思われる。
      </H.Addition>
    </p>
    <p>
      強制労働が廃止された日付は、法律が施行された日付や憲法が改正された日付、
      <H.A href="https://www.gapminder.org/data/geo/">
        国連が承認している195カ国
      </H.A>
      が以下の
      <H.A href="https://treaties.un.org/pages/ViewDetails.aspx?src=TREATY&mtdsg_no=XVIII-2&chapter=18&clang=_en">
        国連の条約
      </H.A>
      に署名した日付を利用している:
    </p>
    <ul>
      <li>1926年の奴隷条約</li>
      <li>
        <H.A href="http://www.gapm.io/xiloflc">
          1930年の強制労働条約(第29号)
        </H.A>
      </li>
      <li>
        <H.A href="http://www.gapm.io/xilola">
          1957年の強制労働廃止条約(第105号)
        </H.A>
      </li>
    </ul>
    <p>
      各国が強制労働を禁止する法律や憲法を定めた日付はクイーンズ大学ベルファストのJean
      AllainとDr. Marie Lynchがまとめた
      <H.A href="https://www.qub.ac.uk/slavery/?page=countries">
        Slavery in Domestic Legislation
      </H.A>
      によるもの。1950年以前の過去のデータは
      <H.A href="http://www.gapm.io/xwiki1">Wikipedia[1]</H.A>によるもの。
    </p>
    <p>
      2018年には世界のすべての政府の法律か憲法において、強制労働を禁止する文言が掲載されている。だが、いまだに一部の国で政府自身が強制労働を行っている。
      <H.A href="http://www.antislavery.org/">Anti-Slavery International</H.A>
      という団体は、
      <H.A href="https://www.antislavery.org/take-action/campaigns/end-uzbek-cotton-crimes/">
        トルクメニスタンとウズベキスタンでの国有綿産業における強制労働について言及している
      </H.A>
      。特に毎年10月の収穫シーズンになると、強制労働が蔓延るとのこと。また、北朝鮮の強制労働キャンプも、頻繁に取り上げられている。ILOは、これらの国では政府と共同での実態調査が難しいとしている。よって、わたしたちはこの3カ国は強制労働が「実質的に合法」だとしている。
    </p>
    <p>
      それ以外の「強制労働が合法な国」の数は、強制労働を法的に禁止した日付をもとに算出している。
      <H.A href="http://www.gapm.io/doc_lslave">
        強制労働についてさらに詳しくはこちら
      </H.A>
      。
    </p>
    <H.BlockAddition>
      <p>
        <H.BlockAdditionHeader />
        この脚注が書かれた後の2018年11月、ILOは「
        <H.A href="https://www.ilo.org/tokyo/information/pr/WCMS_651217/lang--ja/index.htm">
          ウズベキスタンの綿花畑における強制労働・児童労働の撤廃に向けて大きな進展
        </H.A>
        」という記事を公開した。
      </p>
      <p>
        実態調査には政府は関与せず、「できるだけ高い完全無欠性を確保するために全地球測位システム(GPS)によって座標を無作為に生成し、ILOの専門家らが次の目的地に向かう直前に手渡され」たとのとのこと。ILOは「1万1000人を予告なく単独で訪問して話を聞きました。モニタリングを終え、監視員らは強制労働がほとんどなくなっているのを見出しました。2018年の木綿収穫に携わった人の93％が任意参加者であり、かつて見られた学生・生徒、教員、医師、看護師の体系的な募集・採用はありませんでした」としている。
      </p>
    </H.BlockAddition>
    <H.GraphExplanation />
  </>
)
