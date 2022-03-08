import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Abt from '../../data/data'
import Staff from '../../comp/About-page/Staff'
import Title from '../../comp/SEO/title'
import Footer from '../../comp/Footer/Footer'
import Switcher from '../../comp/LangSwitcher/Switcher'
const About = () => {
    const pepo = {'title': "Our Team", 'thx': "Special Thanks to"}
    return (
        <>
        <Title title="Georgian Liberty | About Us"
         meta="Find out more about our movement and share your thoughts about our initiative of taking action against illegal occupation." />
        <div className="about-wrapper">
          <Menu />
          <Switcher title="Ge" link="/ge/about"/>
            <div className="container-fluid">
                <div className="container mb-5 about-wr">
                    <h1 className="abt-title mb-5" data-aos="fade-down">About Us</h1>
                    <p className="abt-text" data-aos="fade-down">{Abt[0]}<span className="abt-red">{Abt[1]}</span></p>
                </div>
                <Staff ok="En"/>
                <Footer main="Stand Against Illegal occupation" copyright="Copyright 2021 © Georgian Liberty"/>
            </div>
        </div>
        </>
    )
}
export default About