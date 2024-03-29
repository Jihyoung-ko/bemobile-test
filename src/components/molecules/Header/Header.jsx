import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useMainState } from '../../../AppContext';

export const Header = () => {
  const { cart } = useMainState();

  const totalQuantity = cart.reduce(
    (accumulator, nextValue) => accumulator + nextValue.quantity,
    0
  );

  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h4">
            <Link to={`/`}> BM market </Link>
          </Typography>
          <Badge badgeContent={totalQuantity} color="error">
            <Link to={`/cart`}>
              {' '}
              <ShoppingCart />{' '}
            </Link>
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  );
};
