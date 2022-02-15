import React from "react"
import Short from '../../comp/About/short'
import Footer from '../../comp/Footer/Footer'
import Headline from '../../comp/Headline/Headline'
import Hero from '../../comp/Hero/Hero'
import Inv from '../../comp/Inv/Inv'
import Menu from '../../comp/Menu/Menu'
import Title from '../../comp/SEO/title'
import Hrid from '../../comp/Grid-Heroes/grid'
import Switcher from '../../comp/LangSwitcher/Switcher'
// import Section from "../../comp/NewsHome/Section"
import Slider from "../../comp/Slider/Modal"
const slideData = [
  {
    index: 0,
    headline: 'Russian Anexation',
    qve: "1801",
    link: '/en/1801',
    button: 'Learn More',
    src: 'https://raw.githubusercontent.com/Nicolooo/Georgianlibertycontent/main/1801.webp'
  },
  {
    index: 1,
    headline: 'Independence Day',
    qve: '1918',
    link: '/en/1918',
    button: 'Learn More',
    src: 'https://raw.githubusercontent.com/Nicolooo/Georgianlibertycontent/main/1918.webp'
  },
  {
    index: 2,
    headline: 'Red Army insavion',
    qve: '1921',
    link: '/en/1921',
    button: 'Learn More',
    src: 'https://raw.githubusercontent.com/Nicolooo/Georgianlibertycontent/main/2008.webp'
  },
  {
    index: 3,
    headline: 'Tbilisi Massacre',
    qve: '1989',
    button: 'Learn More',
    link: '/en/1989',
    src: 'https://raw.githubusercontent.com/Nicolooo/Georgianlibertycontent/main/1989-1.webp'
  },
  {
    index: 4,
    headline: 'Abkhazian War',
    qve: '1992',
    button: 'Learn More',
    link: '/en/abkhazia',
    src: 'https://raw.githubusercontent.com/Nicolooo/Georgianlibertycontent/main/1992.webp'
  },
  {
    index: 5,
    headline: 'Russo-georgian War',
    qve: '2008',
    button: 'Learn More',
    link: '/en/samachablo',
    src: 'https://raw.githubusercontent.com/Nicolooo/Georgianlibertycontent/main/2008.webp'
  }
]
export default function Home() {
  const text = "„Georgian Liberty“ არის არაკომერციული, არასამთავრობო ორგანიზცია, რომელიც 2021 წლის სექტემბერში სამმა მოზარდმა დააარსა. ჩვენი მიზანია ცნობადობის ამაღლება კონფლიქტურ და ოკუპირებულ ტერიტორიებთან დაკავშირებით, როგორც ლოკალურ, ასევე გლობალურ მასშტაბზე. ";
  return (
    <div>
      <Title title="Georgian Liberty"/>
      <Menu LANG='ge' />
      <Switcher title="Ge" link="/ge"/>
      <Hero />  
      <Short title="პროექტის შესახებ" p={text} link="იხილეთ მეტი" hrf="/en/about"/>
      <Headline title="TIMELINE"/>
      <Slider heading="Slider" slides={slideData} />
      <Inv LinkF="/en/interviews" />
      <Hrid />
      <Switcher title="Ge" link="/ge"/>
      <Footer main="Stand Against Illegal occupation" copyright="Copyright 2021 © Georgian Liberty"/>
    </div>
  )
}
