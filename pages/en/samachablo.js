import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Count from '../../comp/Abk/counter'
import Switcher from '../../comp/LangSwitcher/Switcher'
import Storage from '../../data/Content'
import Share from '../../comp/SEO/share'
import Title from '../../comp/SEO/title'
import Image from 'next/image'
import Link from 'next/link'
const data = {
    "counts": [
        {
            "id": "001",
            "label": " DISPLACED",
            "number": "120.000",
            "duration": "2"
        },
        {
            "id": "002",
            "label": "DEAD",
            "number": "180+",
            "duration": "2"
        },
        {
            "id": "003",
            "label": "WOUNDED",
            "number": "1.000+",
            "duration": "2"
        },
       
    ]
}
const samachablo = () => {
    return (
        <>
        <Title title="Georgian Liberty | Russo-Georgian War"  meta="in the early 1990s, the Russian Federation used the strategy prepared during the Soviet regime."/>
            <Menu />
            <Switcher title="Ge" link="/ge/samachablo"/>
        <div className="samachablo-wrapper container">
            <div className="samachablo-title row"> 
                <h1 className='page-header'>Samachablo</h1>
                <p className="abkhazia-shorttext">In the early 1990s, the Russian Federation used the strategy prepared during the Soviet regime. The main methodology of which was to inspire and stir up ethnic strife in the autonomies established by the Soviet government in Georgia, as well as to form a local separatist elite. The OSCE Mission to Georgia started working in the Tskhinvali region / South Ossetia in late 1992</p>
            </div>
            <div className="samachablo-stats row">
                {data.counts.map(count => <Count key={count.id} data={count}/>)}
            </div>
            <div className='row'>
                <div className="samachablo-col">
                    <p>
                        {Storage.Samachablo.first}
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className="samachablo-col">
                   <Image src="/samachablo/2.webp" alt="Samachablo" width={700} height={500}/>
                   <Link href="https://www.atlanticcouncil.org/blogs/ukrainealert/the-2008-russo-georgian-war-putins-green-light/"><p className="reference">Source</p></Link>
                
                </div>
                <div className="samachablo-col">
                    <p>
                        {Storage.Samachablo.second}
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className="samachablo-col">
                   <Image src="/samachablo/1.webp" height={400} width={600}/>
                   <Link href="https://www.atlanticcouncil.org/blogs/ukrainealert/the-2008-russo-georgian-war-putins-green-light/"><p className="reference">Source</p></Link>
                </div>
                <div className="samachablo-col">
                    <p>
                        {Storage.Samachablo.third}
                    </p>
                </div>
            </div>
            <Share url="/en/samachablo" title="Share" />
        </div>
    </>
    )
}

export default samachablo
