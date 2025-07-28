import { NavLink } from 'react-router-dom';
import s from './Footer.module.scss';
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.left}>
          <h2 className={s.logo}>Արմաթ Առափի</h2>
          <p className={s.tagline}>Տեխնոլոգիաների նոր սերունդը այստեղ է սկսվում։</p>
        </div>
        <nav className={s.right}>
          <ul className={s.navList}>
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

          {/* Սոցիալական ցանցերի բաժինն ավելացրեցինք այստեղ */}
          <div className={s.socials}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
