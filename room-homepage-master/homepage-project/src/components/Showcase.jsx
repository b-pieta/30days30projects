import React, {useState} from 'react'
import arrow from "../assets/images/icon-arrow.svg"
import mobileImageHero1 from "../assets/images/mobile-image-hero-1.jpg";
import desktopImageHero1 from "../assets/images/desktop-image-hero-1.jpg";
import mobileImageHero2 from "../assets/images/mobile-image-hero-2.jpg";
import desktopImageHero2 from "../assets/images/desktop-image-hero-2.jpg";
import mobileImageHero3 from "../assets/images/mobile-image-hero-3.jpg";
import desktopImageHero3 from "../assets/images/desktop-image-hero-3.jpg";


const data = [
    {
        id: 1,
        title: "Discover innovative ways to decorate",
        desc: `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`,
        mobile: mobileImageHero1,
        desktop: desktopImageHero1,
    },
    {
        id: 2,
        title: "We are available all across the globe",
        desc: ` With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`,
        mobile: mobileImageHero2,
        desktop: desktopImageHero2,
    },
    {
        id: 3,
        title: "Manufactured with the best materials",
        desc: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`,
        mobile: mobileImageHero3,
        desktop: desktopImageHero3,
    }
]

export default function Showcase() {
    const [items] = useState(data)

  return (
    <>
    <section>
        {items.map((item, index) => (
            <article key={item.id}>
                <div>
                    <picture>
                        <source media="(min-width: 768px)" srcSet={item.desktop} />
                        <img src={item.mobile} alt={item.title} className="w-full" />
                    </picture>
                </div>

                <div className="p-8 lg:p-12">
                    <h1 className="text-slate-900 text-3xl lg:text-5xl">{item.title}</h1>
                    <p className="text-slate-900 opacity-75 my-6">{item.desc}</p>
                    <button className="flex items-center gap-4 uppercase hover:opacity-75" style={{letterSpacing: "0.7rem"}}>Shop Now <img src={arrow} /></button>
                </div>
            </article>
        ))}
    </section>
    </>
  )
}
