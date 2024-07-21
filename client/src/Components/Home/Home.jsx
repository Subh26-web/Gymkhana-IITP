// Components/Home/Home.jsx

import React from 'react';
import Hero from '../Hero/Hero';
import Community from '../Community/Community';
import Title from '../Title/Title';
import About from '../About/About';
import Events from '../Events/Events';
import Clubs from '../Clubs/Clubs';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <section id="about">
          <About />
        </section>
        <section id="clubs">
          <Title subTitle="Clubs" title="Explore The Interest" />
          <Clubs />
        </section>
        <section id="community">
          <Title subTitle="Community" title="Our Vibrant Communities" />
          <Community />
        </section>
        <section id="events">
          <Title subTitle="Events" title="Campus Photos" />
          <Events />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
