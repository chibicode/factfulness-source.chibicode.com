import React, {Fragment} from 'react'
import pagedSources from '../lib/paged-sources'
import Card from './card'
import IntroHero from './intro-hero'
import IntroDisclaimer from './intro-disclaimer'
import SectionHeader from './section-header'
import ContentCardWrapper from './content-card-wrapper'

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
      {pagedSources.map((data, i) => {
        const nextSection =
          data.section ||
          (data.chapter === 'イントロダクション'
            ? data.chapter
            : `第${data.chapter}章`)
        return (
          <Fragment key={data.permalink}>
            {(() => {
              if (lastSection !== nextSection) {
                lastSection = nextSection
                return <SectionHeader>{lastSection}</SectionHeader>
              }
            })()}
            <ContentCardWrapper
              data={data}
              isLast={i === pagedSources.length - 1}
            />
          </Fragment>
        )
      })}
    </>
  )
}

export default Main
