import React from 'react';
import { fommatCurrency } from 'hooks/fomatCurrency';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { useShoppingCart } from 'modules/ShoppingCartContext';
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const Storeitem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card>
      <CardMedia
        sx={{
          height: 200,
          objectFit: 'cover',
        }}
        image={require(`../../../src/${imgUrl}`)}
        title="green iguana"
        src="img"
      />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: 'gray', fontWeight: 'bold' }}
          >
            {fommatCurrency(price)}
          </Typography>
        </Box>
        {quantity === 0 ? (
          <Button
            variant="contained"
            fullWidth
            onClick={() => increaseCartQuantity(id)}
          >
            + Add To Cart
          </Button>
        ) : (
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                onClick={() => increaseCartQuantity(id)}
                size="small"
                sx={{
                  minWidth: '5px',
                }}
                variant="contained"
              >
                +
              </Button>
              <Box sx={{ marginX: '3px' }}>
                <Typography
                  component={'span'}
                  variant="h5"
                  sx={{ paddingX: '3px' }}
                >
                  {quantity}
                </Typography>
                in cart
              </Box>

              <Button
                onClick={() => decreaseCartQuantity(id)}
                size="small"
                sx={{
                  minWidth: '5px',
                }}
                variant="contained"
              >
                -
              </Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button onClick={() => removeFromCart(id)} variant="contained">
                Remove
              </Button>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default Storeitem;
