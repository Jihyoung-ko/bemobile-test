import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useMainState } from '../../../AppContext';

export const Header  = () => {


  const {cart} = useMainState()
  return (
    <div>
      <AppBar position='static' color='secondary'>
        <Toolbar>
          <Typography variant='h4'>
            BM market
          </Typography>
          <Badge badgeContent={1} color="error">
            <ShoppingCart />
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  )
}
