import React from 'react'
import Image from 'next/image'
import Switcher from '../../../comp/LangSwitcher/Switcher'
import Menu from '../../../comp/Menu/Menu'
import Title from '../../../comp/SEO/title'
import Share from '../../../comp/SEO/share'
const shartava = () => {
  return (
    <>
    <Switcher title="Ge" link="/ge/shartava"/>
    <Menu />
    <Title title="Georgian Liberty | Zhiuli Shartava" meta="Russian Annexation is an event that symbolizes the start of the conflict between two nations in the year of 1801. " />
    <div className="pg-container">
    <div className="pg-bio-container">
        <h1 className="pg-person-name">Zhiuli Shartava (1944 - 1993)</h1>
        <div className="pg-person-bio">
            <div className="pg-person-img">
                <Image src="/Zhiuli_Shartava.webp" height={3000} width={2330} alt="hero image"/>
            </div>
            <div className="pg-person-img-p">
                <Image src="/Zhiuli_Shartava.webp" height={250} width={200} alt="hero image"/>
            </div>
            <div className="pg-person-story">
                <p className="pg-story-text">
                Zhiuli Shartava was born on March 7, 1944 in Senaki. He studied at the second high school of Senaki. In 1966 he graduated from the Faculty of Automation and Computer Engineering of the Georgian Polytechnic Institute. In 1973 he studied for a postgraduate degree in technical cybernetics. He held positions in the communist party in Tbilisi and Rustavi.Was a member of the Supreme Council of the Georgian SSR. In 1989 he graduated from the Diplomatic Academy of the Ministry of Foreign Affairs of the USSR. Candidate of Technical Sciences.
                <div className="jigari"></div>
                In 1992, Zhiuli Shartava was elected a member of the Parliament of the Republic of Georgia, from the Rustavi majoritarian constituency. During the Abkhaz war, in June 1993, Shartava was appointed Chairman of the Council of Ministers of the Autonomous Republic of Abkhazia and the Defense Council of Abkhazia. On September 27, 1993, the day of the fall of Sokhumi, Major General Shartava was directly in charge of guarding the Government House, during which the separatists, along with their comrades, captured and shot them.
                <div className="jigari"></div>
                In 2004, Zhiuli Shartava was the first person to be awarded the title of National Hero of Georgia. After his death he was also awarded, the Order of Vakhtang Gorgasali I Degree. He is buried in Vake Pantheon in Tbilisi
                </p>
            </div>
        </div>
    </div>
</div>
<Share url="/en/heroes/guram" title="Share the Article" />
</>
  )
}

export default shartava