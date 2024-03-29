import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Switcher from '../../comp/LangSwitcher/Switcher'
import Storage from '../../data/Content'
import Share from '../../comp/SEO/share'
import Title from '../../comp/SEO/title'
import Next from '../../comp/next/yea'
import Image from 'next/image'
const measme = () => {
    const linkz = {
        first_title: "1989",
        first_link: "/en/1989",
        second_title: "1918",
        second_link: "/en/1918",
    }
    return (
        <>
         <Title title="Georgian Liberty | 1921" meta="The Democratic Republic of Georgia faced very difficult challenges during the years of independence. In addition to domestic problems, it was constantly engaged in combat operations on various fronts and repelling several attacks. However, 1921 proved to be crucial for the Republic. " />
            <Menu />
            <Switcher title="Ge" link="/ge/1921"/>
        <div className="abkhazia-wrapper container">
            <div className="abkhazia-title row"> 
                <div className="april-header">
                    <h1 className="april-main-title">Red Army Invasion</h1>
                    <h3 className="april-main-sub">1921</h3>
                </div>
                <span className="timeline-shorts">
                The Democratic Republic of Georgia faced very difficult challenges during the years of independence. In addition to domestic problems, it was constantly engaged in combat operations on various fronts and repelling several attacks. However, 1921 proved to be crucial for the Republic. There has been a civil war in Russia since 1917, which did not allow it to wage wars of conquest. However, as soon as the situation stabilized slightly, Russia immediately began to rebuild the borders of the Russian Empire, and part of this plan was the conquest of the Caucasus. In April 1920, the Russian army occupied Azerbaijan. In May Russia invaded the borders of the Democratic Republic of Georgia.
                <div className="jigari"></div>
                <div className="april-main-photo">
                    <Image src={'/1921.jpg'} height={500} width={700} alt="April Image"/>
                </div>
                <div className="jigari"></div>
                The attack was repelled, and on May 7, 1920, a peace treaty was signed between Russia and Georgia. According to the agreement, Soviet Russia recognized Georgia’s independence. Later, in November 1929, the Russian army invaded Armenia, which further complicated the situation in Georgia. Russia launched a decisive attack in February 1921. According to the plan, in Georgia, in Borchaly Uyezd, the so-called “Uprising” was launched. To help this uprising, the 11th Red Army of Soviet Russia invaded the territory of Georgia. The hostilities began on 12 February. To provide a legal justification for the intervention, a telegram was sent to Moscow by the Georgian Revolutionary Committee (Revkom) asking for help. Paradoxically, this request was sent on February 16, when units of the Russian army were already in Georgia.
                <div className="jigari"></div>
                <div className="april-main-photo">
                </div>
                <div className="jigari"></div>
                Despite the unequal forces, the battles were fought with a transient advantage. Complicating matters for Georgia was the fact that various Russian military units were approaching the capital from the south, as well as from Abkhazia and the Dariali gorge. This circumstance made the issue of protecting the capital very difficult. On February 20-21, a large clash took place in the Kojori district, which was repulsed by the Georgian Army and the People’s Guard. However, on February 24, the leadership of the Armed Forces of the Republic of Georgia decided to retreat in the direction of Mtskheta, and on February 25, the Russian Red Army entered Tbilisi.
                <div className="jigari"></div>
                Despite the defeat, the government of the Republic of Georgia managed to leave the country on March 17, 1921, without agreeing to surrender to Soviet Russia. A delegation headed by Grigol Lortkipanidze remained in Georgia to negotiate a ceasefire. As a result of the work of this delegation, an agreement on the cessation of hostilities was signed on March 17-18, 1921. Russia has finally conquered Georgia.

                </span>
                <div className="jigari"></div>
                <div className="jigari"></div>
            </div>
            <Next options={linkz} />
            <Share url="/en/1921" title="Share the Article" cite1="Cite" cite2="1921.” Georgian Liberty | 1921, September 27, 2021.  https://www.georgianliberty.com/en/1921,           '"/>
        </div>
        </>
    )
}

export default measme
