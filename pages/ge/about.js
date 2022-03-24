import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Abt from '../../data/data'
import Staff from '../../comp/About-page/Staff'
import Title from '../../comp/SEO/title'
import Footer from '../../comp/Footer/Footer'
import Switcher from '../../comp/LangSwitcher/Switcher'
import Partners from '../../comp/About-page/Partners'
const About = () => {
    const pepo = {'title': "Our Team", 'thx': "Special Thanks to"}
    return (
        <>
        <Title title="Georgian Liberty I ჩვენ შესახებ"
         meta="გაიგეთ მეტი ჩვენი მოძრაობის შესახებ და გაგვიზიარეთ თქვენი აზრი ჩვენი ინიციატივისა და პროექტის შესახებ." />
        <div className="about-wrapper">
          <Menu LANG="Ge"/>
          <Switcher title="EN" link="/en/about"/>
            <div className="container-fluid">
                <div className="container mb-5 about-wr">
                    <h1 className="abt-title mb-5" data-aos="fade-down">ჩვენ შესახებ</h1>
                    <p className="abt-text" data-aos="fade-down">
                        {Abt[4]}
                        <div className="jigari"></div>
                        {Abt[5]}
                        <div className="jigari"></div>
                        {Abt[6]}
                        <span className="abt-red">
                            {Abt[7]}
                        </span>
                    </p>
                </div>
                <Staff ok="Ge"/>
                <Partners she="ge" look="პარტნიორები"/>
                <Footer main="Stand Against Illegal occupation" copyright="Copyright 2021 © Georgian Liberty"/>
            </div>
        </div>
        </>
    )
}
export default About