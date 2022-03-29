import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Switcher from '../../comp/LangSwitcher/Switcher'
import Storage from '../../data/Content'
import Share from '../../comp/SEO/share'
import Title from '../../comp/SEO/title'
import Next from '../../comp/next/yea'
const Meore = () => {
    const linkz = {
        first_title: "1921",
        first_link: "/en/1921",
        second_title: "1801",
        second_link: "/en/1801",
    }
    return (
        <>
        <Title title="Georgian Liberty | Independence Day" meta="The collapse of the Russian Empire meant there would be changes for the neighboring countries including Georgia" />
            <Menu />
            <Switcher title="Ge" link="/ge/1918"/>
        <div className="abkhazia-wrapper container">
            <div className="abkhazia-title row"> 
                <h1 className='page-header'>1918</h1>
                <p className="timeline-shorts">
                After the February Revolution of 1917, Russia was governed by an interim government. By the decision of the Provisional Government, the management of the Transcaucasus was entrusted to a special committee of the Transcaucasus – Ozakom. However, Ozakom lost power after the Bolshevik Revolution in Russia in October 1917 and the overthrowing of the interim government. On November 15, 1917, Ozakom took over the functions of a new body of the regional government – The Transcaucasian Commissariat. With the establishment of the Commissariat, Transcaucasia officially separated from Soviet Russia. 
                <div className="jigari"></div>
                or its part, the Transcaucasian Commissariat convened the Transcaucasian Seim, which was a representative body of the Transcaucasian countries and was headed by Nikoloz Chkheidze. It was the Transcaucasian Seim that decided on April 22, 1918, announcing the creation of the Transcaucasian Democratic Federal Republic. It was an attempt to unite the three states, Georgia, Armenia, and Azerbaijan, led by Akaki Chkhenkeli. Unfortunately, for a number of internal and foreign political reasons, the federation was unable to perform its functions, and on May 26, 1918, the Transcaucasian Seim declared its self-liquidation and, with it, the liquidation of the Democratic Federal Republic.
                <div className="jigari"></div>
                On the same day, at 4:50 a.m. on May 26, 1918, a sitting of the Georgian National Council chaired by Noe Jordania opened at the former Palace of the Caucasus Crown Prince in Tbilisi. He addressed the audience, after which he read the “Act of Independence of Georgia.” From that moment on, Georgia declared its independence and plan to take its place in the Commonwealth of Independent States as a full-fledged, sovereign democratic republic.              
                </p>
            </div>
            <Next options={linkz}/>
            <Share url="/en/1918" title="Share the Article" />
        </div>
        </>
    )
}

export default Meore
