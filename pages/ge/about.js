import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Abt from '../../data/data'
import Staff from '../../comp/About-page/Staff'
import Title from '../../comp/SEO/title'
import Footer from '../../comp/Footer/Footer'
import Switcher from '../../comp/LangSwitcher/Switcher'
// import Title from '../../comp/SEO/title'
const About = () => {
    return (
        <>
        <Title title="Georgian Liberty | About Us"
         meta="Find out more about our movement and share your thoughts about our initiative of taking action against illegal occupation." />
        <div className="about-wrapper">
          <Menu LANG="Ge"/>
          <Switcher title="EN" link="/en/about"/>
          <Title title="About" />
            <div className="container-fluid">
                <div className="container mb-5">
                    <h1 className="abt-title mb-5" data-aos="fade-down">ჩვენ შესახებ</h1>
                    <p className="abt-text" data-aos="fade-down">{Abt[2]}<span className="abt-red">{Abt[3]}</span></p>
                </div>
                <Staff />
                <Footer main="Stand Against Illegal occupation" copyright="Copyright 2021 © Georgian Liberty"/>
            </div>
        </div>
        </>
    )
}
export default About