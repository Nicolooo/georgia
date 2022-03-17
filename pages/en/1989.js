import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Switcher from '../../comp/LangSwitcher/Switcher'
import Storage from '../../data/Content'
import Share from '../../comp/SEO/share'
import Title from '../../comp/SEO/title'
const merve = () => {
    return (
        <>
        <Title title="1989" />
            <Menu />
            <Switcher title="Ge" link="/ge/1989"/>
        <div className="abkhazia-wrapper container">
            <div className="abkhazia-title row"> 
                <h1 className='page-header'>1989</h1>
                <p className="timeline-shorts">
                    {Storage[1989].text}                    
                </p>
            </div>
            <Share url="/en/1989" title="Share the Article" />
        </div>
        </>
    )
}

export default merve
