import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Ավելացնում ենք useEffect
import s from './Header.module.scss';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }


    // Մաքրման ֆունկցիա (cleanup function)
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]); // Կատարվում է, երբ menuOpen փոփոխվում է

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => { // Առանձին ֆունկցիա մենյուն փակելու համար
    setMenuOpen(false);
  };

  return (
    <header className={s.header}>
      <nav className={s.navbar}>
        <div className={s.container}>
          <NavLink to="/" className={s.logoLink} onClick={closeMenu}>
            <img src="/images/logo.png" alt="Armath Gyumri Logo" className={s.logo} />
          </NavLink>

          <button
            className={`${s.burger} ${menuOpen ? s.open : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Փակել մենյուն" : "Բացել մենյուն"}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>


          {menuOpen && <div className={s.backdrop} onClick={closeMenu}></div>}
          <div className={`${s.menu} ${menuOpen ? s.menuOpen : ''}`}>

            {/* <button className={s.closeButton} onClick={closeMenu} aria-label="Փակել մենյուն">
              &times; 
            </button> */}

         <NavLink to="/" end className={({ isActive }) => isActive ? s.active : ''} onClick={closeMenu}>Home</NavLink>
<NavLink to="/about" className={({ isActive }) => isActive ? s.active : ''} onClick={closeMenu}>About Us</NavLink>
<NavLink to="/structure" className={({ isActive }) => isActive ? s.active : ''} onClick={closeMenu}>Structure</NavLink>
<NavLink to="/fields" className={({ isActive }) => isActive ? s.active : ''} onClick={closeMenu}>Fields of Study</NavLink>
<NavLink to="/events" className={({ isActive }) => isActive ? s.active : ''} onClick={closeMenu}>Events</NavLink>
<NavLink to="/projects" className={({ isActive }) => isActive ? s.active : ''} onClick={closeMenu}>Our Projects</NavLink>
<NavLink to="/join" className={({ isActive }) => isActive ? s.active : ''} onClick={closeMenu}>Join as a Student</NavLink>
<NavLink to="/support" className={({ isActive }) => isActive ? s.active : ''} onClick={closeMenu}>Support Armath</NavLink>
<NavLink to="/contact" className={({ isActive }) => isActive ? s.active : ''} onClick={closeMenu}>Contact Us</NavLink>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;