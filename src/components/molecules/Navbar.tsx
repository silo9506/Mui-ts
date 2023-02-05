import {
  Container,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  IconButton,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { flexbox } from 'styles/mixins';

const Navbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar
        color="default"
        position="sticky"
        sx={{ boxShadow: 1, backgroundColor: 'white', paddingY: '5px' }}
      >
        <Container>
          <Toolbar disableGutters={true} variant="dense">
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                flex: 1,
                '.MuiTabs-indicator': {
                  backgroundColor: 'unset',
                },
              }}
            >
              <Tab component={RouterLink} to="/" label="Home" />
              <Tab component={RouterLink} to="/About" label="About" />
              <Tab component={RouterLink} to="/Store" label="Store" />
            </Tabs>
            <CartBtn>
              <ShoppingCartIcon color="info" />
              <div className="alert-circle">5</div>
            </CartBtn>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

const CartBtn = styled(IconButton)`
  border: 1px solid var(--primary);
  border-radius: 50%;
  position: relative;
  .alert-circle {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(25%, 25%);
    background-color: red;
    border-radius: 50%;
    color: white;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
    ${flexbox};
  }
  svg {
    fill: var(--primary);
  }
  &:hover {
    background-color: var(--primary);
    svg {
      fill: white;
    }
  }
`;

export default Navbar;
