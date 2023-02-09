import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useShoppingCart } from 'modules/ShoppingCartContext';
import storeitem from 'data/items.json';
import CloseIcon from '@mui/icons-material/Close';
import { fommatCurrency } from 'hooks/fomatCurrency';
type CartItemsProps = {
  id: number;
  quantity: number;
};

const CartItems = ({ id, quantity }: CartItemsProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeitem.find((i) => i.id === id);
  if (item === undefined) {
    return null;
  }

  return (
    <Card sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: '100%', maxWidth: '125px', height: '75px' }}
          image={require(`../../../src/${item.imgUrl}`)}
          alt="cart items"
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Box sx={{ paddingX: '5px' }}>
            <Typography component="span">{item.name}</Typography>
            {quantity > 0 && (
              <Typography
                variant="caption"
                component="span"
                sx={{ color: 'gray', marginLeft: '5px' }}
              >
                x{quantity}
              </Typography>
            )}
            <Typography
              variant="caption"
              sx={{ color: 'gray', display: 'block' }}
            >
              {fommatCurrency(item.price)}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ color: 'gray' }}>
              {fommatCurrency(item.price * quantity)}
            </Typography>
            <IconButton onClick={() => removeFromCart(item.id)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default CartItems;
