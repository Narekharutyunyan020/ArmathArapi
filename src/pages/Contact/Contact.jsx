import React, { useState } from 'react';
import s from './Contact.module.scss';

const Contact = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className={s.wrapper}>
      <button 
        className={s.button} 
        onClick={() => setReadMore(!readMore)}
      >
        {readMore ? 'Show Less' : 'Read More'}
      </button>

      {readMore && (
        <p className={s.text}>
          Այստեղ կարող լինել կոնտակտներ կամ եսիմ լիքը այլ բաներ կարելի թ անել
        </p>
      )}
    </div>
  );
};

export default Contact;
