import React from 'react';
import desktopImageHero1 from '../assets/images/desktop-image-hero-1.jpg';

function AboutUsSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
      <div className="relative">
        <img
          src={desktopImageHero1}
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <h1
          className="absolute top-1/2 left-0 lg:left-20 transform -translate-y-1/2 text-white text-6xl lg:text-8xl font-bold"
          style={{ letterSpacing: '0.5rem', paddingLeft: '1rem' }}
        >
          A B O U T &nbsp; U S
        </h1>
      </div>
      <div className="p-8 lg:p-12">
        <p className="text-slate-900 opacity-75">
          Our furniture company has been at the forefront of innovative design and unparalleled quality for over a decade. We pride ourselves on crafting pieces that not only elevate spaces but also withstand the test of time. Our commitment to sustainability and excellence has made us a beloved brand among those who appreciate the finer things in life. From the drawing board to your home, every piece is made with you in mind, ensuring that it meets our high standards and your unique needs.
        </p>
      </div>
    </section>
  );
}

export default AboutUsSection;
