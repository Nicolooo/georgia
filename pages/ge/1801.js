import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Switcher from '../../comp/LangSwitcher/Switcher'
import Storage from '../../data/Content'
import Share from '../../comp/SEO/share'
import Title from '../../comp/SEO/title'
const pirveli = () => {
    return (
        <>
        <Title title="1801" />
        <Menu LANG="Ge" />
            <Switcher title="en" link="/en/1801"/>
        <div className="abkhazia-wrapper container">
            <div className="abkhazia-title row"> 
                <h1 className='page-header'>1801</h1>
                <p className="timeline-shorts">
                    {Storage[1801].ge}                    
                </p>
            </div>
            <Share url="/en/1801" />
        </div>
        </>
    )
}

export default pirveli
