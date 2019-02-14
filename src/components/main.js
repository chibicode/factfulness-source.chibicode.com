import React from 'react'
import pagedSources from '../lib/paged-sources'
import colors from '../lib/colors'
import Card from './card'
import Content from './content'
import IntroHero from './intro-hero'
import IntroDisclaimer from './intro-disclaimer'
import BeginNotes from './begin-notes'

const Main = () => {
  let lastSection
  return (
    <>
      <Card>
        <IntroHero />
      </Card>
      <Card>
        <IntroDisclaimer />
      </Card>
      {pagedSources.map(data => {
        const nextSection =
          data.section ||
          (data.chapter === 'イントロダクション'
            ? data.chapter
            : `第${data.chapter}章`)
        return (
          <>
            {(() => {
              if (lastSection !== nextSection) {
                lastSection = nextSection
                return (
                  <Card
                    key={lastSection}
                    background={colors.green600}
                    foreground="#fff"
                  >
                    <BeginNotes>{lastSection}</BeginNotes>
                  </Card>
                )
              }
            })()}
            <Card key={data.permalink}>
              <Content {...data} />
            </Card>
          </>
        )
      })}
    </>
  )
}

export default Main
