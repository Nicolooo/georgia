import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Title from '../../comp/SEO/title'
import Switcher from '../../comp/LangSwitcher/Switcher'
import { Coffee }  from 'react-feather'
const J = () => {
    //  To do: Fetch API Of Careers avalable
    return (
        <>
        <Title title="Career"/>
        <Menu />
        <Switcher title="Ge" link="/ge/career"/>
        <div className="career-cont">
            <h2 className="career-title">Careers At Georgian Liberty</h2>
                <div className="career-ikonka"><Coffee/></div>
        </div>
        </>
    )
}

export default J