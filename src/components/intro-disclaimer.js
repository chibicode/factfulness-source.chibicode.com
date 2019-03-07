import React from 'react'
import * as H from './h'
import FeedbackText from './feedback-text'

const IntroDisclaimer = () => (
  <>
    <H.CardHeading>補足事項</H.CardHeading>
    <ul>
      <li>
        これは、ギャップマインダー財団が無償で公開している文章の翻訳です。(ライセンスは
        <H.A href="https://www.gapminder.org/free-material/">CC-BY 4.0</H.A>)
      </li>
      <li>
        <H.A href="https://www.gapminder.org/factfulness-book/notes/">
          原文のウェブ脚注
        </H.A>
        の冒頭には、以下のように書かれています。「このページは未完成です。いまでも連日、本書を読んでくださった方からたくさんの声が届いています。数ヶ月以内に再び更新する予定です」
      </li>
      <li>
        本書の脚注の文章を使っている場合は、
        <H.FB pageNumber={100}>このように下線で記しています</H.FB>
        。下線がない部分は、すべて本書の共訳者の
        <H.A href="http://jp.chibicode.com/">上杉周作</H.A>が訳しました。
      </li>
      <li>
        訳者(上杉周作)による訳註や補足も一部追加しています。その際は
        <H.Addition>「訳註」</H.Addition>または
        <H.Addition>訳者による補足</H.Addition>と明記しています。
      </li>
      <li>
        出典は、本書の「出典」部分に掲載している略称を用いています(
        <H.A href="https://esa.un.org/unpd/wpp">UN-Pop[1]</H.A>など)。
      </li>
      <li>
        <FeedbackText />
      </li>
      <li>
        このページのソースコードは
        <H.A href="https://github.com/chibicode/factfulness-source.chibicode.com">
          GitHubで公開しています
        </H.A>
        。各項目の下にある「変更履歴」から、GitHub上で変更履歴を見ることができます。
      </li>
    </ul>
  </>
)

export default IntroDisclaimer
