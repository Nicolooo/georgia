import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Switcher from '../../comp/LangSwitcher/Switcher'
import Share from '../../comp/SEO/share'
import Title from '../../comp/SEO/title'
import Next from '../../comp/next/yea'
import Image from 'next/image'
const merve = () => {
    const linkz = {
        first_title: "1992",
        first_link: "/en/abkhazia",
        second_title: "1921",
        second_link: "/en/1921",
    }
    const victims = [
        {
            name: "AZA ADAMIA",
            age: 22,
        },
        {
            name: "NATIA BASHALEISHVILI",
            age: 16,
        },
        {
            name: "TAMUNA DOLIDZE",
            age: 28,
        },
        {
            name: "EKA BEZHASHVILI ",
            age: 15,
        },
        {
            name: "NATO GIORGADZE ",
            age: 23,
        },
        {
            name: "TAMAR CHOVELIDZE",
            age: 16,
        },
        {
            name: "TINA ENUKIDZE",
            age: 70,
        },
        {
            name: "NINO TOIDZE",
            age: 22,
        },
        {
            name: "ZAIRA KIKVIDZE",
            age: 61,
        },
        {
            name: "MANANA LOLADZE",
            age: 34,
        },
        {
            name: "TAMAR MAMULASHVILI",
            age: 50,
        },
        {
            name: "MAMUKA NOZADZE",
            age: 21,
        },
        {
            name: "NANA SAMARGULIANI",
            age: 41,
        },
        {
            name: "SHALVA KVASROLIASHVILI ",
            age: 35,
        },
        {
            name: "MANANA CHKONIA",
            age: 31,
        },
        {
            name: "ELISO CHIPASHVILI ",
            age: 25,
        },
        {
            name: "NODAR JANGIRASHVILI",
            age: 40,
        },
        {
            name: "MZIA CHICHINADZE",
            age: 43,
        },
        {
            name: "MANANA MELKADZE",
            age: 43,
        },
        {
            name: "GIA QARSELADZE",
            age: 25,
        },
        {
            name: "VENERA METREVELI",
            age: 45,
        },

    ]
    return (
        <>
        <Title title="Georgian Liberty | Tbilisi Massacre" meta="The second half of the 1980s was quite turbulent for the Soviet Union. The events that happened on the April of 9th of the 1989 were inevitable." />
            <Menu />
            <Switcher title="Ge" link="/ge/1989"/>
        <div className="abkhazia-wrapper container">
            <div className="abkhazia-title row"> 
                <div className="april-header">
                    <h1 className="april-main-title">April Tragedy</h1>
                    <h3 className="april-main-sub">9 April, 1989</h3>
                </div>
                <span className="timeline-shorts">
                The second half of the 1980s was quite turbulent for the Soviet Union. On the one hand, changes were inevitable, and on the other hand, the central government did not have sufficient legitimacy to implement these changes. Various initiatives of the central government were met with protests by the population of the Union Republics due to the existence of strong national and anti-Soviet movements in these republics. Georgia was no exception. The situation in Georgia became extremely tense in April 1989, which was preceded by the so-called uprising in Abkhazia on March 18 of the same year. Likhni Assembly, to which Likhni’s appeal was received, meant the withdrawal of the Abkhaz ASSR from Georgia. Georgian citizens responded to this appeal with a multi-thousand protest rally on March 25. One of the organizers of this rally was the prominent leader of the National Forces Merab Kostava.
                <div className="jigari"></div>
                <div className="april-main-photo">
                    <Image src={'/april/12963473-10154110996387188-82808.jpg'} height={500} width={700} alt="April Image"/>
                </div>
                <div className="jigari"></div>
                From April 4, 1989, the wave of protests shifted to Tbilisi and the focus changed. Along with the issue of Abkhazia, the rally became sharply anti-Soviet in nature, with protesters demanding the restoration of Georgia’s independence The Soviet authorities decided to take decisive action, and the Politburo decided to move regular and internal troops to Tbilisi. The operation to disperse the rally was led by the commander of the Transcaucasian Military District, Colonel-General Igor Rodionov, and Konstantin Kochetov. Although the protesters had notice of its decision to disperse, they refused to disperse. The operation to disperse the rally began on April 9, at 4 p.m. The protesters were under siege. Armored vehicles were moving in front of the punitive detachment, but the dispersion was carried out by special forces armed with batons and shovels.
                <div className="jigari"></div>
                <div className="april-main-photo">
                    <Image src={'/april/2.jpeg'} height={500} width={700} alt="April Image"/>
                </div>
                <div className="jigari"></div>
                Poison gas was also used during the dispersion of the protest. 19 people died after the raid, 16 of whom were women. More than 2,000 people were poisoned by gas. The tragedy of April 9 turned out to be crucial for the consolidation of the Georgian nation. After the tragedy, the Soviet authorities were unable to rehabilitate it and its fate was decided. One year later, on October 28, 1990, the Supreme Council “Round Table – Free Georgia” led by Zviad Gamsakhurdia won a majority of votes (54%) in the Supreme Council elections. On November 14, the council elected Zviad Gamsakhurdia as a chairman at the first session. Another year later, on March 31, 1991, a referendum was held throughout Georgia to restore Georgia’s independence. The majority of the population supported the restoration of independence for the country, on the basis of which, on April 9, 1991, at 12:30 pm, the Supreme Council of Georgia adopted the Act on the Restoration of State Independence of Georgia.
                </span>
                <div className="jigari"></div>
                <div className="jigari"></div>
                <div className="april-list">
                    <h2 className='april-list-headline'>victims</h2>
                    {
                         victims.map((victim) =>
                    <h4 className="april-list-name" key={victim.name}>{victim.name} - {victim.age} Years old</h4>
                    )}
                </div>
            </div>
            <Next options={linkz} />
            <Share url="/en/1989" title="Share the Article" cite1="Cite" cite2="1989.” Georgian Liberty | 1989, September 27, 2021.  https://www.georgianliberty.com/en/1989,           '"/>
        </div>
        </>
    )
}

export default merve
