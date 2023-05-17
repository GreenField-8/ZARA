import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

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
      <Box height={'400px'}>
        <Text pt="250px" textDecor="none">
          JOIN OUR NEWSLETTER
        </Text>
      </Box>
      <Box width="350px" margin="auto">
        <Flex justify="space-between">
          <Text fontSize="10px" onClick={openInstagram} cursor="pointer">
            INSTAGRAM
          </Text>
          <Text fontSize="10px" onClick={openFacebook} cursor="pointer">
            FACEBOOK
          </Text>
          <Text fontSize="10px" onClick={openTwitter} cursor="pointer">
            TWITTER
          </Text>
          <Text fontSize="10px" onClick={openPinterest} cursor="pointer">
            PINTEREST
          </Text>
          <Text fontSize="10px" onClick={openYouTube} cursor="pointer">
            YOUTUBE
          </Text>
          <Text fontSize="10px" onClick={openSpotify} cursor="pointer">
            SPOTIFY
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
