import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Switcher from '../../comp/LangSwitcher/Switcher'
import Storage from '../../data/Content'
import Share from '../../comp/SEO/share'
import Title from '../../comp/SEO/title'
const measme = () => {
    return (
        <>
        <Title title="1921" />
            <Menu />
            <Switcher title="Ge" link="/ge/1921"/>
        <div className="abkhazia-wrapper container">
            <div className="abkhazia-title row"> 
                <h1 className='page-header'>1921</h1>
                <p className="timeline-shorts">
                    {Storage[1921].text}                    
                </p>
            </div>
            <Share url="/en/1921" />
        </div>
        </>
    )
}

export default measme
