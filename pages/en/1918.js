import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Switcher from '../../comp/LangSwitcher/Switcher'
import Share from '../../comp/SEO/share'
import Title from '../../comp/SEO/title'
import Next from '../../comp/next/yea'
import Image from 'next/image'
const Meore = () => {
    const linkz = {
        first_title: "1921",
        first_link: "/en/1921",
        second_title: "1801",
        second_link: "/en/1801",
    }
    return (
        <>
       <Title title="Georgian Liberty | 1918" meta="The second half of the 1980s was quite turbulent for the Soviet Union. The events that happened on the April of 9th of the 1989 were inevitable." />
            <Menu />
            <Switcher title="Ge" link="/ge/1989"/>
        <div className="abkhazia-wrapper container">
            <div className="abkhazia-title row"> 
                <div className="april-header">
                    <h1 className="april-main-title">independance Day</h1>
                    <h3 className="april-main-sub">26 May, 1918</h3>
                </div>
                <span className="timeline-shorts">
                After the February Revolution of 1917, Russia was governed by an interim government. By the decision of the Provisional Government, the management of the Transcaucasus was entrusted to a special committee of the Transcaucasus – Ozakom. However, Ozakom lost power after the Bolshevik Revolution in Russia in October 1917 and the overthrowing of the interim government. On November 15, 1917, Ozakom took over the functions of a new body of the regional government – The Transcaucasian Commissariat. With the establishment of the Commissariat, Transcaucasia officially separated from Soviet Russia.
                <div className="jigari"></div>
                <div className="april-main-photo">
                    <Image src={'/1918.jpg'} height={500} width={700} alt="April Image"/>
                </div>
                <div className="jigari"></div>
                the Transcaucasian Commissariat convened the Transcaucasian Seim, which was a representative body of the Transcaucasian countries and was headed by Nikoloz Chkheidze. It was the Transcaucasian Seim that decided on April 22, 1918, announcing the creation of the Transcaucasian Democratic Federal Republic. It was an attempt to unite the three states, Georgia, Armenia, and Azerbaijan, led by Akaki Chkhenkeli. Unfortunately, for a number of internal and foreign political reasons, the federation was unable to perform its functions, and on May 26, 1918, the Transcaucasian Seim declared its self-liquidation and, with it, the liquidation of the Democratic Federal Republic.
                <div className="jigari"></div>
                <div className="april-main-photo">
                </div>
                <div className="jigari"></div>
                On the same day, at 4:50 a.m. on May 26, 1918, a sitting of the Georgian National Council chaired by Noe Jordania opened at the former Palace of the Caucasus Crown Prince in Tbilisi. He addressed the audience, after which he read the “Act of Independence of Georgia.” From that moment on, Georgia declared its independence and planned to take its place in the Commonwealth of Independent States as a full-fledged, sovereign democratic republic.
                </span>
                <div className="jigari"></div>
                <div className="jigari"></div>
            </div>
            <Next options={linkz} />
            <Share url="/en/1989" title="Share the Article" cite1="Cite" cite2="1989.” Georgian Liberty | 1989, September 27, 2021.  https://www.georgianliberty.com/en/1989,           '"/>
        </div>
        </>
    )
}

export default Meore
