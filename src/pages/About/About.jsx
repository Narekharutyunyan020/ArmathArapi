import React from 'react';
import s from './About.module.scss'; 

const About = () => {
  return (
    <div className={s.aboutPage}>
      <h1>About Us</h1>

      <section className={s.section}>
        <h2>Vision</h2>
        <p>
          Arapi’s Armath Engineering Lab is the leading workshop in Shirak province,
          aligned with the overall vision of the Armath Engineering Laboratories initiative.
        </p>
      </section>

      <section className={s.section}>
        <h2>Mission</h2>
        <p>
          To serve Armath’s mission by fostering the rise of an innovative, tech-savvy,
          and community-dedicated generation in our village and region.
        </p>
      </section>

      <section className={s.section}>
        <h2>What We Do</h2>
        <p>
          We aim to create an experimental STEM environment where students can: explore their talents,
          fall in love with science and math, orient toward future careers, realize their ideas,
          and grow into caring, responsible citizens of their community and country.
        </p>
      </section>
    </div>
  );
};

export default About;
