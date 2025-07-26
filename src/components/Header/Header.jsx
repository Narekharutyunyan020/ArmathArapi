import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Ավելացնում ենք useEffect
import s from './Header.module.scss';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Փակում է մենյուն և կանխում body-ի պտտումը, երբ մենյուն բաց է
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Կանխում է body-ի պտտումը
    } else {
      document.body.style.overflow = 'unset'; // Վերականգնում է body-ի պտտումը
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

            <NavLink to="/" end className={({ isActive }) => isActive ? s.active : ''} onClick={closeMenu}>Գլխավոր</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? s.active : ''} onClick={closeMenu}>Մեր մասին</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? s.active : ''} onClick={closeMenu}>Կապ</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;