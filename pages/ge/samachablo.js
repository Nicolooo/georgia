import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Count from '../../comp/Abk/counter'
import Switcher from '../../comp/LangSwitcher/Switcher'
import Next from '../../comp/next/yea'
import Share from '../../comp/SEO/share'
import Title from '../../comp/SEO/title'
import Link from 'next/link'
import Image from 'next/image'
const data = {
    "counts": [
        {
            "id": "001",
            "label": " ლტოლვილი",
            "number": "120.000",
            "duration": "2"
        },
        {
            "id": "002",
            "label": "გარდაცვლილი",
            "number": "180",
            "duration": "2"
        },
        {
            "id": "003",
            "label": "დაჭრილი",
            "number": "1.000",
            "duration": "2"
        },
       
    ]
}
const linkz = {
    first_title: "1801",
    first_link: "/ge/1801",
    second_title: "1992",
    second_link: "/ge/abkhazia",
}
const samachablo = () => {
    return (
        <>
            <Title title="Georgian Liberty I ცხინვალის დაცემა" meta="1990-იანი წლების დასაწყისში რუსეთის ფედერაციამ გამოიყენა საბჭოთა რეჟიმის დროს მომზადებული სტრატეგია." />
            <Menu LANG="Ge" />
            <Switcher title="EN" link="/en/samachablo"/>
        <div className="samachablo-wrapper container">
            <div className="samachablo-title row"> 
                <h1 className='page-header'>სამაჩაბლო</h1>
                <div className="samachablo-stats row">
                <p className="shorttext">1990-იანი წლების დასაწყისში რუსეთის ფედერაციამ გამოიყენა ჯერ კიდევ საბჭოთა რეჟიმის დროს მომზადებული ნიადაგი, რომლის ძირითად მეთოდოლოგიას წარმოადგენდა ეთნიკური დაპირისპირების ინსპირირება და გაღვივება საბჭოთა ხელისუფლების მიერ საქართველოში შექმნილ ავტონომიებში, ასევე ადგილობრივი სეპარატისტულად განწყობილი ელიტის ჩამოყალიბება, და 1991 წლის იანვარში მოახდინა შეიარაღებული კონფლიქტის ინსპირირება</p>
            </div>
                {data.counts.map(count => <Count key={count.id} data={count}/>)}
            </div>
            <div className='row'>
            <div className="samachablo-col">
                <p>1992 წლის ბოლოდან ცხინვალის რეგიონში/სამხრეთ ოსეთში მუშაობა დაიწყო ეუთო-ს მისიამ საქართველოში. კონფლიქტის შედეგად დაიღუპა ათასამდე, ხოლო უგზოუკვლოდ დაიკარგა ასამდე ადამიანი. დაახლოებით 70-80 ათასამდე ადამიანი გააძევეს საცხოვრებელი სახლებიდან. რეგიონი ფაქტობრივად დაცარიელდა. დღეის მდგომარეობით, ცხინვალის რეგიონის/სამხრეთ ოსეთის მოსახლეობა 15-20 ათასს შეადგენს. შექმნილ ვითარებაში რუსეთმა მოახერხა თავის მიერვე ინსპირირებულ კონფლიქტში შუამავლისა და მშვიდობისმყოფლის როლი ეკისრა. 1992 წლის 24 ივნისს რუსეთის შუამდგომლობით გაფორმებული (სოჭის) ხელშეკრულებით რეგიონში განლაგდა შერეული სამშვიდობო ძალები (რუსული, ქართული და ოსური შემადგენლობით) და შეიქმნა შერეული საკონტროლო კომისია.</p>
                </div>
                <div className="samachablo-col">
                    <Image src="/samachablo/3.webp" alt="Samachablo" width={700} height={500}/>
                   <Link href="https://www.atlanticcouncil.org/blogs/ukrainealert/the-2008-russo-georgian-war-putins-green-light/"><p className="reference">წყარო</p></Link>
                
                </div>
                <div className="samachablo-col">
                    <p>
                    2008 წლის აგვისტოს რუსეთ-საქართველოს ომამდე საქართველოს ხელისუფლება აკონტროლებდა ცხინვალის რეგიონის/სამხრეთ ოსეთის მნიშვნელოვან ნაწილს, ასევე რთულად მაგრამ მაინც ფუნქციონირებდა სამშვიდობო ფორმატები, რომლის ფარგლებში საერთაშორისო თანამეგობრობის (ევროკავშირი, ეუთო) დახმარებით ხორციელდებოდა რეგიონის ეკონომიკური და ინფრასტრუქტურული რეაბილიტაცია. აღნიშნულ პერიოდში საქართველოს ხელისუფლებამ შეიმუშავა არაერთი სამშვიდობო ინიციატივა, რომელიც ცხინვალის რეგიონი/სამხრეთ ოსეთისათვის ფართო ავტონომიური სტატუსის მინიჭებას, ხელისუფლების გადანაწილებას, ეკონომიკურ განვითარებას, საერთაშორისო უსაფრთხოების გარანტიებს და ჩართულობას ითვალისწინებდა, თუმცა რუსეთმა ფაქტობრივად ჩაშალა ყველა სამშვიდობო გეგმის იმპლემენტაცია. პარალელურად რუსეთის ფედერაციის მიერ ხორციელდებოდა ცხინვალის რეგიონის/სამხრეთ ოსეთის მოსახლეობის უკანონო პასპორტიზაცია, რაც დადასტურდა საქართველოში მომხდარ კონფლიქტთან დაკავშირებული ფაქტების დამდგენი დამოუკიდებელი საერთაშორისო მისიის (ე.წ. ტალიავინის კომისიის) მიერ მომზადებული ანგარიშით, ძლიერდებოდა სამხედრო მილიტარიზაციის პროცესი და საგრძნობლად მატულობდა ძალადობის შემთხვევები.
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className="samachablo-col">
                    <Image src="/samachablo/2.webp" alt="Samachablo" width={700} height={500}/>
                    <Link href="https://www.atlanticcouncil.org/blogs/ukrainealert/the-2008-russo-georgian-war-putins-green-light/"><p className="reference">წყარო</p></Link>
                </div>
                <div className="samachablo-col">
                    <p>
                საბოლოოდ, მანამდე არსებული `გაყინული კონფლიქტი` 2008 წლის აგვისტოში რუსეთის ფედერაციის მიერ განხორციელებულმა სრულმასშტაბიანმა სამხედრო აგრესიამ და ოკუპაციამ ჩაანაცვლა, რომელიც დაიწყო ცხინვალის რეგიონის/სამხრეთ ოსეთის მიმართულებით, ხოლო რუსეთის მიერ მისი მეორე ფრონტი გახსნილი იქნა ასევე აფხაზეთის მიმართულებითაც. ომის შედეგად, ცხინვალის რეგიონში/სამხრეთ ოსეთში და მიმდებარე ტერიტორიებზე გადაიწვა და მთლიანად განადგურდა ორმოცდაათამდე ქართული სოფელი. ამ ტერიტორიებზე, მათ შორის ახალგორის რაიონზე, საქართველოს ცენტრალურმა ხელისუფლებამ კონტროლი დაკარგა. საკუთარი სახლებიდან გააძევეს და ეთნიკური წმენდა განახორციელეს 130 ათასამდე, ძირითადად ეთნიკური ქართველი მოსახლეობის მიმართ. მათგან 26 ათასი, ცხინვალის რეგიონის/სამხრეთ ოსეთის და მიმდებარე რაიონების მაცხოვრებლები დღემდე დევნილობაში რჩებიან. დღევანდელი მონაცემებით, ცხინვალის რეგიონიდან/სამხრეთ ოსეთიდან და აფხაზეთიდან იძულებით გადაადგილებულ პირთა და ლტოლვილთა რაოდენობა 300 ათასს აჭარბებს. საერთაშორისო საზოგადოებამ მკაცრად დაგმო ცხინვალის რეგიონში/სამხრეთ ოსეთში ქართული მოსახლეობის ეთნიკურ წმენდა, რაც გამყარებულია ევროპარლამენტის 2011 წლის, ევროსაბჭოს საპარლამენტო ასამბლეის 2008-2009 წლების და ნატოს საპარლამენტო ასამბლეის 2010 წლის რეზოლუციებით, ასევე ავტორიტეტული საერთაშორისო ორგანიზაციების არაერთი ანგარიშით. 
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className="samachablo-col">
                   <Image src="/samachablo/1.webp" height={400} width={600}/>
                   <Link href="https://www.atlanticcouncil.org/blogs/ukrainealert/the-2008-russo-georgian-war-putins-green-light/"><p className="reference">წყარო</p></Link>
                </div>
                <div className="samachablo-col">
                    <p>
                    რუსეთის ფედერაციის მიერ განხორციელებულ სამხედრო ინტერვენციას, 2008 წლის 26 აგვისტოს რუსეთის მიერ სამხრეთ ოსეთის და აფხაზეთის ე.წ. `დამოუკიდებლობის` აღიარება მოჰყვა, რამაც კიდევ უფრო გაართულა სამშვიდობო პროცესი. 2008 წლის აგვისტოს რუსეთ-საქართველოს ომის შემდეგ, ევროკავშირის მხარდაჭერით შეიქმნა `საქართველოში მომხდარ კონფლიქტთან დაკავშირებული ფაქტების დამდგენი დამოუკიდებელი საერთაშორისო მისია` (ე.წ. `ტალიავინის კომისია``). მისიამ 2009 წლის სექტემბერში წარადგინა ანგარიში, რომელშიც მოცემულია კონფლიქტის ქრონოლოგია, შეფასებები და კონფლიქტთან დაკავშირებული სხვა მასალები. ამჟამად, ცხინვალის რეგიონი/სამხრეთ ოსეთი სრულიად თვითიზოლირებულია გარე სამყაროსგან. ინტენსიურად მიმდინარეობს რუსი სამხედრობის მიერ მავთულხლართების, ღობეებისა და სხვა ხელოვნური ბარიერების აღმართვა, მათ შორის უშუალოდ მოსახლეობის კუთვნილ მიწის ნაკვეთებზე. ამგვარი პროცესი მნიშვნელოვნად აფერხებს და რიგ შემთხვევაში შეუძლებელს ხდის თავისუფალი გადაადგილების შესაძლებლობას, პირველადი სამედიცინო დახმარების ხელმისაწვდომობას, მშობლიურ ენაზე განათლების მიღებას, სასოფლო-სამეურნეო ნაკვეთებზე საქმიანობას, სასმელ და სარწყავ წყალზე ხელმისაწვდომობას, სასაფლაოებზე შესვლას და სხვა სამოქალაქო და ეკონომიკური უფლებებით სარგებლობას, ხშირია ე.წ. “საზღვრის უკანონოდ გადაკვეთის“ ბრალდებით დაკავების შემთხვევები. ყოველივე ზემოთქმული კიდევ უფრო აუარესებს მძიმე ჰუმანიტარულ სიტუაციას გამყოფი ხაზის ორივე მხარეს მცხოვრები როგორც ქართველი, ისე ოსი მოსახლეობისათვის.
                    </p>
                </div>
            </div>
            <Next options={linkz} />
            <Share url="/ge/samachablo" title="გააზიარეთ" cite1="ციტირება" cite2="2008.” ჯორჯიან ლიბერთი | Samachablo, September 27, 2021.  https://www.georgianliberty.com/en/samachablo,           '" />
        </div>
    </>
    )
}

export default samachablo
