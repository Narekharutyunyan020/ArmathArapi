import React from 'react';
import s from './Home.module.scss';

const Home = () => {
  return (
<section className={s.hero}>
  <div className={s.background}></div>  {/* Ֆոնային նկար */}
  <div className={s.overlay}>
    <h2 className={s.tagline}>Engineering • Innovation • Community</h2>
    <h1 className={s.title}>Armath Arapi</h1>
    <h3 className={s.subtitle}>Engineering Makerspace</h3>
    <p className={s.description}>
      Shirak region's leading STEM education center where students discover their talents and create the future
    </p>
  </div>
</section>

  );
};

export default Home;
