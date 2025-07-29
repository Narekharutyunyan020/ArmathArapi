import React from 'react';
import s from './Structure.module.scss';

const Structure = () => {
  return (
    <section className={s.atomSection}>
      <h2>Our Atom</h2>
      <p className={s.intro}>
        We present our team structure as an atom — with a central nucleus and orbiting electrons.
      </p>

      <div className={s.atom}>
        {/* Nucleus */}
        <div className={s.nucleus}>
          <h3>Nucleus</h3>
          <p><strong>Team Leader:</strong> Grisha Khachatryan</p>
          <p><strong>Assistant Leaders / Instructors:</strong> Olya Khachatryan, Narek Saroyan</p>
        </div>

        {/* Orbit container with rotating electrons */}
        <div className={s.orbit}>
          <div className={s.electron} data-tooltip="Provided equipment" style={{ '--angle': '0deg' }}>
            E H
          </div>
          <div className={s.electron} data-tooltip="Volunteering as website developer" style={{ '--angle': '180deg' }}>
            N H          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;