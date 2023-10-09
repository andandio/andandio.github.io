import React from 'react';
import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Contact from './Contact'

const styles = {
  box: {
    marginTop: "20px",
  },
  name: {
    fontSize: "1.5rem",
    fontFamily: 'IBM Plex Mono, monospace',
    "& a": {
      textDecoration: "none",
      color: "#000000"
    }
  },
  tagLine: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 100,
    fontSize: "2.5rem",
    letterSpacing: "0.1rem",
    color: "#333333",
  },
  button: {
    color: "#805da6",
    fontWeight: "bold"
  },
  portfolioItem: {
    "& a": {
      fontSize: "3.5rem",
      fontFamily: "Montserrat, sans-serif",
      textDecoration: "none",
      color: "#333333"
    }
  }
}


const HomepageContainer = styled('div')({
  width: "100vw",
  height: "100vh",
  padding: "40px",
  backgroundColor: "#f7ede2"
});

const Homepage = (props) => {
  const [contactMode, toggleContactMode] = useState(false)

  const renderContactForm = () => {
    if (contactMode) {
      return (
        <Contact closeForm={() => {toggleContactMode(false)}}/>
      )
    } else {
      return null
    }
  }

  return (
    <HomepageContainer>
      <Box sx={styles.box}>
        <Typography component="h1" sx={styles.name}>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/andershowerton/">ANDERS E. HOWERTON</a>
        </Typography>
        <Typography component="h4" sx={styles.tagLine}>FULL-STACK SOFTWARE ENGINEER</Typography>
        <Button sx={styles.button} onClick={() => {toggleContactMode(true)}}>CONTACT</Button>
      </Box>
      <Box mt={4}>
        <Typography sx={styles.portfolioItem}>
          <a target="_blank" rel="noreferrer" href="https://respuestavenezolanos.iom.int/en/platform-r4v">R4V PLATFORM</a>
        </Typography>
        <Typography sx={styles.portfolioItem}>
            <a target="_blank" rel="noreferrer" href="https://astrologyfordays.com/">ASTROLOGY FOR DAYS</a>
        </Typography>
        <Typography sx={styles.portfolioItem}>
            <a target="_blank" rel="noreferrer" href="https://apps.apple.com/us/app/tiny-spark/id1437934449">TINY SPARK</a>
        </Typography>
      </Box>
      {renderContactForm()}
    </HomepageContainer>
  )
}

export default Homepage;
