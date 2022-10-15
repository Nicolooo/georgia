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
    <Menu LANG='Ge'/>
    <Title title="Georgian Liberty | გურამ გაბისკირია" meta="Zhiuli Shartava was born on March 7, 1944 in Senaki. He studied at the second high school of Senaki. In 1966 he graduated from the Faculty of Automation and Computer Engineering of the Georgian Polytechnic Institute. " />
    <div className="pg-container">
    <div className="pg-bio-container">
        <h1 className="pg-person-name">გურამ გაბესკირია (1947 - 1993)</h1>
        <div className="pg-person-bio">
            <div className="pg-person-img">
                <Image src="/Guram_gabiskiria.webp" height={3000} width={2330} alt="hero image"/>
            </div>
            <div className="pg-person-img-p">
                <Image src="/Guram_gabiskiria.webp" height={250} width={200} alt="hero image"/>
            </div>
            <div className="pg-person-story">
                <p className="pg-story-text">
                გურამ გაბესკირია 1947 წლის 2 მარტს, ქალაქ სოხუმში დაიბადა. დაამთავრა მაქსიმ გორკის სახელობის სახელმწიფო უნივერსიტეტის ისტორიის ფაკულტეტი. წლების განმავლობაში, დაკავებული იყო პროფესიული ფეხბურთით. 1960-იანი წლების ბოლოს გაბესკირია სოხუმის „დინამოში“ თამაშობდა. მოგვიანებით, საფეხბურთო კარიერა სტავროპოლში, მინსკსა და კისლოვოდსკში გააგრძელა, ბოლოს კი თბილისის „ცსკა“-ში თამაშობდა. წლების განმავლობაში გურამ გაბესკირია ქალაქ სოხუმის თევზკომბინატის დირექტორის თანამდებობას იკავებდა. 1990 წელს მონაწილეობდა აფხაზეთის ავტონომიური რესპუბლიკის პარლამენტის არჩევნებში.
                <div className="jigari"></div>
                1992 წელს გურამ გაბესკირია სოხუმის მერი გახდა, ხოლო 1993 წელს, აფხაზეთის ავტონომიური რესპუბლიკის მინისტრთა საბჭოს და თავდაცვის საბჭოს წევრი. 1993 წლის 27 სექტემბერს, სოხუმის დაცემის დღეს, აფხაზეთის ავტონომიური რესპუბლიკის მთავრობის წარმომადგენლებთან ერთად პოლკოვნიკმა გურამ გაბესკირიამ უარი განაცხადა ალყაში მოქცეული ქალაქის დატოვებაზე, რის შედეგადაც, ტყვედ ჩავარდნილი მთავრობის ყველა წევრი, მათ შორის გაბესკირია, სეპარატისტებმა დახვრიტეს.
                <div className="jigari"></div>
                2017 წლის 27 სექტემბერს, გურამ გაბესკირიას საქართველოს ეროვნული გმირის წოდება მიენიჭა. ამავე წლის ოქტომბერში, ნეშტის იდენტიფიცირებისა და თბილისში გადმოსვენების შემდეგ, გურამ გაბესკირია სამხედრო პატივით დიღმის ძმათა სასაფლაოზე დაკრძალეს.
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