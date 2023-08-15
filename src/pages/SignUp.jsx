import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Box, Container } from '@mui/material';
import { ApiFunction, isValidEmail, isValidName } from '../helpers';
import { Context } from '../context/Context';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Brand from '../ui/Brand';

export default function SignIn() {
  const {setAuth} = React.useContext(Context)
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!isValidEmail(data.get('email')) || !isValidName(data.get('name'))) {
      return toast.warn('email or name is invalid')
    } else {
      let body = JSON.stringify({
        "name": data.get('name'),
        "email": data.get('email'),
        "key": data.get('key'),
        "secret": data.get('secret')
      });
      const result = await ApiFunction('POST', "/signup", body)
      result?.data ? setAuth(result) : toast.warn(result?.message)
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box sx={{marginTop: 8,display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
          <Brand fill="#1976d2" />
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Input id="name" label="Your Name" type="text" name="name" />
            <Input id="email" label="Your Email" type="email" name="email" />
            <Input id="key" label="Your Key" type="password" name="key" />
            <Input id="secret" label="Your Secret" type="password" name="secret" />
            <Button type='submit' text="Register" style={{ background: "#1976d2" }} />
          </Box>
        </Box>
      </Container>
      <ToastContainer />
    </>
  );
}