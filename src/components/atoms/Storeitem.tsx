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
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const Storeitem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  console.log(id, name, price, imgUrl);
  const [quantity, setQuantity] = React.useState(0);
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
          <Button variant="contained" fullWidth>
            + Add To Cart
          </Button>
        ) : (
          <Box></Box>
        )}
      </CardContent>
    </Card>
  );
};

export default Storeitem;
