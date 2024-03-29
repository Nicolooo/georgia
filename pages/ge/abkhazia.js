import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Count from '../../comp/Abk/counter'
import Switcher from '../../comp/LangSwitcher/Switcher'
import Storage from '../../data/Content'
import Share from '../../comp/SEO/share'
import Title from '../../comp/SEO/title'
import Image from 'next/image'
import Next from '../../comp/next/yea'
const data = {
    "counts": [
        {
            "id": "001",
            "label": "ლტოლვილი",
            "number": "250.000+",
            "duration": "2"
        },
        {
            "id": "002",
            "label": "გარდაცვლილი",
            "number": "10.000+",
            "duration": "2"
        },
        {
            "id": "003",
            "label": "დაჭრილი",
            "number": "8..000+",
            "duration": "2"
        },
       
    ]
}
const linkz = {
    first_title: "2008",
    first_link: "/ge/samachablo",
    second_title: "1989",
    second_link: "/ge/1989",
}
const abkhazia = () => {
    return (
        <>
        <Title title="Georgian Liberty I აფხაზეთის ომი" meta="მე-20 საუკუნის 80-იანი წლის ბოლოს საქართველოში ეროვნულ-განმანთავისუფლებელი მოძრაობის მკვეთრად გააქტიურების ფონზე, კრემლი ახდენს აფხაზეთში არსებული სეპარატისტული, ანტიქართული და ნაციონალისტური ძალების მობილიზებასა და მათით მანიპულირებას, რათა შეინარჩუნოს მძლავრი ზეგავლენა საქართველოზე."/>
        <Menu LANG="Ge" />
            <Switcher title="EN" link="/en/abkhazia"/>
        <div className="abkhazia-wrapper container">
            <div className="abkhazia-title row"> 
                <h1 className='page-header'>აფხაზეთი</h1>
                <p className="abkhazia-shorttext">{Storage.abkGeo.first}</p>
            </div>
            <div className="abkhazia-stats row">
                {data.counts.map(count => <Count key={count.id} data={count}/>)}
            </div>
            {/* <div className='row'>
                <div className="abkhazia-col">
                    <Image className='img-resp' src="/abkhazia/abkhazia-1.webp" alt="as" height="700" width="1000" />
                    <p className="reference">*</p>
                </div>
                <div className="abkhazia-col">
                    <p>
                        {Storage.abkGeo.first}
                    </p>
                </div>
            </div> */}
            <div className='row'>
                <div className="abkhazia-col">
                <Image className='img-resp' src="/abkhazia/abkhazia-3.webp" alt="as" height="650" width="600" />
                {/* <p className="reference">*</p> */}
                </div>
                <div className="abkhazia-col">
                    <p>
                        {Storage.abkGeo.second}
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className="abkhazia-col">
                    <Image className='img-resp' src="/abkhazia/abkhazia-4.webp" alt="as" height="550" width="600" />
                    {/* <p className="reference">*</p> */}
                </div>
                <div className="abkhazia-col">
                    <p>
                        {Storage.abkGeo.third}
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className="abkhazia-col">
                <Image className='img-resp' src="/abkhazia/abkhazia-1.webp" alt="as" height="700" width="1000" />
                </div>
                <div className="abkhazia-col">
                    <p>
                        {Storage.abkGeo.forth}
                    </p>
                </div>
            </div>
            <Next options={linkz}/>
            <Share url="/en/abkhazia" title="გააზიარეთ" cite1="ციტირება" cite2="1992.” ჯორჯიან ლიბერთი | Abkhazia, September 27, 2021.  https://www.georgianliberty.com/ge/abkhazia'" />
        </div>
        </>
    )
}

export default abkhazia
