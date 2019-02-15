import React, {Fragment} from 'react'
import pagedSources from '../lib/paged-sources'
import colors from '../lib/colors'
import Card from './card'
import Content from './content'
import IntroHero from './intro-hero'
import IntroDisclaimer from './intro-disclaimer'
import SectionHeader from './section-header'

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
          <Fragment key={data.permalink}>
            {(() => {
              if (lastSection !== nextSection) {
                lastSection = nextSection
                return (
                  <Card background={colors.green600} foreground="#fff">
                    <SectionHeader>{lastSection}</SectionHeader>
                  </Card>
                )
              }
            })()}
            <Card>
              <Content {...data} />
            </Card>
          </Fragment>
        )
      })}
    </>
  )
}

export default Main
