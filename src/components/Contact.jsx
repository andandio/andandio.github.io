// https://formspree.io/anders.e.howerton@gmail.com
import React from 'react';
import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, ValidationError } from '@formspree/react';

const styles = {
  formContainer: {
    width: '80%',
    height: '70%',
    padding: '40px',
    marginTop: '8%',
    background: 'rgb(247, 237, 226)',
    opacity: '1.0',
    '& h2': {
      fontFamily: 'Montserrat, sans-serif',
      color: '#333333',
    },
  },
  close: {
    position: 'absolute',
    top: '20px',
    right: '60px',
    cursor: 'pointer',
  },
  nameEmail: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '20px',
    '& > div': {
      width: '43%',
      maxWidth: '350px',
    },
  },
  message: {
    marginTop: '20px',
    width: '80%',
    maxWidth: '450px',
  },
  button: {
    width: '200px',
    height: '40px',
    marginTop: '20px',
    background: '#805da6',
    '&:hover': {
      background: '#805da6',
    },
    '& span': {
      fontFamily: 'IBM Plex Mono, monospace',
    },
  },
  ty: {
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'IBM Plex Mono, monospace',
  },
};

const ContactContainer = styled('div')({
  position: 'fixed',
  top: 0,
  width: '100%',
  height: '100%',
  opacity: '0.95',
});

export default function Contact(props) {
  const closeForm = props.closeForm;
  const [name, setName] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [email, setEmail] = useState('');
  const [submitState, handleSubmit] = useForm('xzvnwjqx');
  if (submitState.succeeded) {
    return (
      <Box component="p" sx={styles.ty}>
        Thanks for reaching out!
      </Box>
    );
  }

  const handleMessageChange = (event) => {
    setMessageValue(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <ContactContainer>
      <CloseIcon sx={styles.close} onClick={closeForm} fontSize="large" />
      <Box sx={styles.formContainer}>
        <h2>Get in touch.</h2>
        <form id="contact-anders" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Box sx={styles.nameEmail}>
            <TextField
              id="contact-name"
              label="Name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
              required={true}
              name="name"
            />
            <ValidationError prefix="Name" field="name" errors={submitState.errors} />
            <TextField
              id="contact-email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              required={true}
              name="email"
            />
            <ValidationError prefix="Email" field="email" errors={submitState.errors} />
          </Box>
          <Box>
            <TextField
              id="contact-message"
              sx={styles.message}
              label="Message"
              multiline
              rows={6}
              value={messageValue}
              onChange={handleMessageChange}
              variant="outlined"
              required={true}
              name="message"
            />
            <ValidationError prefix="Message" field="message" errors={submitState.errors} />
          </Box>
          <Button
            variant="contained"
            sx={styles.button}
            type="submit"
            form="contact-anders"
            disabled={submitState.submitting}
          >
            SEND
          </Button>
        </form>
      </Box>
    </ContactContainer>
  );
}
