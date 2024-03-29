import React from 'react'
import Image from 'next/image'
import Switcher from '../../../comp/LangSwitcher/Switcher'
import Menu from '../../../comp/Menu/Menu'
import Title from '../../../comp/SEO/title'
import Share from '../../../comp/SEO/share'
const gabiskiria = () => {
  return (
    <>
    <Switcher title="Ge" link="/ge/guram"/>
    <Menu />
    <Title title="Georgian Liberty | Guram Gabiskiria" meta="Zhiuli Shartava was born on March 7, 1944 in Senaki. He studied at the second high school of Senaki. In 1966 he graduated from the Faculty of Automation and Computer Engineering of the Georgian Polytechnic Institute. " />
    <div className="pg-container">
    <div className="pg-bio-container">
        <h1 className="pg-person-name">Guram Gabiskiria (1947 - 1993)</h1>
        <div className="pg-person-bio">
            <div className="pg-person-img">
                <Image src="/Guram_gabiskiria.webp" height={3000} width={2330} alt="hero image"/>
            </div>
            <div className="pg-person-img-p">
                <Image src="/Guram_gabiskiria.webp" height={250} width={200} alt="hero image"/>
            </div>
            <div className="pg-person-story">
                <p className="pg-story-text">
                Guram Gabiskiria was born on March 2, 1947 in the city of Sukhumi. Graduated from Maxim Gorky State University, Faculty of History. For years, he was a professional football player. In the late 1960s, Gabeskiria played for Sokhumi `Dinamo`. Later, he continued his football career in Stavropol, Minsk and Kislovodsk, and finally played for CSKA Tbilisi. For years, Guram Gabeskiria held the position of director of the Sokhumi fish factory. In 1990 he participated in the parliamentary elections of the Autonomous Republic of Abkhazia.
                <div className="jigari"></div>
                In 1992, Guram Gabiskiria became the mayor of Sokhumi, and in 1993, a member of the Council of Ministers and the Defense Council of the Autonomous Republic of Abkhazia. On September 27, 1993, the day of the fall of Sukhumi, Col. Guram Gabeskiria, along with representatives of the government of the Autonomous Republic of Abkhazia, refused to leave the besieged city, resulting in the execution of all members of the government in the captured city, including Gabeskiria.
                <div className="jigari"></div>
                On September 27, 2017, Guram Gabiskiria was awarded the title of National Hero of Georgia. In October of the same year, after identifying the body and transferring it to Tbilisi, Guram Gabeskiria was buried with military honors at the Digomi Brothers Cemetery.
                </p>
            </div>
        </div>
    </div>
</div>
<Share url="/en/heroes/guram" title="Share the Article" cite2="Guram Gabiskiria” Georgian Liberty | Guram Gabiskiria, September 27, 2021.  https://www.georgianliberty.com/en/heroes/guram,    " />
</>
  )
}

export default gabiskiria