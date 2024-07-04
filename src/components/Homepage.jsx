import React from 'react';
import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Contact from './Contact';

const styles = {
  box: {
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: '1.5rem',
    fontFamily: 'IBM Plex Mono, monospace',
    '& a': {
      textDecoration: 'none',
      color: '#000000',
    },
  },
  tagLine: {
    fontFamily: 'IBM Plex Mono, monospace',
    fontSize: '2.5rem',
    letterSpacing: '0.1rem',
    color: '#333333',
  },
  button: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    fontFamily: 'IBM Plex Mono, monospace',
  },
  portfolioItem: {
    lineHeight: 1.1,
    '& a': {
      fontSize: '3.5rem',
      fontFamily: 'Montserrat, sans-serif',
      textDecoration: 'none',
      color: '#333333',
    },
  },
};

const StickyContainer = styled('div')({
  position: 'sticky',
  top: 0,
  bottom: 0,
  height: '100vh',
  padding: '40px',
  boxSizing: 'border-box',
});

const ScrollingContainer = styled('section')({
  height: '100vh',
});

const Homepage = (props) => {
  const [contactMode, toggleContactMode] = useState(false);
  const bgColors = [
    'rgb(247, 237, 226)',
    'rgb(0, 143, 100)',
    'rgb(255, 186, 186)',
    'rgb(226, 72, 72)',
    'rgb(255, 255, 255)',
    'rgb(74, 86, 247)',
    'rgb(219, 172, 255)',
    'rgb(125, 205, 250)',
  ];
  const scrollers = bgColors.map((color) => {
    return <ScrollingContainer key={color} sx={{ background: color }} />;
  });

  const renderContactForm = () => {
    if (contactMode) {
      return (
        <Contact
          closeForm={() => {
            toggleContactMode(false);
          }}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <Box>
      {scrollers}
      <StickyContainer>
        <Box sx={styles.box}>
          <Box>
            <Typography component="h1" sx={styles.name}>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/andershowerton/">
                ANDERS HOWERTON
              </a>
            </Typography>
            <Typography component="h4" sx={styles.tagLine}>
              FULL-STACK SOFTWARE ENGINEER
            </Typography>
          </Box>
          <Box>
            <Button
              sx={styles.button}
              onClick={() => {
                toggleContactMode(true);
              }}
            >
              CONTACT
            </Button>
          </Box>
        </Box>
        <Box mt={16}>
          <Typography sx={styles.portfolioItem}>
            <a target="_blank" rel="noreferrer" href="https://respuestavenezolanos.iom.int/en/platform-r4v">
              R4V PLATFORM
            </a>
          </Typography>
          <Typography sx={styles.portfolioItem}>
            <a target="_blank" rel="noreferrer" href="https://astrologyfordays.com/">
              ASTROLOGY FOR DAYS
            </a>
          </Typography>
          <Typography sx={styles.portfolioItem}>
            <a target="_blank" rel="noreferrer" href="https://apps.apple.com/us/app/tiny-spark/id1437934449">
              TINY SPARK
            </a>
          </Typography>
        </Box>
        {renderContactForm()}
      </StickyContainer>
    </Box>
  );
};

export default Homepage;
