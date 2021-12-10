import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Headline from '../../comp/About-page/headline'
import Abt from '../../data/data'
import Staff from '../../comp/About-page/Staff'

const About = () => {
    return (
        <div className="about-wrapper">
          <Menu />
            <Headline title="About Us" text={Abt[0]} lnk={Abt[1]}/>
            <Staff />
        </div>
    )
}
export default About