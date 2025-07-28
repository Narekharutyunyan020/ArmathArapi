// About.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Import the SCSS module. The 's' object will contain the CSS class names.
import s from './About.module.scss';

/**
 * About component displays information about the Arapi's Armath Engineering Lab,
 * including its vision, mission, and activities.
 * It uses Framer Motion for scroll-triggered animations on sections.
 */
const About = () => {
  // Common animation properties for sections to reduce repetition
  const sectionAnimationProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  };

  return (
    <div className={s.aboutPage}>
      {/* Main heading for the page */}
      <h1 className={s.h1}>
        <span className={s.h1Span}>About</span> Us
      </h1>

      {/* Vision Section */}
      <motion.section
        className={s.section}
        {...sectionAnimationProps} // Apply common animation props
      >
        {/*
          The 'typewriter' class is applied here for a specific effect.
          If this effect is desired for other h2 elements, apply the class to them as well.
        */}
        <h2 className={s.typewriter}>
          Vis<span className={s.h2Span}>ion</span>
        </h2>
        <p className={s.p}>
          Arapi’s Armath Engineering Lab is the leading workshop in Shirak province,
          aligned with the overall vision of the Armath Engineering Laboratories initiative.
        </p>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className={s.section}
        {...sectionAnimationProps} // Apply common animation props
      >
        <h2 className={s.h2}>
          <span className={s.h2Span}>Mis</span>sion
        </h2>
        <p className={s.p}>
          To serve Armath’s mission by fostering the rise of an innovative, tech-savvy,
          and community-dedicated generation in our village and region.
        </p>
      </motion.section>

      {/* What We Do Section */}
      <motion.section
        className={s.section}
        {...sectionAnimationProps} // Apply common animation props
      >
        <h2 className={s.h2}>
          <span className={s.h2Span}>What We</span> Do
        </h2>
        <p className={s.p}>
          We aim to create an experimental STEM environment where students can: explore their talents,
          fall in love with science and math, orient toward future careers, realize their ideas,
          and grow into caring, responsible citizens of their community and country.
        </p>
      </motion.section>
    </div>
  );
};

export default About;