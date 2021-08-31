// https://formspree.io/anders.e.howerton@gmail.com
import React from 'react';
import { useState } from 'react';
import { styled, createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { TextField, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useForm, ValidationError } from '@formspree/react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formContainer: {
      width: "40%",
      height: "80%",
      margin: "0 auto",
      marginTop: "10%",
      background: "rgba(255, 255, 255, 1.0)",
      opacity: "1.0"
    },
    close: {
      marginLeft: "35px",
    },
    nameEmail: {
      display: "flex",
      justifyContent: "space-between",
      "& > div": {
        width: "48%"
      }

    },
    message: {
      marginTop: "20px",
      width: "100%"
    },
    button: {
      width: "70%",
      marginLeft: "15%",
      marginTop: "20px",
      "& span": {
        fontFamily: "IBM Plex Mono, monospace",
      }
    },
    ty: {
      width: "50%",
      margin: "0 auto",
      textAlign: "center",
      fontFamily: "IBM Plex Mono, monospace",
    }
  })
)

const ContactContainer = styled('div')({
  position: "fixed",
  top: 0,
  width: "100%",
  height: "100%",
  opacity: "0.95"
});

export default function Contact(props) {
  const classes = useStyles();
  const closeForm = props.closeForm
  const [name, setName] = useState("")
  const [messageValue, setMessageValue] = useState("")
  const [email, setEmail] = useState("")
  const [submitState, handleSubmit] = useForm("xeqvvael");
  if (submitState.succeeded) {
      return <p className={classes.ty}>Thanks for reaching out!</p>;
  }

  const handleMessageChange = (event) => {
    console.log("changing")
    console.log(event.target.value)
    setMessageValue(event.target.value)
  }

  const handleNameChange = (event) => {
    console.log(`name ${event.target.value}`)
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    console.log(`email ${event.target.value}`)
    setEmail(event.target.value)
  }

  const sendMessage = (event) => {
    console.log(`sending ${event}`)
  }

  return (
    <ContactContainer>
      <CloseIcon className={classes.close} onClick={closeForm} fontSize='large'/>
      <div className={classes.formContainer}>
        <h2>Get in touch.</h2>
        <form id="contact-anders"
              noValidate autoComplete="off"
              onSubmit={handleSubmit}>
          <div className={classes.nameEmail}>
            <TextField id="contact-name"
                       label="Name" variant="outlined"
                       value={name}
                       onChange={handleNameChange}
                       required={true}
                       name="name"/>
            <TextField id="contact-email"
                       label="Email"
                       variant="outlined"
                       value={email}
                       onChange={handleEmailChange}
                       required={true}
                       name="email"/>
          </div>
          <div><TextField
            id="contact-message"
            className={classes.message}
            label="Message"
            multiline
            rows={6}
            value={messageValue}
            onChange={handleMessageChange}
            variant="outlined"
            required={true}
            name="message"
          /></div>
          <Button variant="contained"
                  className={classes.button}
                  type="submit"
                  form="contact-anders"
                  disabled={submitState.submitting}
                >SEND</Button>
        </form>
      </div>
    </ContactContainer>
  )
}
