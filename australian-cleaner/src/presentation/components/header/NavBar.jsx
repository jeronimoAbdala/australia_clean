import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Title
        </Typography>

        <Button color="inherit" onClick={() => navigate('/prices')}>
          Prices
        </Button>
        <Button color="inherit" onClick={() => navigate('/comprar')}>
          Comprar
        </Button>
        <Button color="inherit" onClick={() => navigate('/example')}>
          Example
        </Button>
      </Toolbar>
    </AppBar>
  );
}
