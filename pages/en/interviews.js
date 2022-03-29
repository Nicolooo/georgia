import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Title from '../../comp/SEO/title'
import Switcher from '../../comp/LangSwitcher/Switcher'
const Video = ({link,title,desc})=>{
    return(
        <>
        <div className='inter-video'>
            <iframe width="760" height="415" src={link} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video-inter"></iframe>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        </>
    )
}
export default function interviews(){
    return(
        <>
        <Title title='Home' />
        <Menu LANG=''/>
        <Switcher title='Ge' link='/ge'/>
        <h1 className='abt-title'>Interviews</h1>
        <div className='inter-wrapper'>
            <Video link="https://www.youtube.com/embed/R3zIJ01-Vt8" title="Mirza Malazonia" desc="participant of the Georgian-Russo war"/>
        </div>
        </>
    )
}