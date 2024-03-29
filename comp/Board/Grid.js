import React from 'react'
import Card from './Card'
import Board from '../../data/Board'
const Ge = () => {
    return (
        <div className="heroes-wrapper container-fluid">
            <h2 className='heroes-header'>BOARD MEMBERS</h2>
            <div className="container row">
                <Card name="GIORGI KAKHIANI" title="Chairman, Co-Founder of Georgian Liberty" img={Board.photos.gk} />
                <Card name="NIKOLOZ SIRBILADZE" title="Co-Founder of Georgian Liberty" img={Board.photos.ns} />
                <Card name="KAKHA KUCHAVA" title="Former Chairperson of the Parliament of Georgia" img={Board.photos.kuchava} />
                <Card name="VIKTOR KIPIANI" title="Chairman of `Geocase`" img={Board.photos.kipiani} />
                <Card name="MIKHEIL JANELIDZE" title="Former Minister of Foreign Affairs of Georgia" img={Board.photos.janelidze} />
                <Card name="GIORGI BILANISHVILI" title="Researcher of Rondeli Foundation" img={Board.photos.bilanishvili} />
                 <Card name="TIKA RUKHADZE" title="Director of the National Palace" img={Board.photos.rukhadze} />
                <Card name="Gigi Gigiadze" title="Senior Researcher of Economic Policy Research Centre" img={Board.photos.gigiadze}/>
                <Card name="LASHA CHANTLADZE" title="Ph.D in History" img={Board.photos.chantladze} />
                <Card name="DAVID KLDIASHVILI" title="Lawyer" img={Board.photos.kldi} />
                <Card name="LERI DOBORJGINIDZE" title="Head of the youth department" img={Board.photos.lel} />
            </div>
        </div>
    )
}
const En = () => {
    return (
        <div className="heroes-wrapper container-fluid">
            <h2 className='heroes-header'>ბორდის წევრები</h2>
            <div className="container row">
                <Card name="გიორგი კახიანი" title="თავმჯდომარე, “ჯორჯიან ლიბერთის” თანადამფუძნებელი." img={Board.photos.gk} />
                <Card name="ნიკოლოზ სირბილაძე" title="“ჯორჯიან ლიბერთის” თანადამფუძნებელი." img={Board.photos.ns} />
                <Card name="კახა კუჭავა" title="საქართველოს პარლამენტის ყოფილი თავმჯდომარე" img={Board.photos.kuchava} />
                <Card name="ვიქტორ ყიფიანი" title=" `ჯეოქეისის` თავმდჯომარე" img={Board.photos.kipiani} />
                <Card name="მიხეილ ჯანელიძე" title="საქართველოს საგარეო საქმეთა ყოფილი მინისტრი" img={Board.photos.janelidze} />
                <Card name="გიორგი ბილანიშვილი" title="რონდელის ფონდის მკვლევარი" img={Board.photos.bilanishvili} />
                <Card name="თიკა რუხაძე" title="ეროვნული სასახლის დირექტორი" img={Board.photos.rukhadze} />
                <Card name="გიგი გიგიაძე" title="ეკონომიკური პოლიტიკის კვლევის ცენტრის უფროსი მკვლევარი" img={Board.photos.gigiadze}/>
                <Card name="ლაშა ჩანტლაძე" title="ისტორიის მეცნიერებათა დოქტორი" img={Board.photos.chantladze} />
                <Card name="დავით კლდიაშვილი" title="იურისტი" img={Board.photos.kldi} />
                <Card name="ლერი დობორჯგინიძე" title="ახალგაზრდული მიმართულების ხელმძღვანელი" img={Board.photos.lel} />
            </div>
        </div>
    )
}
const Hrid = (LANG) => {
    return (
        <>
            {LANG.LANG === "Ge" ? <En /> : <Ge />}
        </>
    )
}

export default Hrid
