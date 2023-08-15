import * as React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Context } from '../context/Context'
import Button from '../ui/Button';
import Brand from '../ui/Brand';
import BookSearch from './BookSearch';

export default function NavBar() {
  const {setShowInput,setAuth, } = React.useContext(Context)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", flexDirection:{md: "row", sm:"column", xs: "column" }, alignItems: "center", justifyContent:"space-between", gap: "10px", fontSize: "25px", padding:"10px"}}>
          <Brand fill="#fff" />
          <Box sx={{width:{sm:"600px", xs: "80%" }, display: "flex", flexWrap: {sm:"nowrap", xs: "wrap" }, gap: "10px" }}>
            <BookSearch />
            <Button style={{ background: "#1976d2" }} text="Create Book" click={() => setShowInput({show:true,edit:false,book:null})} />
            <Button style={{ background: "red" }} text="log out" click={() => setAuth(null)} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}