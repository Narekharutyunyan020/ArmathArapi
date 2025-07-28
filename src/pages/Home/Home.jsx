import React, { useState } from 'react';
import s from './Home.module.scss';
import Mymap from '../../components/Mymap/Mymap';


export const Home = () => {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section className={s.visionMission}>


      <div className={s.container}>
        <div className={s.buttons}>
          <button className={s.cyan} onClick={() => setActiveModal('vision')}>Տեսլական</button>
          <button className={s.purple} onClick={() => setActiveModal('mission')}>Առաքելություն</button>

        </div>
      </div>

      {activeModal && (
        <div className={s.modalOverlay} onClick={closeModal}>
          <div className={s.modalContent} onClick={e => e.stopPropagation()}>
            <button className={s.closeButton} onClick={closeModal}>×</button>

            {activeModal === 'vision' && (
              <>
                <h2>Տեսլական</h2>
                <p>
                  Արմաթի տեսլականն է ձևավորել տեխնոլոգիապես զարգացած երիտասարդ սերունդ,
                  որը կունենա ստեղծագործ մտածողություն և պատրաստ կլինի հաղթահարելու ապագայի մարտահրավերները։
                </p>
              </>
            )}

            {activeModal === 'mission' && (
              <>
                <h2>Առաքելություն</h2>
                <p>
                  Մեր առաքելությունն է ապահովել մատչելի տեխնոլոգիական կրթություն,
                  ստեղծել ուսումնառու միջավայր, որտեղ երեխաները զարգացնում են իրենց հմտությունները և գաղափարները դարձնում իրականություն։
                </p>
              </>
            )}
          </div>
        </div>
      )}
      <div className={s.ArmathMap}>
{/* 
        <h1>Արմաթ Գյումրիի քարտեզը</h1>
        <Mymap/> */}

      </div>
    </section>
  );
};

export default Home;
