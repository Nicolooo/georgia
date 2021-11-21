import Head from 'next/head'
import Short from '../../comp/About/short'
import Hero from '../../comp/Hero/Hero'
import Menu from '../../comp/Menu/Menu'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <Hero />
      <Short title="პროექტის შესახებ" p="Georgian Liberty“ არის არაკომერციული, არასამთავრობო ორგანიზცია, რომელიც 2021 წლის სექტემბერში სამმა მოზარდმა დააარსა. ჩვენი მიზანია ცნობადობის ამაღლება კონფლიქტურ და ოკუპირებულ ტერიტორიებთან დაკავშირებით, როგორც ლოკალურ, ასევე გლობალურ მასშტაბზე." link="გაიგე მეტი"/>  
    </div>
  )
}
