import React from 'react'
import Card from './Card'
import Storage from '../../data/Content'
const Ge = () =>{
    const enTxt = "Watch now"
    const link = '/ge/anwu'
    return(
        <div className="heroes-wrapper container-fluid">
        <h2 className='heroes-header'>NATIONAL HEROES</h2>
        <div className="container row">
            <Card name="#Dialogue" title="9 April" img={Storage.photos.Ggabiskria} link={link} text={enTxt}/>
            <Card name="GIORGI ANTSUKHELIDZE" title="JUNIOR SERGEANT OF THE GEORGIAN ARMED FORCE" img={Storage.photos.Gant} link={link} text={enTxt}/>
            <Card name="ZHIULI SHARTAVA" title="kognitiuri sehsadzleblobebi" img={Storage.photos.shartava} link={link} text={enTxt}/>
            <Card name="ALEKSANDRE ONIANI" title="JUNIOR SERGEANT OF THE GEORGIAN ARMED FORCE" img={Storage.photos.oniani} link={link} text={enTxt}/>
            <Card name="GENO ADAMIA" title="MAJOR GENERAL OF THE GEORGIAN ARMED FORCES" img={Storage.photos.adamia} link={link} text={enTxt}/>
            <Card name="ZURAB IARAJULI" title="SENIOR LEUTENANT OF THE GEORGIAN AIR FORCE" img={Storage.photos.iarauli} link={link} text={enTxt}/>
        </div>
    </div>
    )
}
const En = () =>{
        return(
            <div className="heroes-wrapper container-fluid">
            <h2 className='heroes-header'>ეროვნული გმირები</h2>
            <div className="container row">
                <Card name="გურამ გაბისკირია" title="სოხუმის მერი" img={Storage.photos.Ggabiskria}/>
                <Card name="გიორგი ანწუხელიძე" title="საქართველოს შეიარაღებული ძალების უმცროსი სერჟანტი" img={Storage.photos.Gant}/>
                <Card name="ჟიული შარტავა" title="აფხაზეთის ავტონომიური რესპუბლიკის მინისტრთა საბჭოს თავმჯდომარე" img={Storage.photos.shartava}/>
                <Card name="ალექსანდრე ონიანი" title="საქართველოს შეიარაღებული ძალების უმცროსი სერჟანტი" img={Storage.photos.oniani}/>
                <Card name="გენო ადამია" title="საქართველოს შეიარაღებული ძალების მაიორი გენერალი" img={Storage.photos.adamia}/>
                <Card name="ზურაბ იარაჯული" title="საქართველოს სამხედრო-საჰაერო ძალების უფროსი ლეიტენანტი" img={Storage.photos.iarauli}/>
            </div>
        </div>
        )
    }
const IntGrid = (LANG) => {
    return (
        <>
            {LANG.LANG === "Ge" ? <En/> : <Ge/> }
        </>
    )
}

export default IntGrid
