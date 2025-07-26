import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import s from './Header.module.scss';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={s.header}>
      <nav className={s.navbar}>
        <div className={s.container}>
          <NavLink to="/" className={s.logoLink}>
            <img src="/images/logo.png" alt="Armath Gyumri Logo" className={s.logo} />
          </NavLink>

          {/* Բուրգեր կոճակ */}
          <button className={s.burger} onClick={toggleMenu}>
            <span className={menuOpen ? s.open : ''}></span>
            <span className={menuOpen ? s.open : ''}></span>
            <span className={menuOpen ? s.open : ''}></span>
          </button>

          {/* Մենյու */}
          <div className={`${s.menu} ${menuOpen ? s.menuOpen : ''}`}>
            <NavLink to="/" end className={({ isActive }) => isActive ? s.active : ''}>Գլխավոր</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? s.active : ''}>Մեր մասին</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? s.active : ''}>Կապ</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
