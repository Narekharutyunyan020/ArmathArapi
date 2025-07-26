import { NavLink } from 'react-router-dom';
import s from './Footer.module.scss';

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.left}>
          <h2>Արմաթ Առափի</h2>
          <p>Տեխնոլոգիաների նոր սերունդը այստեղ է սկսվում։</p>
        </div>
        <div className={s.right}>
          <ul>
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? s.active : ''}>
                Գլխավոր
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? s.active : ''}>
                Մեր մասին
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? s.active : ''}>
                Կապ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
