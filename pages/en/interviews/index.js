import React from 'react'
import Card from '../../../comp/Contact/cards'
import SEO from '../../../comp/SEO/title'
import Menu from '../../../comp/Menu/Menu'
import Footer from '../../../comp/Footer/Footer'
import Switcher from '../../../comp/LangSwitcher/Switcher'
import IntGrid from '../../../comp/interGrid/Grid'
const Interviews = () => {
    return (
        <>
        <SEO title="Georgian Liberty | Interviews" meta="Interviews"/>
        <Menu />
        <Switcher title="Ge" link="/ge/interviews"/>
        <div className="interviews-grid">
            <IntGrid />
        </div>
        <Footer main="Stand Against Illegal occupation" copyright="Copyright 2023 © Georgian Liberty"/>
        </>
    )
}

export default Interviews
