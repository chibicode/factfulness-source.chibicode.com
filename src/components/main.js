import React from 'react'
import groupedSources from '../lib/grouped-sources'
import groupedErrata from '../lib/grouped-errata'
import sections from '../lib/sections'
import IntroHero from './intro-hero'
import IntroDisclaimer from './intro-disclaimer'
import SectionHeader from './section-header'
import Card from './card'
import Content from './content'
import SectionWrapper from './section-wrapper'

const Main = ({type}) => {
  const isIndex = type === 'index'
  const items = isIndex ? groupedSources : groupedErrata
  return (
    <>
      <Card>
        <IntroHero type={type} />
      </Card>
      {isIndex ? (
        <Card>
          <IntroDisclaimer />
        </Card>
      ) : (
        <Card>
          <p>...</p>
        </Card>
      )}
      {sections.map((section, i) => {
        return (
          <SectionWrapper key={section} index={i}>
            <SectionHeader>{section}</SectionHeader>
            {items[i] ? (
              items[i].map((data, j) => (
                <Card
                  key={data.permalink}
                  isLast={
                    j === items[i].length - 1 && i === sections.length - 1
                  }
                >
                  <Content {...data} />
                </Card>
              ))
            ) : (
              <Card isLast={i === sections.length - 1}>
                <p>empty</p>
              </Card>
            )}
          </SectionWrapper>
        )
      })}
    </>
  )
}

export default Main
