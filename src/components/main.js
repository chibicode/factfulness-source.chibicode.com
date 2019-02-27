import React from 'react'
import groupedSources from '../lib/grouped-sources'
import Card from './card'
import IntroHero from './intro-hero'
import IntroDisclaimer from './intro-disclaimer'
import SectionHeader from './section-header'
import ContentCardWrapper from './content-card-wrapper'
import SectionWrapper from './section-wrapper'

const Main = ({type}) => (
  <>
    <Card>
      <IntroHero type={type} />
    </Card>
    <Card>
      <IntroDisclaimer />
    </Card>
    {groupedSources.map((section, i) => {
      const sectionName = section[0].section
      return (
        <SectionWrapper key={sectionName} index={i}>
          <SectionHeader>{sectionName}</SectionHeader>
          {section.map((data, j) => (
            <ContentCardWrapper
              key={data.permalink}
              data={data}
              isLast={
                j === section.length - 1 && i === groupedSources.length - 1
              }
            />
          ))}
        </SectionWrapper>
      )
    })}
  </>
)

export default Main
