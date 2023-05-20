import React, { useState } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [womenSubMenuOpen, setWomenSubMenuOpen] = useState(false);
  const [menSubMenuOpen, setMenSubMenuOpen] = useState(false);
  const [kidsSubMenuOpen, setKidsSubMenuOpen] = useState(false);


  const handleNewMen = () => {
    router.push('/men')
  }

  const handleNewWomen = () => {
    router.push('/women')
  }
  const handleNewKids = () => {
    router.push('/kids')
  }

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
  const handleMenClick = () => {
    setMenSubMenuOpen(!menSubMenuOpen);
  };
  const handleWomenClick = () => {
    setWomenSubMenuOpen(!womenSubMenuOpen);
  };
  const handleKidsClick = () => {
    setKidsSubMenuOpen(!kidsSubMenuOpen);
  };
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setWomenSubMenuOpen(false);
    setMenSubMenuOpen(false);
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

      <div className={styles['navbar-menu-icon']} onClick={handleMenuClick}>
        <FontAwesomeIcon icon={faBars} className={styles['navbar-icon']} />
      </div>

      {menuOpen && (
        <div className={styles['navbar-offcanvas']}>
          <FontAwesomeIcon
            icon={faTimes}
            className={`${styles['navbar-icon']} ${styles['cursor-pointer']}`}
            onClick={handleMenuClose}
          />
          <div className={styles['navbar-menu-items']}>
            <Text className={styles['navbar-menu-item']} onClick={handleMenClick}>
              Men
            </Text>
            {menSubMenuOpen && (
              <div className={styles['navbar-submenu']}>
                <Text className={styles['navbar-submenu-item']} onClick={handleNewMen}>NEW</Text>
                <Text className={styles['navbar-submenu-item']}>ZARA ATHLETICZ</Text>
                <Text className={styles['navbar-submenu-item']}>LINEN</Text>
                <Text className={styles['navbar-submenu-item']}>CROCHET</Text>
                <Text className={styles['navbar-submenu-item']}>BASICS</Text>
                <Text className={styles['navbar-submenu-item']}>SUITS</Text>
                <Text className={styles['navbar-submenu-item']}>SHIRTS</Text>
                <Text className={styles['navbar-submenu-item']}>T-SHIRTS</Text>
                <Text className={styles['navbar-submenu-item']}>JACKETS | OVERSHIRTS</Text>
                <Text className={styles['navbar-submenu-item']}>TROUSERS</Text>
                <Text className={styles['navbar-submenu-item']}>JEANS</Text>
                <Text className={styles['navbar-submenu-item']}>SHORTS</Text>
                <Text className={styles['navbar-submenu-item']}>HOODIES | SWEATSHIRTS</Text>
                <Text className={styles['navbar-submenu-item']}>SWEATERS | CARDIGANS</Text>
                <Text className={styles['navbar-submenu-item']}>TOTAL LOOK</Text>
                <Text className={styles['navbar-submenu-item']}>POLO SHIRTS</Text>
                <Text className={styles['navbar-submenu-item']}>SWIMWEAR</Text>
                <Text className={styles['navbar-submenu-item']}>CARGO | PARACHUTE</Text>
                <Text className={styles['navbar-submenu-item']}>BLAZERS</Text>
                <Text className={styles['navbar-submenu-item']}>TRENCH COATS</Text>
                <Text className={styles['navbar-submenu-item']}>SHOES</Text>
                <Text className={styles['navbar-submenu-item']}>BAGS | BACKPACKS</Text>
                <Text className={styles['navbar-submenu-item']}>ACCESSORIES</Text>
                <Text className={styles['navbar-submenu-item']}>BEAUTY</Text>
                <Text className={styles['navbar-submenu-item']}>SPECIAL PRICES</Text>
                <Text className={styles['navbar-submenu-item']}>SPECIAL EDITION</Text>
                <Text className={styles['navbar-submenu-item']}>JOIN LIFE</Text>
                <Text className={styles['navbar-submenu-item']}>+ INFO</Text>
              </div>
            )}
            <Text className={styles['navbar-menu-item']} onClick={handleWomenClick}>
              Women
            </Text>
            {womenSubMenuOpen && (
              <div className={styles['navbar-submenu']}>
                <Text className={styles['navbar-submenu-item']} onClick={handleNewWomen}>NEW</Text>
                <Text className={styles['navbar-submenu-item']}>BLAZERS</Text>
                <Text className={styles['navbar-submenu-item']}>JACKETS | TRENCH COATS</Text>
                <Text className={styles['navbar-submenu-item']}>WAISTCOATS | GILETS</Text>
                <Text className={styles['navbar-submenu-item']}>DRESSES | JUMPSUITS</Text>
                <Text className={styles['navbar-submenu-item']}>SHIRTS</Text>
                <Text className={styles['navbar-submenu-item']}>T-SHIRTS | SWEATSHIRTS</Text>
                <Text className={styles['navbar-submenu-item']}>TOPS | BODYSUITS</Text>
                <Text className={styles['navbar-submenu-item']}>KNITWEAR</Text>
                <Text className={styles['navbar-submenu-item']}>TROUSERS</Text>
                <Text className={styles['navbar-submenu-item']}>JEANS</Text>
                <Text className={styles['navbar-submenu-item']}>SKIRTS</Text>
                <Text className={styles['navbar-submenu-item']}>SHORTS | SKORTS</Text>
                <Text className={styles['navbar-submenu-item']}>SHOES</Text>
                <Text className={styles['navbar-submenu-item']}>BAGS</Text>
                <Text className={styles['navbar-submenu-item']}>ACCESSORIES | JEWELLERY</Text>
                <Text className={styles['navbar-submenu-item']}>BIKINIS | SWIMSUITS</Text>
                <Text className={styles['navbar-submenu-item']}>PERFUMES</Text>
                <Text className={styles['navbar-submenu-item']}>BEAUTY</Text>
                <Text className={styles['navbar-submenu-item']}>CO-ORD SETS</Text>
                <Text className={styles['navbar-submenu-item']}>SUITS</Text>
                <Text className={styles['navbar-submenu-item']}>SPECIAL PRICES</Text>
                <Text className={styles['navbar-submenu-item']}>DRESS TIME</Text>
                <Text className={styles['navbar-submenu-item']}>HOLIDAY EDIT</Text>
                <Text className={styles['navbar-submenu-item']}>BASICS</Text>
                <Text className={styles['navbar-submenu-item']}>SPECIAL EDITION</Text>
                <Text className={styles['navbar-submenu-item']}>SEAMLESSNEW</Text>
                <Text className={styles['navbar-submenu-item']}>JOIN LIFE</Text>
                <Text className={styles['navbar-submenu-item']}>LINEN</Text>
                <Text className={styles['navbar-submenu-item']}>+ INFO</Text>
              </div>
            )}
  <Text className={styles['navbar-menu-item']} onClick={handleKidsClick}>
        Kids
      </Text>
      {kidsSubMenuOpen && (
        <div className={styles['navbar-submenu']}>
          <Text className={styles['navbar-submenu-item']} onClick={handleNewKids}>SUMMER CAMPNEW</Text>
          <Text className={styles['navbar-submenu-item']}>TRUE NEUTRALSNEW</Text>
          <Text className={styles['navbar-submenu-item']}>GIRL | 6-14 YEARS</Text>
          <Text className={styles['navbar-submenu-item']}>BOY | 6-14 YEARS</Text>
          <Text className={styles['navbar-submenu-item']}>BABY GIRL | 9 MONTHS - 6 YEARS</Text>
          <Text className={styles['navbar-submenu-item']}>BABY BOY | 9 MONTHS - 6 YEARS</Text>
          <Text className={styles['navbar-submenu-item']}>ACCESSORIES | SHOES</Text>
          <Text className={styles['navbar-submenu-item']}>JOIN LIFE</Text>
          <Text className={styles['navbar-submenu-item']}>+ INFO</Text>
        </div>
      )}
    </div>
  </div>
)}
    </nav>
  );
};

export default Navbar;