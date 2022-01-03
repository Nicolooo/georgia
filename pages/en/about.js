import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Abt from '../../data/data'
import Staff from '../../comp/About-page/Staff'
import Title from '../../comp/SEO/title'
const About = () => {
    // To Dos: Resize The text measurements so it fits in perfecly
    return (
        <div className="about-wrapper">
          <Menu />
          <Title title="About" />
            <div className="container-fluid">
                <div className="container">
                    <h1 className="abt-title" data-aos="fade-down">About Us</h1>
                    <p className="abt-text" data-aos="fade-down">{Abt[0]}<span className="abt-red">{Abt[1]}</span></p>
                </div>
                <Staff />
            </div>
        </div>
    )
}
export default About