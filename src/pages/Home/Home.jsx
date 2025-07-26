import React from 'react'
import s from './Home.module.scss';


export const Home = () => {
  return (
    <section className={s.visionMission}>
      <div className={s.container}>
        <div className={s.block}>
          <h2>Տեսլական</h2>
          <p>
            Արմաթի տեսլականն է ձևավորել տեխնոլոգիապես զարգացած երիտասարդ սերունդ,
            որը կունենա ստեղծագործ մտածողություն և պատրաստ կլինի հաղթահարելու ապագայի մարտահրավերները։
          </p>
        </div>
        <div className={s.block}>
          <h2>Առաքելություն</h2>
          <p>
            Մեր առաքելությունն է ապահովել մատչելի տեխնոլոգիական կրթություն,
            ստեղծել ուսումնառու միջավայր, որտեղ երեխաները զարգացնում են իրենց հմտությունները և գաղափարները դարձնում իրականություն։
          </p>
        </div>
      </div>
    </section>

  )
}
export default Home;