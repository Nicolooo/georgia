import React from "react"
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
import Slider from "../../comp/Slider/Modal"
import Homea from "../../comp/stats/home"
const slideData = [
  {
    index: 0,
    headline: 'Russian Anexation',
    qve: "1801",
    link: '/en/1801',
    button: 'Learn More',
    src: '/1801.jpeg',
  },
  {
    index: 1,
    headline: 'Independence Day',
    qve: '1918',
    link: '/en/1918',
    button: 'Learn More',
    src: '/1921.jpg'
  },
  {
    index: 2,
    headline: 'Red Army Insavion',
    qve: '1921',
    link: '/en/1921',
    button: 'Learn More',
    src: '/1918.jpg'
  },
  {
    index: 3,
    headline: 'Tbilisi Massacre',
    qve: '1989',
    button: 'Learn More',
    link: '/en/1989',
    src: '/1989.jpg'
  },
  {
    index: 4,
    headline: 'Abkhazian War',
    qve: '1992',
    button: 'Learn More',
    link: '/en/abkhazia',
    src: '/1992.png'
  },
  {
    index: 5,
    headline: 'Russo-Georgian War',
    qve: '2008',
    button: 'Learn More',
    link: '/en/samachablo',
    src: '/2008.webp'
  }
]
const tt = {
  "counts": [
      {
          "id": "001",
          "label": " DISPLACED",
          "number": "440.000+",
          "duration": "1"
      },
      {
          "id": "002",
          "label": "DEAD",
          "number": "5.000+",
          "duration": "2"
      },
      {
          "id": "003",
          "label": "WOUNDED",
          "number": "10..000+",
          "duration": "2"
      },
     
  ]
}
export default function Home() {
  const text = "Georgian Liberty is a non-profit, non-governmental organization founded in September 2021 by three teenagers. Our goal is to raise awareness about conflict and occupied territories in Georgia, both locally and globally.";
  return (
    <div>
      <Title title="Georgian Liberty"/>
      <Menu LANG='En' />
      <Hero />
      <Headline title="TIMELINE"/>
      <Slider heading="Slider" slides={slideData} />
      <Short title="About The Project" p={text} link="Learn More" hrf="/en"/>
      <Inv title="Interviews" view="View More"/>
      <Hrid LANG="En"/>
      <Homea title="Statistics" tt={tt}/>
      <Switcher title="GE" link="/ge"/>
      <Footer main="Stand Against Illegal occupation" copyright="Copyright 2021 © Georgian Liberty"/>
    </div>
  )
}
