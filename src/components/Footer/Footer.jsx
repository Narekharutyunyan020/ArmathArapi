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
      Home
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/about"
      className={({ isActive }) => (isActive ? s.active : s.navLink)}
    >
      About Us
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/structure"
      className={({ isActive }) => (isActive ? s.active : s.navLink)}
    >
      Structure
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/fields"
      className={({ isActive }) => (isActive ? s.active : s.navLink)}
    >
      Fields of Study
    </NavLink>
  </li>
  
  <li>
    <NavLink
      to="/events"
      className={({ isActive }) => (isActive ? s.active : s.navLink)}
    >
      Events
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/projects"
      className={({ isActive }) => (isActive ? s.active : s.navLink)}
    >
      Our Projects
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/join"
      className={({ isActive }) => (isActive ? s.active : s.navLink)}
    >
      Join as a Student
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/support"
      className={({ isActive }) => (isActive ? s.active : s.navLink)}
    >
      Support Armath
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/contact"
      className={({ isActive }) => (isActive ? s.active : s.navLink)}
    >
      Contact Us
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
