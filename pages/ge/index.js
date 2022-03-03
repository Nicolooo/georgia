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
import Slider from "../../comp/Slider/Modal"
const slideData = [
  {
    index: 0,
    headline: 'რუსული ანექსაცია',
    qve: "1801",
    link: '/en/1801',
    button: 'Learn More',
    src: '/1801.jpeg',
  },
  {
    index: 1,
    headline: 'დამოუკიდებლობის აღდგენა',
    qve: '1918',
    link: '/en/1918',
    button: 'Learn More',
    src: '/1921.jpg'
  },
  {
    index: 2,
    headline: 'წითელი არმიის შემოსვლა',
    qve: '1921',
    link: '/en/1921',
    button: 'Learn More',
    src: '/1918.jpg'
  },
  {
    index: 3,
    headline: '9 აპრილი',
    qve: '1989',
    button: 'Learn More',
    link: '/en/1989',
    src: '/1989.jpg'
  },
  {
    index: 4,
    headline: 'აფხაზეთის ომი',
    qve: '1992',
    button: 'Learn More',
    link: '/en/abkhazia',
    src: '/1992.png'
  },
  {
    index: 5,
    headline: 'ქართულ-რუსული ომი',
    qve: '2008',
    button: 'Learn More',
    link: '/en/samachablo',
    src: '/2008.webp'
  }
]
export default function Home() {
  const text = "„Georgian Liberty“ არის არაკომერციული, არასამთავრობო ორგანიზცია, რომელიც 2021 წლის სექტემბერში სამმა მოზარდმა დააარსა. ჩვენი მიზანია ცნობადობის ამაღლება კონფლიქტურ და ოკუპირებულ ტერიტორიებთან დაკავშირებით, როგორც ლოკალურ, ასევე გლობალურ მასშტაბზე. ";
  return (
    <div>
      <Title title="Georgian Liberty"/>
      <Menu LANG='Ge' />
      <Hero />  
      <Short title="პროექტის შესახებ" p={text} link="იხილეთ მეტი" hrf="/ge/about"/>
      <Headline title="თაიმლაინი"/>
      <Slider heading="Slider" slides={slideData} />
      <Inv LinkF="/ge/interviews" title="ინტერვიუები"/>
      <Hrid LANG="Ge" />
      <Switcher title="EN" link="/en"/>
      <Footer main="Stand Against Illegal occupation" copyright="Copyright 2021 © Georgian Liberty"/>
    </div>
  )
}
