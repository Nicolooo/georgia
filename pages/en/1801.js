import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Switcher from '../../comp/LangSwitcher/Switcher'
import Share from '../../comp/SEO/share'
import Title from '../../comp/SEO/title'
import Next from '../../comp/next/yea'
import Image from 'next/image'
const Friends = () => {
    const linkz = {
        first_title: "1918",
        first_link: "/en/1918",
        second_title: "2008",
        second_link: "/en/samachablo",
    }

    return (
        <>
        <Title title="Georgian Liberty | 1801" meta="On July 24th, 1783, a “Friendship Agreement” known as the Treaty of Georgievsk was signed between the Kingdom of Kartli-Kakheti and the Russian Empire. According to this the Kingdom of Kartli-Kakheti came under the protection of the Russian Empire. Under the terms of the treaty, the Kingdom of Kartli-Kakheti refused to pursue an independent foreign policy, while Russia promised military assistance." />
            <Menu />
            <Switcher title="Ge" link="/ge/1801"/>
        <div className="abkhazia-wrapper container">
            <div className="abkhazia-title row"> 
                <div className="april-header">
                    <h1 className="april-main-title">Russian Annexation</h1>
                    <h3 className="april-main-sub">12 September, 1801</h3>
                </div>
                <span className="timeline-shorts">
                On July 24th, 1783, a “Friendship Agreement” known as the Treaty of Georgievsk was signed between the Kingdom of Kartli-Kakheti and the Russian Empire. According to this the Kingdom of Kartli-Kakheti came under the protection of the Russian Empire. Under the terms of the treaty, the Kingdom of Kartli-Kakheti refused to pursue an independent foreign policy, while Russia promised military assistance.

                <div className="jigari"></div>
                <div className="april-main-photo">
                    <Image src={'/1801.jpeg'} height={500} width={700} alt="April Image"/>
                </div>
                <div className="jigari"></div>
                At the same time, Kartli-Kakheti maintained the status of a kingdom. It was ruled by a Georgian king, who had to be approved by the Russian imperial court. The terms of this treaty were repeatedly violated by the Russian Empire. In particular, they did not fulfill their promise and regularly left the Georgian kings face-to-face with the enemy. However, in 1801 they completely ignored the existence of the treaty and established total Russian rule over the Kingdom of Kartli-Kakheti.
                <div className="jigari"></div>
                <div className="april-main-photo">
                </div>
                <div className="jigari"></div>
                On September 12, 1801, the Russian Emperor Alexander I issued an order declaring the Kingdom of Kartli-Kakheti abolished and annexing it to the Russian Empire. The order became known to the Georgian public only on April 12 of the same year, when the representatives of the nobility gathered at the Zion Cathedral, which was besieged by the Russian army in Tbilisi, and stated the orders. Of course, such one-sided violence was met with great protest from the Georgian society. However, neither the nobility nor the commonality found enough strength to stand up to the Russian Empire. Despite numerous uprisings and conspiracies, the empire still managed to establish total control over the Georgian state. With the annexation of the Kingdom of Kartli-Kakheti, the process of conquest of the historical territories of Georgia by the Russian Empire began. Which lasted until the collapse of the Russian Empire.
                </span>
                <div className="jigari"></div>
                <div className="jigari"></div>
            </div>
            <Next options={linkz} />
            <Share url="/en/1801" title="Share the Article" cite1="Cite" cite2="1801.” Georgian Liberty | 1801, September 27, 2021.  https://www.georgianliberty.com/en/1989,           '"/>
        </div>
        </>
    )
}

export default Friends
