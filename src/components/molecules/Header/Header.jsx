import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Toolbar, Typography } from '@mui/material';
import React from 'react';

export const Header = () => {
  return (
    <div>
      <AppBar position='static' color='secondary'>
        <Toolbar>
          <Typography variant='h4'>
            BM market
          </Typography>
          <Badge badgeContent={2} color="error">
            <ShoppingCart />
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  )
}
