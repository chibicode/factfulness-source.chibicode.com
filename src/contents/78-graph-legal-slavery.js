import React from 'react'
import * as H from '../components/h'

export default () => (
  <>
    <p>
      To count the number of countries where forced labor is legal, we have used
      different indicators. Legal slavery in a country means that there is no
      law or constitution prohibiting forced labor or serfdom, and the country
      hasn't signed the UN conventions banning forced labor. If state owned
      companies or the state itself is accused of practicing forced labor and
      <a href="https://www.gapminder.org/data/documentation/legal-slavery/#ilo">
         ILO
      </a>
       is refused the possibilities to investigate it, the country is considered
      as practising legal slavery, regardless of its official legislation. When
      a country passes a law to make slavery illegal, it doesn't mean that the
      practice has stopped. It is a big difference between abolishing slavery in
      the law and doing so in practice. As with all laws, the enactment relies
      on law enforcement---that is, police intervention. Our counts of legal
      shifts in countries in different years should not be interpreted as
      expressing the extent to which slavery is practiced. Many countries are
      still not taking sufficient action to end the remaining slavery, as is the
      case in <a href="http://gapm.io/xilonkorea">North Korea</a>, 
      <a href="http://www.ilo.org/dyn/normlex/en/f?p=1000:11200:0::NO:11200:P11200_COUNTRY_ID:103551">
        Turkmenistan
      </a>
       and 
      <a href="http://www.ilo.org/dyn/normlex/en/f?p=1000:11200:0::NO:11200:P11200_COUNTRY_ID:103547">
        Tajikistan
      </a>
      . The dates collected of slavery abolishments concern passed laws,
      constitutions or signatures of UN conventions for all 
      <a href="https://www.gapminder.org/data/geo/">
        195 states recognised by the UN
      </a>
      , based on three UN treaties:
    </p>
    <ul>
      <li>The 1926 Slavery Convention</li>
      <li>
        The 1930 Forced Labour Convention (No. 29), see 
        <a href="http://www.gapm.io/xiloflc">www.gapm.io/xiloflc</a>.
      </li>
      <li>
        The 1957 Abolition of Forced Labour Convention (No. 105), see 
        <a href="http://www.gapm.io/xilola">www.gapm.io/xilola</a>.
      </li>
    </ul>
    <p>
      The dates when countries passed domestic laws and constitutions,
      explicitly banning slavery or forced labor, come from the 
      <a href="https://www.qub.ac.uk/slavery/?page=countries">
        Slavery in Domestic Legislation
      </a>
       database, compiled by Jean Allain and Dr. Marie Lynch at Queen's
      University Belfast. Most historic dates of abolishment before 1950 are
      based on Wikipedia[1], see 
      <a href="http://www.gapm.io/xwiki1">www.gapm.io/xwiki1</a>. In 2018 all
      governments have a legal document banning forced labor, but some of them
      seem to be practicing forced labor themselves. An organisation called 
      <a href="http://www.antislavery.org/">www.antislavery.org</a> and others
      report about forced labor commanded by state owned cotton industries in
      Turkmenistan and Uzbekistan, most commonly during cotton harvest in
      October every year. There are, in addition, plenty of reports of forced
      labour in North Korean work camps. In each of these cases, ILO is not
      fully content with the countries' abilities to collaborate in
      investigating these claims. Therefore we decided to mark these countries
      as not having made slavery illegal yet, even if all of these countries
      have signed UN conventions and banned it by their constitution. After
      gathering the earliest date of abolishment for all countries, we could
      count the number of countries that are yet to abolish slavery and forced
      labor for the years 1800--2018. The UN treaty collection is available at
      the 
      <a href="https://treaties.un.org/pages/ViewDetails.aspx?src=TREATY&amp;mtdsg_no=XVIII-2&amp;chapter=18&amp;clang=_en">
        UN treaties website
      </a>
      . For detailed documentation and data behind this graph, visit 
      <a href="http://www.gapm.io/doc_lslave">www.gapm.io/doc_lslave</a>.
    </p>
  </>
)
