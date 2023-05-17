import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleSearchClick = () => {
    router.push('/search');
  };

  const handleHelpClick = () => {
    router.push('/help');
  };

  const handleCartClick = () => {
    router.push('/cart');
  };

  return (
    <nav
      className="navbar"
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        backgroundColor: 'white',
        boxShadow: '0 0px 0px rgba(0, 0, 0, 0.0)',
        zIndex: 9999,
      }}
    >
      <div>
        <Image
          className="navbar-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg"
          alt="Zara Logo"
          style={{ marginTop: '100px', width: '22%', marginLeft: '200px', cursor: 'pointer' }}
          onClick={handleLogoClick}
        />
      </div>

      <div style={{ marginLeft: '2px', marginTop: '30px', marginRight: '150px' }}>
        <Box
          className="navbar-search-box"
          align="left"
          width="100px"
          fontWeight="600"
          fontFamily="neue-helvetica"
          borderBottom="1px solid black"
          style={{ cursor: 'pointer' }}
          onClick={handleSearchClick}
        >
          <Text fontSize="11px">SEARCH</Text>
        </Box>
      </div>

      <div style={{ marginRight: '150px', marginTop: '30px', cursor: 'pointer' }} onClick={handleLoginClick}>
        <Text className="navbar-login-text" fontSize="11px">
          LOG IN
        </Text>
      </div>

      <div style={{ marginRight: '200px', marginTop: '30px', cursor: 'pointer' }} onClick={handleHelpClick}>
        <Text className="navbar-login-text" fontSize="11px">
          HELP
        </Text>
      </div>

      <div style={{ marginRight: '50px', marginTop: '30px' }}onClick={handleCartClick}>
        <Image
          className="navbar-cart-image"
          width="22px"
          height="20px"
          src="https://cdn-icons-png.flaticon.com/512/3110/3110065.png"
          alt="Cart"
        />
      </div>
    </nav>
  );
};

export default Navbar;
