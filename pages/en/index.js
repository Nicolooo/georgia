import Head from 'next/head'
import Short from '../../comp/About/short'
import Cta from '../../comp/CTA/Cta'
import Headline from '../../comp/Headline/Headline'
// import Heroes from '../../comp/Grid/Heroes'
import Hero from '../../comp/Hero/Hero'
import Inv from '../../comp/Inv/Inv'
import Map from '../../comp/Map/Map'
import Menu from '../../comp/Menu/Menu'
import Title from '../../comp/SEO/title'
export default function Home() {
  const text = "Georgian Liberty is a non-profit, non-governmental organization founded in September 2021 by three teenagers. Our goal is to raise awareness about conflict and occupied territories in Georgia, both locally and globally.";
  return (
    <div>
      <Title title="Georgian Liberty"/>
      <Menu LANG='En' />
      <Hero />  
      <Short title="About The Project" p={text} link="Learn More"/>
      <Headline title="OCCUPIED TERRITORIES"/>
      <Map />
      <Inv LinkF="/en/interviews" />
    </div>
  )
}
