import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useShoppingCart } from 'modules/ShoppingCartContext';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CartItems from 'components/atoms/CartItems';
import Stack from '@mui/material/Stack';
import storeitem from 'data/items.json';
import { fommatCurrency } from 'hooks/fomatCurrency';

type shoppingCartProps = { isOpen: boolean };

const ShoppingCart = ({ isOpen }: shoppingCartProps) => {
  const { toggleDrawer, cartItems, cartQuantity } = useShoppingCart();

  const list = () => (
    <Box
      role="presentation"
      onKeyDown={toggleDrawer(false)}
      sx={{ width: '400px' }}
    >
      <List>
        <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
          Cart
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </ListItem>
        <ListItem>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ width: '100%' }}
          >
            {cartItems.map((item) => (
              <CartItems key={item.id} {...item} />
            ))}
            {cartQuantity > 0 && (
              <Box>
                <Typography>
                  {fommatCurrency(
                    cartItems.reduce((total, cartItem) => {
                      const item = storeitem.find((i) => i.id === cartItem.id);
                      return total + (item?.price || 0) * cartItem.quantity;
                    }, 0),
                  )}
                </Typography>
              </Box>
            )}
          </Stack>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Drawer anchor={'right'} open={isOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
};

export default ShoppingCart;
