import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Switcher from '../../comp/LangSwitcher/Switcher'
import Storage from '../../data/Content'
import Share from '../../comp/SEO/share'
import Title from '../../comp/SEO/title'
const Meore = () => {
    return (
        <>
        <Title title="1918" />
            <Menu />
            <Switcher title="Ge" link="/ge/1918"/>
        <div className="abkhazia-wrapper container">
            <div className="abkhazia-title row"> 
                <h1 className='page-header'>1918</h1>
                <p className="timeline-shorts">
                    {Storage[1918].text}                    
                </p>
            </div>
            <Share url="/en/1918" />
        </div>
        </>
    )
}

export default Meore