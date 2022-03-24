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
            <Menu />
            <Switcher title="Ge" link="/ge/1801"/>
        <div className="abkhazia-wrapper container">
            <div className="abkhazia-title row"> 
                <h1 className='page-header'>1801</h1>
                <p className="timeline-shorts">
                On July 24th, 1783, a “Friendship Agreement” known as the Treaty of Georgievsk was signed between the Kingdom of Kartli-Kakheti and the Russian Empire. According to which the Kingdom of Kartli-Kakheti came under the protection of the Russian Empire. Under the terms of the treaty, the Kingdom of Kartli-Kakheti refused to pursue an independent foreign policy, while Russia promised military assistance.
                <div className="jigari"></div>
                At the same time, Kartli-Kakheti maintained the status of a kingdom. It was ruled by a Georgian king, who had to be approved by the Russian imperial court. The terms of this treaty were repeatedly violated by the Russian Empire. In particular, they did not fulfill their promise and regularly left the Georgian kings face to face with the enemy. However, in 1801 they completely ignored the existence of the treaty and established a total Russian rule over the Kingdom of Kartli-Kakheti.
                <div className="jigari"></div>
                On September 12, 1801, the Russian Emperor Alexander I issued an order declaring the Kingdom of Kartli-Kakheti abolished and annexing it to the Russian Empire. The order became known to the Georgian public only on April 12 of the same year, when the representatives of the nobility gathered at the Zion Cathedral, which was besieged by the Russian army in Tbilisi, and stated the orders. Of course, such one-sided violence was met with great protest from the Georgian society. However, neither the nobility nor the commonality found enou                 
                </p>
            </div>
            <Share url="/en/1801" title="Share the Article" />
        </div>
        </>
    )
}

export default pirveli
