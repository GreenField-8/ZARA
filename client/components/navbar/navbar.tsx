import React, { useState } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    router.push('/');
  };

  const handleLoginClick = () => {
    router.push('/Login');
  };

  const handleSearchClick = () => {
    router.push('/searchPage');
  };

  const handleHelpClick = () => {
    router.push('/postDetailsPage');
  };

  const handleCartClick = () => {
    router.push('/cart');
  };
  const handleManClick = () => {
    router.push('/men');
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    <nav className={styles.navbar}>
      <div>
        <Image
          className={styles['navbar-logo']}
          src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg"
          alt="Zara Logo"
          onClick={handleLogoClick}
        />
      </div>

      <div className={styles['navbar-search-box']} onClick={handleSearchClick}>
        <Text fontSize="11px">SEARCH</Text>
      </div>

      <div className={styles['navbar-login-text']} onClick={handleLoginClick}>
        <Text fontSize="12px">LOG IN</Text>
      </div>

      <div className={`${styles['navbar-login-help']} ${styles['navbar-login-help']}`} onClick={handleHelpClick}>
        <Text fontSize="11px">HELP</Text>
      </div>

      <div className={`${styles['navbar-login-text']} ${styles['navbar-cart-icon']}`} onClick={handleCartClick}>
        <Image
          className="navbar-cart-image"
          width="22px"
          height="20px"
          src="https://cdn-icons-png.flaticon.com/512/3110/3110065.png"
          alt="Cart"
        />
      </div>

      <div className={styles['navbar-menu-icon']} onClick={handleMenuClick} >
        {menuOpen ? (
          <FontAwesomeIcon icon={faTimes} className={styles['navbar-icon']}/>
        ) : (
          <FontAwesomeIcon icon={faBars}  />
        )}
      </div>

      {menuOpen && (
        <div className={styles['navbar-offcanvas']}>
          <div className={styles['navbar-menu-items']}>
            <Text className={styles['navbar-menu-item']}>Woman</Text>
            <Text className={styles['navbar-menu-item']}>Kids</Text>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
