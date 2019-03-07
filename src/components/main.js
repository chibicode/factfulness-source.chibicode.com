import React, {useContext} from 'react'
import groupedSources from '../lib/grouped-sources'
import groupedErrata from '../lib/grouped-errata'
import sections from '../lib/sections'
import IntroHero from './intro-hero'
import IntroDisclaimer from './intro-disclaimer'
import SectionHeader from './section-header'
import Card from './card'
import Content from './content'
import SectionWrapper from './section-wrapper'
import ErrataEmpty from './errata-empty'
import IntroC2a from './intro-c2a'
import IntroSourceErrata from './intro-source-errata'
import IntroDocumentation from './intro-documentation'
import {PageContext} from './page'

const Main = () => {
  const {type} = useContext(PageContext)
  const isIndex = type === 'index'
  const items = isIndex ? groupedSources : groupedErrata
  return (
    <>
      <Card>
        <IntroHero />
      </Card>
      {isIndex && (
        <>
          <Card>
            <IntroDisclaimer />
          </Card>
          <Card>
            <IntroDocumentation />
          </Card>
          <Card>
            <IntroSourceErrata />
          </Card>
          <Card>
            <IntroC2a />
          </Card>
        </>
      )}
      {sections(type).map((section, i) => {
        return (
          <SectionWrapper key={section} index={i}>
            <SectionHeader>{section}</SectionHeader>
            {items[section] ? (
              items[section].map((data, j) => (
                <Card
                  key={data.permalink}
                  isLast={
                    j === items[section].length - 1 &&
                    i === sections(type).length - 1
                  }
                >
                  <Content {...data} />
                </Card>
              ))
            ) : (
              <Card isLast={i === sections(type).length - 1}>
                <ErrataEmpty />
              </Card>
            )}
          </SectionWrapper>
        )
      })}
    </>
  )
}

export default Main
