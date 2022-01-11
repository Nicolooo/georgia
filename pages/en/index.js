import Short from '../../comp/About/short'
import Footer from '../../comp/Footer/Footer'
import Headline from '../../comp/Headline/Headline'
import Hero from '../../comp/Hero/Hero'
import Inv from '../../comp/Inv/Inv'
import Map from '../../comp/Map/Map'
import Menu from '../../comp/Menu/Menu'
import Title from '../../comp/SEO/title'
import Hrid from '../../comp/Grid-Heroes/grid'
import Switcher from '../../comp/LangSwitcher/Switcher'
export default function Home() {
  const text = "Georgian Liberty is a non-profit, non-governmental organization founded in September 2021 by three teenagers. Our goal is to raise awareness about conflict and occupied territories in Georgia, both locally and globally.";
  return (
    <div>
      <Title title="Georgian Liberty"/>
      <Menu LANG='En' />
      <Switcher title="Ge" link="/ge"/>
      <Hero />  
      <Short title="About The Project" p={text} link="Learn More"/>
      <Headline title="OCCUPIED TERRITORIES"/>
      <Map />
      <Inv LinkF="/en/interviews" />
      <Hrid />
      <Switcher title="Ge" link="/ge"/>
      <Footer main="Stand Against Illegal occupation" copyright="Copyright 2021 © Georgian Liberty"/>
    </div>
  )
}
