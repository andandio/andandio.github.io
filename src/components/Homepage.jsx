import React from 'react';
import { useState } from 'react';
import { styled, createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import Contact from './Contact'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rightBar: {
      right: 0,
    },
    leftBar: {
      left: 0
    },
    box: {
      marginTop: "150px",
      textAlign: "center"
    },
    name: {
      fontSize: "4rem",
      fontFamily: 'Poppins, sans-serif',
    },
    tagLine: {
      fontFamily: "IBM Plex Mono, monospace",
      fontWeight: 100,
      fontSize: "1.5rem",
      letterSpacing: "0.3rem"
    },

  })
)

const HomepageContainer = styled('div')({
  width: "100vw",
  height: "100vh",
  position: "fixed"
});

const SideLine = styled('div')({
  position: "absolute",
  top: 0,
  width: "30px",
  height: "100%",
  backgroundColor: "#00ff00"
});

export default function Homepage(props) {
  const classes = useStyles();
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
      <SideLine className={classes.leftBar}/>
      <Box m="0 auto" p={2} width={"50%"} height="50%" className={classes.box}>
        <h1 className={classes.name}>ANDERS O. E.<br/>HOWERTON</h1>
        <h4 className={classes.tagLine}>innovation + solutions</h4>
        <Button onClick={() => {toggleContactMode(true)}}>CONTACT</Button>
      </Box>
      <SideLine className={classes.rightBar}/>
      {renderContactForm()}
    </HomepageContainer>
  )
}
