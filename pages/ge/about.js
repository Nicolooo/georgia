import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Abt from '../../data/data'
import Staff from '../../comp/About-page/Staff'
import Title from '../../comp/SEO/title'
import Footer from '../../comp/Footer/Footer'
import Switcher from '../../comp/LangSwitcher/Switcher'
const About = () => {
    return (
        <div className="about-wrapper">
          <Menu LANG="Ge" />
          <Switcher title="EN" link="/en/about"/>
          <Title title="About" />
            <div className="container-fluid">
                <div className="container">
                    <h1 className="abt-title" data-aos="fade-down">About Us</h1>
                    <p className="abt-text" data-aos="fade-down">{Abt[2]}<span className="abt-red">{Abt[3]}</span></p>
                </div>
                <Staff />
                <Footer main="Stand Against Illegal occupation" copyright="Copyright 2021 © Georgian Liberty"/>
            </div>
        </div>
    )
}
export default About