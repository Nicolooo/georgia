import React from 'react'
import SEO from '../../comp/SEO/title'
import Heroes from '../../comp/Grid/Heroes'
import Menu from '../../comp/Menu/Menu'
import Switcher from '../../comp/LangSwitcher/Switcher'
const Programs = () => {
    // to do: check Responsive and approve the design
    return (
        <>
        <SEO title="Programs" />
        <Menu LANG='Ge'/>
        <Switcher title="EN" link="/en/programs"/>
        <div className="programs-container">
            <h1 className="programs-headline" data-aos="fade-down">Programs</h1>
            <Heroes />
            </div>
        </>
    )
}

export default Programs
