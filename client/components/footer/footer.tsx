import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  const openInstagram = () => {
    window.open('https://www.instagram.com/zara/', '_blank');
  };

  const openFacebook = () => {
    window.open('https://www.facebook.com/Zara', '_blank');
  };

  const openTwitter = () => {
    window.open('https://twitter.com/ZARA', '_blank');
  };

  const openPinterest = () => {
    window.open('https://www.pinterest.es/zaraofficial/', '_blank');
  };

  const openYouTube = () => {
    window.open('https://www.youtube.com/user/zara', '_blank');
  };

  const openSpotify = () => {
    window.open('https://open.spotify.com/user/r6ivwuv0ebk346hhxo446pbfv', '_blank');
  };

  return (
    <>
      <Box className={styles['footer-container']}>
        <Text className={styles['footer-newsletter']} textDecor="none">
          JOIN OUR NEWSLETTER
        </Text>
      </Box>
      <Box className={styles['footer-links']}>
        <Flex justify="space-between">
          <Text className={styles['footer-link']} onClick={openInstagram}>
            INSTAGRAM
          </Text>
          <Text className={styles['footer-link']} onClick={openFacebook}>
            FACEBOOK
          </Text>
          <Text className={styles['footer-link']} onClick={openTwitter}>
            TWITTER
          </Text>
          <Text className={styles['footer-link']} onClick={openPinterest}>
            PINTEREST
          </Text>
          <Text className={styles['footer-link']} onClick={openYouTube}>
            YOUTUBE
          </Text>
          <Text className={styles['footer-link']} onClick={openSpotify}>
            SPOTIFY
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;