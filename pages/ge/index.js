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
import Homea from "../../comp/stats/home"
const slideData = [
  {
    index: 0,
    headline: 'რუსული ანექსაცია',
    qve: "1801",
    link: '/ge/1801',
    button: 'იხილეთ მეტი',
    src: '/1801.jpeg',
  },
  {
    index: 1,
    headline: 'დამოუკიდებლობის აღდგენა',
    qve: '1918',
    link: '/ge/1918',
    button: 'იხილეთ მეტი',
    src: '/1921.jpg'
  },
  {
    index: 2,
    headline: 'წითელი არმიის შემოსვლა',
    qve: '1921',
    link: '/ge/1921',
    button: 'იხილეთ მეტი',
    src: '/1918.jpg'
  },
  {
    index: 3,
    headline: '9 აპრილი',
    qve: '1989',
    button: 'იხილეთ მეტი',
    link: '/ge/1989',
    src: '/1989.jpg'
  },
  {
    index: 4,
    headline: 'აფხაზეთის ომი',
    qve: '1992',
    button: 'იხილეთ მეტი',
    link: '/ge/abkhazia',
    src: '/1992.png'
  },
  {
    index: 5,
    headline: 'რუსეთ-საქართველოს ომი',
    qve: '2008',
    button: 'იხილეთ მეტი',
    link: '/ge/samachablo',
    src: '/2008.webp'
  }
]
const tt = {
  "counts": [
      {
          "id": "001",
          "label": " ლტოლვილი",
          "number": "440.000+",
          "duration": "2"
      },
      {
          "id": "002",
          "label": "გარდაცვლილი",
          "number": "5.000+",
          "duration": "2"
      },
      {
          "id": "003",
          "label": "დაჭრილი",
          "number": "10.000+",
          "duration": "2"
      },
     
  ]
}
export default function Home() {
  const text = "„Georgian Liberty“ არის არაკომერციული, არასამთავრობო ორგანიზცია, რომელიც 2021 წლის სექტემბერში სამმა მოზარდმა დააარსა. ჩვენი მიზანია ცნობადობის ამაღლება კონფლიქტურ და ოკუპირებულ ტერიტორიებთან დაკავშირებით, როგორც ლოკალურ, ასევე გლობალურ მასშტაბზე. ";
  return (
    <div>
      <Title title="Georgian Liberty"/>
      <Menu LANG='Ge' />
      <Hero />  
      <Headline title="თაიმლაინი"/>
      <Slider heading="Slider" slides={slideData} />
      <Short title="პროექტის შესახებ" p={text} link="იხილეთ მეტი" hrf="/ge"/>
      <Inv title="ინტერვიუები" ll="იხილეთ მეტი"/>
      <Hrid LANG="Ge" />
      <Homea title="სტატისტიკა" tt={tt}/>
      <Switcher title="EN" link="/en"/>
      <Footer main="Stand Against Illegal occupation" copyright="Copyright 2021 © Georgian Liberty"/>
    </div>
  )
}