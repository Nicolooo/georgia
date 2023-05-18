import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Switcher from '../../comp/LangSwitcher/Switcher'
import Share from '../../comp/SEO/share'
import Title from '../../comp/SEO/title'
import { ArrowRight } from 'react-feather'
import Image from 'next/image'
import Link from 'next/link'
const pirveli = () => {
    return (
        <>
        <Title title="Georgian Liberty I რუსული ანექსაცია" meta="საქართველოს ანექსია არის სიმბოლური მოვლენა, რომელიც აღნიშნავს კონფლიქტის დაწყებას საქართველოსა და რუსეთს შორის 1801 წელს." />
        <Menu LANG="Ge"/>
            <Switcher title="En" link="/en/1801"/>
        <div className="abkhazia-wrapper container">
            <div className="abkhazia-title row"> 
                <div className="april-header">
                    <h1 className="april-main-title">საქართველოს ანექსია</h1>
                    <h3 className="april-main-sub">1801</h3>
                </div>
                <span className="timeline-shorts">
                1783 წლის 24 ივლისს ქართლ-კახეთის სამეფოსა და რუსეთის იმპერიას შორის გაფორმდა გეორგიევსკის ტრაქტატის სახელით ცნობილი “სამეგობრო შეთანხმება” რომლის თანახმადაც ქართლ-კახეთის სამეფო რუსეთის იმპერიის მფარველობის ქვეშ შედიოდა. ტრაქტატის პირობების თანახმად ქართლ-კახეთის სამეფო უარს აცხადებდა დამოუკიდებელი საგარეო პოლიტიკის წარმოებაზე, ხოლო თავის მხრივ რუსეთი აღუთქვამდა მას სამხედრო დახმარებას. ამასთან ქართლ-კახეთი ინარჩუნებდა სამეფოს სტატუსს, მას განაგებდა ქართველი მეფე, რომელიც თავის მხრივ რუსეთის საიმპერატორო კარის მიერ უნდა ყოფილიყო დამტკიცებული.
                <div className="jigari"></div>
                აღნიშნული ტრაქტატის პირობები არაერთხელ დაირღვა რუსეთის იმპერიის მიერ. კერძოდ, მან არ შეასრულა პირობა და არაერთხელ დატოვა ქართველი მეფეები მტერთან პირისპირ. თუმცა 1801 წელს მან საერთოდ უგულვებელჰყო ტრაქტატის არსებობა და სრულიად რუსული მმართველობა დაამყარა ქართლ-კახეთის სამეფოზე. 1801 წლის 12 სექტემბერს, რუსეთის იმპერატორმა ალექსანდრე 1-მა გამოსცა ბრძანება, რომლის მიხედვითაც ქართლ-კახეთის სამეფო გაუქმებულად გამოცხადდა და ის მიერთებულ იქნა რუსეთის იმპერიას. აღნიშნული ბრძანება ქართული საზოგადოებისთვის ცნობილი გახდა მხოლოდ იმავე წლის 12 აპრილს, როდესაც თავად-აზნაურობის წარმომადგენლები თბილისში, რუსული ჯარის მიერ ალყაშემორტყმულ სიონის ტაძარში შეკრიბეს და ბრძანების ტექსტი წაუკითხეს. რა თქმა უნდა ამგვარ ცალმხრივ ძალადობრივ ფაქტს დიდი პროტესტი მოჰყვა ქართული საზოგადოების მხრიდან.
                <div className="jigari"></div>
                <div className="april-main-photo">
                    <Image src={'/1801.jpeg'} height={500} width={700} alt="April Image"/>
                </div>
                <div className="jigari"></div>
                თუმცა ვერც თავად-აზნაურობას და ვერც გლეხობას არ აღმოაჩნდა საკმარისი ძალა, რომ რუსეთის იმპერიას წინ აღდგომოდნენ. არაერთი ამბოხებისა თუ შეთქმულების მიუხედავად იმპერიამ მაინც შეძლო საქართველოს სახელმწიფოზე სრული კონტროლის დამყარება. ქართლ-კახეთის სამეფოს ანექსიით დაიწყო რუსეთის მიერ საქართველოს ისტორიული ტერიტორიების დაპყრობის პროცესი, რომელიც რუსეთის იმპერიის დაშლამდე გაგრძელდა
                </span>
                <div className="jigari"></div>
                <div className="jigari"></div>
            </div>
            <Share url="/ge/1801" title="გააზიარეთ" cite1="ციტირება" cite2="1801.” ჯორჯიან ლიბერთი | 1801, September 27, 2021.  https://www.georgianliberty.com/ge/1801,           '"/>
        </div>
        </>
    )
}

export default pirveli
