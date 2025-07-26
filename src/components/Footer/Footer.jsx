import { NavLink } from 'react-router-dom';
import s from './Footer.module.scss';

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.left}>
          <h2 className={s.logo}>Արմաթ Առափի</h2>
          <p className={s.tagline}>Տեխնոլոգիաների նոր սերունդը այստեղ է սկսվում։</p>
        </div>
        <nav className={s.right}> {/* Using <nav> for semantic correctness */}
          <ul className={s.navList}> {/* More specific class name */}
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? s.active : s.navLink)}
              >
                Գլխավոր
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? s.active : s.navLink)}
              >
                Մեր մասին
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? s.active : s.navLink)}
              >
                Կապ
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;